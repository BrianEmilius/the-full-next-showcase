export default async function serverFetch(url: string) {
	const { BASE_URL } = process.env
	try {
		const response = await fetch(BASE_URL + url)
		if (response.ok) return await response.json()
		else return null
	} catch (error: any) {
		throw new Error(error)
	}
}
