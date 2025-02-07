export default interface Product {
	id: number
	name: string
	slug: string
	description: string
	price: number
	images: {
			url: string
			alt: string
			width: number
			height: number
		}[]
}