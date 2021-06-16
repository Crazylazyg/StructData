browser.runtime.onInstalled.addListener(function (_ref) {
  var reason = _ref.reason;

  if (reason === "install") {
    alert("Hello");
  }
}); // browser.runtime.onMessage.addListener(handleMessage);
