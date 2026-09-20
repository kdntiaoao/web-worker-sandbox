const textarea = document.querySelector("#textarea");
const result = document.querySelector(".result");

(() => {
  if (window.SharedWorker) {
    if (!(textarea instanceof HTMLTextAreaElement)) {
      return;
    }

    if (!(result instanceof HTMLElement)) {
      return;
    }

    const myWorker = new SharedWorker(
      new URL("./shared-worker.ts", import.meta.url),
    );

    textarea.addEventListener("change", () => {
      myWorker.port.postMessage(textarea.value);
      console.log("Message posted to worker:", textarea.value);
    });

    myWorker.port.addEventListener("message", (e) => {
      result.textContent = e.data;
      console.log("Message received from worker:", e.data);
    });

    myWorker.port.start();
  } else {
    console.log("Your browser doesn't support web workers.");
  }
})();
