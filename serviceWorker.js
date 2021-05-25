async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      navigator.serviceWorker.register("./serviceWorker.js");
    } catch (e) {
      console.error("Service worker registration failed");
    }
  } else {
    console.log("Service worker not supported");
  }
}
