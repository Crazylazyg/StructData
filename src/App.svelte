<script>
  import Switch from './componets/Switch.svelte'
  let value = ''
  let hidden = false
  let show = !hidden
  browser.storage.local.get().then((data) => {
    // console.log('getStorage', { data })
    // hidden = data.hidden
    show = !data.hidden
  })
  $: {
    hidden = !show
    browser.storage.local.set({ hidden: !show })
  }
  const updateValue = (newValue) => {
    value = newValue
  }
  const message = (msg) => {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, msg).then((response) => {
        console.log(response.message)
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

  function handleMessage(request, sender, sendResponse) {
    console.log('App Messag: ', request)
    sendResponse({ response: 'Response from app script' })
  }

  browser.storage.onChanged.addListener((changes, name) => {
    // console.log('sotrage', changes, name)
    updateValue(changes.action.newValue)
    confirm('storage value:' + value)
  })

  browser.runtime.onMessage.addListener(handleMessage)
  let i = 1

  const add = () => {
    confirm('storage value:' + value)
  }
  function change() {
    console.log('change')
    let tabs = browser.tabs.query({ active: true, currentWindow: true })
    tabs.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, { message: 'hi' }).then((response) => {
        comfire(response.message)
      })
    })
  }
  const toggle = () => {
    browser.storage.local.get().then((data) => {
      // comfire(JSON.stringify(data))
      browser.storage.local.set({ hidden: !data.hidden })
      hidden = !data.hidden
    })
  }

  const localToggle = () => {
    message('localToggle')
  }
</script>

<main>
  <div class="title">
    <h1>StructData</h1>
    <a href="https://github.com/Crazylazyg/StructData">GitHub</a>
  </div>
  <div class="line" />
  <span>Global: <Switch bind:checked={show} /></span>
  <!-- <button>{hidden ? 'Hidden' : 'Show'}</button> -->
  <button disabled={show} on:click={localToggle}>Toggle Current</button>
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
    font-family: system;
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
