import type Product from "@/types/product"
import Paragraph from "../text/paragraph"
import Link from "next/link"
import currencyFormat from "@/lib/currency-format"
import SubHeading from "../text/sub-heading"
import Image from "next/image"
import { FullProduct, ShortProduct } from "@/types/product"

export default async function ProductCard({ product }: Readonly<{ product: ShortProduct }>) {
	const response = await fetch(product.url)
	const data: FullProduct = await response.json()
	return (
		<Link href={`/shop/${product.slug}`}>
			<div className="shadow-md p-4">
				<Image src={data.Media[0].url} alt={data.Media[0].description} width={data.Media[0].width} height={data.Media[0].height} />
				<SubHeading>{data.name}</SubHeading>
				<Paragraph>{currencyFormat(data.price)}</Paragraph>
			</div>
		</Link>
	)
}
