export default interface Media {
	id: string
	url: string
	width: number
	height: number
	name: string
	description: string
	type: string
	mimetype: string
	duration: number | null
	size: number
	filename: string
	originalFilename: string
}
