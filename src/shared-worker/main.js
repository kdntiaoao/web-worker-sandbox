const textarea = document.querySelector("#textarea");
const result = document.querySelector(".result");

if (window.SharedWorker) {
  const myWorker = new SharedWorker("shared-worker.js");

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
