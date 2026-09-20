const first = document.querySelector("#number1");
const second = document.querySelector("#number2");
const result = document.querySelector(".result");

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  first.addEventListener("change", () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker:", first.value);
  });

  second.addEventListener("change", () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker:", second.value);
  });

  myWorker.addEventListener("message", (e) => {
    result.textContent = e.data;
    console.log("Message received from worker:", e.data);
  });
} else {
  console.log("Your browser doesn't support web workers.");
}
