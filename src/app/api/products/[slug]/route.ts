import Product from "@/types/product"
import products from "../data.json"

export async function GET(request: Request, { params }: Readonly<{ params: { slug: string } }>) {
	const slug = (await params).slug
	const product = products.find((product: Product) => product.slug === slug)

	return Response.json(product)
}
