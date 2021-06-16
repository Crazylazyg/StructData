<script>
  let start = false
  let element = {}
  let attributes = []
  let selected = []
  let selectTag = '{}'
  let selectValue = []
  let hidden = false
  let initHidden = hidden
  let boxSize = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  }

  function handleMessage(request, sender, sendResponse) {
    console.log('Messag: ', request)
    hidden = request.hidden
  }

  browser.storage.onChanged.addListener((change, area) => {
    initHidden = change.hidden.newValue
  })

  browser.storage.local.get('hidden').then((data) => {
    // console.log('hidden', { data })
    initHidden = data.hidden
  })

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

  const onGlobalClick = (e) => {
    e.preventDefault()
    console.log('SDClick', e.path, e.srcElement.attributes)
    start = false
    clear()
    element = e.srcElement
    attributes = [...e.srcElement.attributes, { nodeName: 'Text', nodeValue: e.srcElement.innerText }]
    selected = e.path
      .map((i) => {
        return {
          type: i.localName,
          class: i.className,
        }
      })
      .filter((i) => i.type)
    window.removeEventListener('click', onGlobalClick)
  }

  const clear = () => {
    element = {}
    selected = []
    attributes = []
  }

  const startInspect = () => {
    start = !start

    setTimeout(() => {
      window.addEventListener('click', onGlobalClick)
    }, 100)
  }

  let elms
  let data = ''
  $: {
    let selecObj = JSON.parse(selectTag || '{}')
    elms = document.querySelectorAll(selecObj.tag || 'html')
    // console.log(elms, elms.length)
    console.log(selectValue, selectValue.length)
    if (selectValue.length === 1) {
      data = getData(elms, selecObj.index)
        .map((i) => getAttrValue(i, selectValue[0]))
        .join('\n')
    } else {
      data = JSON.stringify(
        getData(elms, selecObj.index).map((i) => {
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
  const getAttrValue = (i, attr) => {
    if (attr === 'Text') {
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
    border-bottom:1px solid red;
    z-index: 999;
    opacity:${start ? 1 : 0};
    `}
/>
<main
  class="userscript"
  style={`
display:${!initHidden ? 'none' : 'block'};
transform:translateX(${hidden ? '324px' : start ? 'calc(320px - 2em)' : '0px'})`}
>
  <button on:click={startInspect}>{!start ? 'Start' : 'End'}</button>
  <div class="h1">Select</div>
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
  </div>
  <!-- <div>{selectTag}</div> -->
  <div class="h1">Data</div>
  <div class="SDcontent">
    {#each attributes as a}
      <div class="values attributes">
        <input type="checkbox" name={a.nodeName} bind:group={selectValue} value={a.nodeName} />
        <label class="dataName" for={a.nodeName}>{a.nodeName} :</label>
        <div class="dataString">{a.nodeValue}</div>
      </div>
    {/each}
  </div>
  <!-- <p>text: {element.innerText || ''}</p> -->
  <div class="h1">Output ({elms.length})</div>
  <!-- <div>{selectValue}</div> -->
  <textarea value={data} />
</main>

<style lang="scss">
  .userscript {
    button {
      margin: 1em 0 0 0;
    }
    .SDcontent {
      max-height: 320px;
      overflow-y: scroll;
    }
    font-size: 16px;
    transition: transform 0.2s ease-in-out;
    position: fixed;
    /* display: flex; */
    /* flex-direction: column; */
    top: 0;
    right: 0;
    width: 320px;
    background-color: white;
    z-index: 999999999999999;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.333);
    padding: 0 1em;
    border-radius: 0 0 0 1em;
    .h1 {
      font-size: 1.5em;
      color: red;
      padding: 1em 0 0.5em 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    }
    textarea {
      display: block;
      width: 100%;
      min-height: 320px;
      margin: 0 0 1em 0;
      -webkit-appearance: none;
      border-radius: 0.5em;
    }
    .values {
      display: flex;
      align-items: center;
      span {
        color: lightblue;
      }
      b {
        color: lightcoral !important;
      }

      border-bottom: 1px solid #eee;
      &.attributes {
      }

      input {
        margin: 0 0.5em;
      }
      .dataName {
        flex: 1;
      }
      .dataString {
        flex: 5;
        overflow-x: auto;
        text-overflow: ellipsis;
      }
    }
  }
</style>
