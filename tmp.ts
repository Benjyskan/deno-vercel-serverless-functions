// const file = await Deno.open('')
const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("data/twilight.json");
console.log(decoder.decode(data));