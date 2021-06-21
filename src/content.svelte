<script>
  import stringSimilarity from 'string-similarity'
  let start = false
  let similarRate = 0.9
  let visible = true
  let onScreen = false
  let element = {}
  let attributes = []
  let selected = []
  let selectTag = '{}'
  let selectValue = []
  let hidden = false
  let initHidden = hidden
  let show = false
  let boxSize = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  }

  function handleMessage(request, sender, sendResponse) {
    console.log('Messag: ', request)
    if (request === 'localToggle') {
      localToggle()
    }
    hidden = request.hidden
  }

  browser.storage.onChanged.addListener((change, area) => {
    console.log('change', { change })
    if (change.hidden) {
      initHidden = change.hidden.newValue
    }
  })

  browser.storage.local.get().then((data) => {
    console.log('getStorage', { data })
    if (data.hidden) {
      let host = window.location.host
      let sites = data.hosts || []
      let index = sites.indexOf(host)
      let inList = index !== -1
      initHidden = data.hidden && !inList
    }
  })

  const localToggle = () => {
    browser.storage.local.get().then((data) => {
      let host = window.location.host
      let sites = data.hosts || []
      let index = sites.indexOf(host)
      if (index === -1) {
        sites.push(host)
      } else {
        sites.splice(index, 1)
      }
      console.log({ data: data.hosts, host, sites })
      initHidden = index !== -1
      browser.storage.local.set({ hosts: sites })
    })
  }

  browser.runtime.onMessage.addListener(handleMessage)
  window.addEventListener('mousemove', (event) => {
    if (start) {
      let x = event.clientX
      let y = event.clientY
      // console.log({ x, y })
      let el = document.elementFromPoint(x, y)
      if (el) {
        const { width, height, top, left } = el.getBoundingClientRect()
        boxSize = { width, height, top, left }
        // console.log(elm, boxSize)
      }
    }
  })

  const elemHasText = (elm) => {
    if (elm.children.length === 0) {
      return elm
    } else if (elm.childNodes.length === 1) {
      return elemHasText(elm.childNodes[0])
    } else {
      return false
    }
  }

  const onGlobalClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('SDClick', e.path, elemHasText(e.srcElement))
    start = false
    clear()

    element = elemHasText(e.srcElement)
    if (element) {
      attributes = [...element.attributes, { nodeName: 'Text', nodeValue: element.innerText }]
      selectValue = ['Text']
    }
    // selected = e.path
    //   .map((i) => {
    //     return {
    //       type: i.localName,
    //       class: i.className,
    //     }
    //   })
    //   .filter((i) => i.type)

    window.removeEventListener('click', onGlobalClick)
  }

  const clear = () => {
    element = {}
    selected = []
    attributes = []
    similarElms = []
  }

  const startInspect = () => {
    start = !start

    setTimeout(() => {
      window.addEventListener('click', onGlobalClick)
    }, 100)
  }

  let similarElms = []
  let data = ''

  $: {
    if (element) {
      let elmNodes = document.querySelectorAll(element?.localName)
      // console.log(element, element.localName)
      // console.log(selectValue, selectValue.length)
      let text
      attributes.forEach((i) => {
        if (i.nodeName === 'Text') text = i.nodeValue
      })
      // console.log({ text, elms })
      if (text) {
        let elms = [...elmNodes].filter((i) => !isVisible || isVisible(i))
        similarElms = []

        var matches = stringSimilarity.findBestMatch(
          '#' + text,
          elms.map((i) => '#' + i.innerText)
        )

        matches.ratings.forEach((i, index) => {
          if (i.rating >= similarRate) {
            similarElms.push(elms[index])
          }
        })
        // console.log({ matches, similarElms })
        if (selectValue.length === 1) {
          data = similarElms.map((i) => getAttrValue(i, selectValue[0])).join('\n')
        } else {
          data = JSON.stringify(
            similarElms.map((i) => {
              let obj = {}
              selectValue.forEach((attr) => {
                obj[attr] = getAttrValue(i, attr)
              })
              return obj
            }),
            null,
            2
          )
        }
      }
      // if (selectValue.length === 1) {
      //   data = getData(elms, selecObj.index)
      //     .map((i) => getAttrValue(i, selectValue[0]))
      //     .join('\n')
      // } else {
      //   data = JSON.stringify(
      //     getData(elms, selecObj.index).map((i) => {
      //       let obj = {}
      //       selectValue.forEach((attr) => {
      //         obj[attr] = getAttrValue(i, attr)
      //       })
      //       return obj
      //     }),
      //     null,
      //     2
      //   )
      // }
    }
  }

  function isVisible(element) {
    if (!isRandered(element)) return false
    if (onScreen && isBehindOtherElement(element)) return false
    return true
  }

  function isVisibleByStyles(element) {
    const styles = window.getComputedStyle(element)
    return styles.visibility !== 'hidden' && styles.display !== 'none'
  }
  const isRandered = (element) => {
    const boundingRect = element.getBoundingClientRect()
    return boundingRect.width !== 0 && boundingRect.height !== 0
  }
  function isBehindOtherElement(element) {
    const boundingRect = element.getBoundingClientRect()
    // adjust coordinates to get more accurate results
    const left = boundingRect.left + 1
    const right = boundingRect.right - 1
    const top = boundingRect.top + 1
    const bottom = boundingRect.bottom - 1

    if (document.elementFromPoint(left, top) !== element) return true
    if (document.elementFromPoint(right, top) !== element) return true
    if (document.elementFromPoint(left, bottom) !== element) return true
    if (document.elementFromPoint(right, bottom) !== element) return true

    return false
  }
  const getAttrValue = (i, attr) => {
    if (attr === 'Text') {
      // console.log('text',i)
      return i.innerText
    } else {
      return i[attr]
    }
  }
  const getData = (elms, index) => {
    let ans = []
    if (!elms && elms.length <= 1) return []

    const findElement = (elms, index) => {
      if (index !== 0) {
        let childTag = selected[index - 1]

        for (let e of elms) {
          let node = e.childNodes
          // console.log(node, index)
          if (node && childTag && node.className === childTag.className && node.nodeName === childTag.localName) {
            if (index - 1 === 0) {
              ans.push(node[0])
            }
            if (node.childrenNode) {
              findElement(node.childrenNode, index - 1)
            }
            continue
          } else {
            continue
          }
        }
      } else {
        ans = [...elms]
      }
    }
    // console.log({ elms })
    findElement(elms, index)
    return ans
  }
