<script>
  import Switch from '../componets/Switch.svelte'
  let hidden = false
  let curretnShow = false
  let show = !hidden

  const message = (msg, callback) => {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, msg).then((response) => {
        confirm(JSON.stringify(response))
        callback && callback(response)
      })
    })
  }

  const comfire = (msg = 'Done') => {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, { comfire: 'app:' + msg }).then((response) => {
        console.log(response.message)
      })
    })
  }

  browser.storage.local.get().then((data) => {
    show = !data.hidden
    hidden = data.hidden
  })

  message('checkCurrent', (r) => {
    // confirm(JSON.stringify(r))
    curretnShow = r.isShow
  })

  function handleMessage(request, sender, sendResponse) {
    console.log('App Messag: ', request)
    sendResponse({ response: 'Response from app script' })
  }

  browser.runtime.onMessage.addListener(handleMessage)

  const localToggle = () => {
    message('localToggle')
  }
  const updateGlobal = () => {
    hidden = show
    browser.storage.local.set({ hidden: show })
    comfire('$')
  }
</script>

<main>
  <div class="title">
    <h1>StructData</h1>
    <a href="https://github.com/Crazylazyg/StructData">GitHub</a>
  </div>
  <div class="line" />
  <span>Global: <Switch onchange={updateGlobal} bind:checked={show} /></span>
  <!-- <button>{hidden ? 'Hidden' : 'Show'}</button> -->
  <button disabled={show} on:click={localToggle}>Toggle Current {curretnShow ? 'Show' : 'Hidden'}</button>
</main>

<style lang="scss">
  /* @media (prefers-color-scheme: dark) {
    main {
      color: #ccc;
      background-color: #343536;
    }
  } */
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 400;
    src: local('.SFNSText'), local('.HelveticaNeueDeskInterface'), local('.LucidaGrandeUI'), local('Ubuntu'), local('Segoe UI'), local('Roboto'),
      local('DroidSans'), local('Tahoma');
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 1em 0;
    a {
      color: gray;
    }
  }
  .line {
    border-bottom: 1px solid #ccc;
    margin: 1em 0;
  }
  main {
    display: flex;
    flex-direction: column;
    font-family: system, sans-serif;
    padding: 1em;
    min-width: 200px;
  }
  button:disabled {
    opacity: 0.5;
  }
  button {
    flex: 1;
    margin: 1em 0 0 0;
    background-color: dodgerblue;
    color: white;
    box-sizing: border-box;
    font: system;
    padding: 0.75em 1em;
    border: none;
    border-radius: 0.25em;
  }
  h1 {
    padding: 0;
    margin: 0;
    color: #2196f3;
  }
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5em;
  }
</style>
