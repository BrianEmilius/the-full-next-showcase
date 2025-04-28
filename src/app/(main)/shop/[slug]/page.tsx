import Lightbox from "@/components/lightbox"
import Heading from "@/components/text/heading"

export async function generateMetadata({ params }: Readonly<{ params: { slug: string } }>) {
	const slug = (await params).slug
	const response = await fetch(`http://localhost:4000/api/v1/products/${slug}`, { cache: "no-cache" })
	const product = await response.json()

	return {
		title: product.name
	}
}

export default async function ProductPage({ params }: Readonly<{ params: { slug: string } }>) {
	const slug = (await params).slug
	const response = await fetch(`http://localhost:4000/api/v1/products/${slug}`, { cache: "no-cache" })
	const product = await response.json()

	return (
		<section className="grid grid-cols-2">
			<Lightbox media={product.Media} />
			<div>
				<Heading>{product.name}</Heading>
				<p>{product.description}</p>
				<p>{Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price)} in stock {product.stock}</p>
				<Heading level={2}>Specifications</Heading>
				<table>
					<thead>
						<tr>
							<th>Specification</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Size</td>
							<td>{product.height} x {product.width} x {product.length}</td>
						</tr>
						<tr>
							<td>Weight</td>
							<td>{product.weight}</td>
						</tr>
						<tr>
							<td>SKU</td>
							<td>{product.sku}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	)
}
