import products from "./data.json"

const sleep = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms))

export async function GET(request: Request) {
	await sleep(4000)
	return Response.json({
		count: 10,
		previous: null,
		next: null,
		results: products
	})
}