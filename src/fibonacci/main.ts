const form = document.querySelector("form");
const input = document.querySelector('input[type="number"]');
const result = document.querySelector("p#result");

(() => {
  if (window.SharedWorker) {
    if (!(form instanceof HTMLFormElement)) {
      return;
    }

    if (!(input instanceof HTMLInputElement)) {
      return;
    }

    if (!(result instanceof HTMLElement)) {
      return;
    }

    const worker = new Worker(new URL("./fibonacci.ts", import.meta.url));

    worker.onmessage = (event) => {
      result.textContent = event.data;
      console.log(`Got: ${event.data}`);
    };

    worker.onerror = (error) => {
      console.log(`Worker error: ${error.message}`);
      throw error;
    };

    form.onsubmit = (e) => {
      e.preventDefault();
      worker.postMessage(input.value);
      input.value = "";
    };
  } else {
    console.log("Your browser doesn't support web workers.");
  }
})();
