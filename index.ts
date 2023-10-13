import figlet from "figlet";

console.log(Bun.version);

console.log(process.env.FOO);
console.log(Bun.env.FOO);

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync("Bun!");
    return new Response(body);
  },
  port: 3000,
});

console.log(`Listening on http://localhost:${server.port} ...`);
