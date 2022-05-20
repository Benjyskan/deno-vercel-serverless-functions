import { copy, ServerRequest } from "../../deps.ts";

export default async (req: ServerRequest) => {
	console.log("method:", req.method)
	if (req.method === 'GET') {

		const decoder = new TextDecoder("utf-8");

		const data = await Deno.readFile("data/twilight.json");

		const decoded = decoder.decode(data);
		console.log("decoded:", decoded);

		const obj = JSON.parse(decoded);
		console.log("obj:", obj);

		req.respond({ body: decoded });
	} else if (req.method === 'POST') {
		console.log('is POST')
		const res = JSON.stringify({ data: 'is post' })
		console.log('is POST after stringify:', res)
		req.respond({ body: res })
	} else {
		req.respond({ body: 'neither GET or POST' })
	}
};
