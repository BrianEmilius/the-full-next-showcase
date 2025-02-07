import type Product from "@/types/product"
import Paragraph from "../text/paragraph"
import Link from "next/link"
import currencyFormat from "@/lib/currency-format"
import SubHeading from "../text/sub-heading"
import Image from "next/image"

export default function ProductCard({ product }: Readonly<{ product: Product }>) {
	return (
		<Link href={`/shop/${product.slug}`}>
			<div className="shadow-md p-4">
				<Image src={product.images[0].url} alt={product.name} width={product.images[0].width} height={product.images[0].height} />
				<SubHeading>{product.name}</SubHeading>
				<Paragraph>{product.description}</Paragraph>
				<Paragraph>{currencyFormat(product.price)}</Paragraph>
			</div>
		</Link>
	)
}
