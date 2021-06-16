<script>
  let value = ''
  let num = 0
  let hidden = false
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
</script>

<main>
  <h1>StructData</h1>
  <div on:click={() => (num = num + 1)}>{num}</div>
  <div>{value || 'None'}</div>
  <button on:click={() => toggle()}>{hidden ? 'hidden' : 'show'}</button>
</main>

<style lang="scss">
  h1 {
    color: lightblue;
  }
</style>
