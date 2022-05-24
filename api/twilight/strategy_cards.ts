import { ServerRequest } from '../../deps.ts'

export default async (req: ServerRequest) => {
  if (req.method === 'GET') {
    try {
      const decoder = new TextDecoder("utf-8");
      const data = await Deno.readFile("data/strategy_cards.json");
      const decoded = decoder.decode(data);
      console.log("decoded2:", decoded);
      console.log('typeof:', typeof (decoded))
      try {
        // const obj = JSON.parse(decoded);
        // console.log("obj2:", obj);
        req.respond({ body: decoded });
      } catch (e) {
        console.log("catch 1")
        req.respond({ status: 333, body: e })
        return { status: 444, body: "penzo return" }
      }
    } catch (e) {
      console.log("catch 0")
      req.respond({ body: e })
      return e
    }
  }
}
