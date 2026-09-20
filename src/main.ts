import "./style.css";

const first = document.querySelector<HTMLInputElement>("#number1");
const second = document.querySelector<HTMLInputElement>("#number2");
const result = document.querySelector(".result");

if (window.Worker) {
  const myWorker = new Worker(new URL("./worker.ts", import.meta.url));

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
