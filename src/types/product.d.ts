import Media from "./media"

export interface ShortProduct {
	name: string
	slug: string
	url: string
}

export interface FullProduct {
	id: string
	name: string
	slug: string
	sku: string
	description: string
	price: number
	saleprice: number
	weight: number
	height: number
	width: number
	length: number
	Media: Media[]
}
