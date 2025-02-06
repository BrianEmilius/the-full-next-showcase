export default async function serverFetch(url: string) {
	try {
		const response = await fetch(url)
		return await response.json()
	} catch (error: any) {
		throw new Error(error)
	}
}
