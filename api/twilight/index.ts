import { copy, ServerRequest } from "../../deps.ts";

export default async (req: ServerRequest) => {
  // const file = await Deno.open('data/');
  const decoder = new TextDecoder("utf-8");

  const data = await Deno.readFile("data/twilight.json");
  // const data = await Deno.readFile("data/twilight.json");

  const decoded = decoder.decode(data);
  console.log("decoded:", decoded);
  //
  const obj = JSON.parse(decoded);
  console.log("obj:", obj);
  //
  req.respond({ body: decoded });
};
