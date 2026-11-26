const test = require("node:test");
const assert = require("node:assert");
const { add, createServer } = require("../app");

test("add adds two numbers", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("server responds on /health", async () => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();

  const res = await fetch(`http://localhost:${port}/health`);
  const body = await res.json();

  assert.strictEqual(res.status, 200);
  assert.strictEqual(body.status, "ok");

  server.close();
});