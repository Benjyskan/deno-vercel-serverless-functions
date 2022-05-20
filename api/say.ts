import { ServerRequest, readAll } from '../deps.ts'
// import { say } from '../deps.ts'

export default async (req: ServerRequest) => {
	try {
		const body = new TextDecoder().decode(
			await readAll(req.body)
		)
		// const cow = say(JSON.parse(body))
		const cow = 'tmp'
		req.respond({ body: cow })
	} catch (e) {
		req.respond({
			status: 500,
			body: 'could not parse body'
		})
	}
}