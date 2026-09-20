declare const self: SharedWorkerGlobalScope;

const ports: MessagePort[] = [];

self.onconnect = (e) => {
  const port = e.ports[0];

  ports.push(port);

  port.onmessage = (e) => {
    console.log("received:", e.data);

    for (const port of ports) {
      port.postMessage(`Result: ${e.data}`);
    }
  };
};
