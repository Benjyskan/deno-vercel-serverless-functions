import { ServerRequest } from '../../../deps.ts'

export default async (req: ServerRequest) => {
  if (req.method === 'GET') {
    const decoder = new TextDecoder("utf-8");
    const data = await Deno.readFile("data/strategy_cards.json");
    const decoded = decoder.decode(data);
    console.log("decoded:", decoded);
    const obj = JSON.parse(decoded);
    console.log("obj:", obj);

    req.respond({ body: decoded });
  }
}