</script>

<div
  style={`
    position: fixed;
    width:${boxSize.width}px;
    height:${1}px;
    top:${boxSize.top + boxSize.height}px;
    left:${boxSize.left}px;
    border-bottom:2px solid cornflowerblue;
    z-index: 999;
    opacity:${start ? 1 : 0};
    `}
/>
<main class="userscript" class:disabled={initHidden} class:hidden class:start class:show>
  <label>
    <button on:click={startInspect}>{!start ? 'Select Element' : 'End'}</button>
  </label>
  <label>
    <span>Similarity</span>
    : <input min="0" max="1" step="0.001" type="range" bind:value={similarRate} />
  </label>
  <label>
    <span>Visibility</span>
    : <input type="checkbox" name="visible" bind:checked={visible} />
  </label>
  <label>
    <span>On Screen</span>
    : <input type="checkbox" name="onScreen" bind:checked={onScreen} />
  </label>
  <!-- <div class="h1">Select</div>
  <div class="SDcontent">
    {#each selected as tag, index}
      <div class="values">
        <input
          type="radio"
          name={tag.class}
          bind:group={selectTag}
          value={JSON.stringify({
            tag: Object.values(tag)
              .filter((i) => i)
              .join('.'),
            index,
          })}
        />
        <label style={`padding-left:${(selected.length - index) * 10}px`} for={tag.class}>
          {#each Object.values(tag).filter((i) => i) as i, index}
            {#if index === 0}
              <b>{i}</b>
            {:else}
              .<span>{i}</span>
            {/if}
          {/each}
        </label>
      </div>
    {/each}
  </div> -->
  <!-- <div>{selectTag}</div> -->
  <div class="h1">Attributes</div>

  <div class="SDcontent">
    <div class="values" />
    {#each attributes as a}
      <div class="values attributes">
        <input type="checkbox" name={a.nodeName} bind:group={selectValue} value={a.nodeName} />
        <label class="dataName" for={a.nodeName}>{a.nodeName} :</label>
        <div class="dataString">{a.nodeValue}</div>
      </div>
    {/each}
  </div>
  <!-- <p>text: {element.innerText || ''}</p> -->
  <div class="h1">Find ({similarElms?.length || 0})</div>
  <!-- <div>{selectValue}</div> -->
  <textarea value={data} />
</main>

<style lang="scss">
  @media (prefers-color-scheme: dark) {
    .userscript {
      textarea {
        border-color: #3f3f3f;
      }
      .values {
        border-bottom: 1px solid #3f3f3f !important;
      }
    }
    .h1 {
      color: #999;
    }
    .userscript,
    textarea {
      border-color: #3d3d3d;
      color: #ccc;
    }
    textarea::selection {
      color: #ffffff;
      background-color: dodgerblue;
    }
    main.userscript,
    textarea {
      background-color: #343536;
    }
  }

  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 400;
    src: local('.SFNSText'), local('.HelveticaNeueDeskInterface'), local('.LucidaGrandeUI'), local('Ubuntu'), local('Segoe UI'), local('Roboto'),
      local('DroidSans'), local('Tahoma');
  }

  .userscript {
    transform: translateX(calc(100% - 2em));
    &:hover {
      transform: translateX(0);
    }
    &.disabled {
      display: none;
    }
    &.hidden {
      transform: translateX(-100%);
    }
    &.show {
      transform: translateX(0);
    }
    &.start {
      transform: translateX(calc(100% - 3em));
    }

    label {
      display: flex;
      padding: 0.5em 0;
      justify-content: flex-start;
      align-items: center;
      span {
        /* flex: 1; */
        font-size: 1em;
        width: 5.8em;
        padding-right: 1em;
      }
      input[type='checkbox'] {
        margin-left: auto;
      }
      input[type='range'] {
        flex: 4;
        margin-left: 1em;
      }
    }
    button {
      flex: 1;
      margin: 1em 0;
      background-color: dodgerblue;
      color: white;
      box-sizing: border-box;
      font: system;
      padding: 0.75em 1em;
      border: none;
      border-radius: 0.25em;
    }
    .SDcontent {
      max-height: 320px;
      overflow-y: scroll;
      font-family: system;
    }
    font-family: system;
    font-size: 16px;
    transition: transform 0.2s ease-in-out;
    position: fixed;
    /* display: flex; */
    /* flex-direction: column; */
    top: 0;
    right: 0;
    width: 320px;
    background-color: white;
    z-index: 9999999999999999999;
    box-shadow: 4px -4px 16px 0 rgba(0, 0, 0, 0.5);
    padding: 0 1em;
    border-radius: 0 0 0 1em;
    .h1 {
      font-size: 1.5em;
      font-weight: 600;
      padding: 1em 0;
      color: gray;
      margin: 0;
      font-family: system;
    }
    textarea {
      display: block;
      width: 100%;
      min-height: 320px;
      margin: 0 0 1em 0;
      -webkit-appearance: none;
      padding: 0.5em;
      border-radius: 0.5em;
    }
    .values {
      display: flex;
      align-items: center;
      padding: 0.25em 0;
      span {
        color: lightblue;
      }

      border-bottom: 1px solid #eee;

      input {
        flex: 1;
        margin: 0 0.5em;
      }
      .dataName {
        flex: 2;
      }
      .dataString {
        flex: 7;
        overflow-x: auto;
        text-overflow: ellipsis;
        font-size: 0.75em;
      }
    }
  }
</style>
