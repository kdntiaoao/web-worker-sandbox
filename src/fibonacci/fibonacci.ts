self.onmessage = (event) => {
  const userNum = Number(event.data);
  self.postMessage(fibonacci(userNum));
};

function fibonacci(num: number) {
  let a = 1;
  let b = 0;
  const results = [];
  while (num > 0) {
    [a, b] = [a + b, a];
    results.push(b);
    num--;
  }
  return results.join(", ");
}
