import Heading from "@/components/text/heading"
import serverFetch from "@/lib/server-fetch"
import Image from "next/image"

export async function generateMetadata({ params }: Readonly<{ params: { slug: string } }>) {
	const slug = (await params).slug
	const product = await serverFetch(`/api/products/${slug}`)

	return {
		title: product.name
	}
}

export default async function ProductPage({ params }: Readonly<{ params: { slug: string } }>) {
	const slug = (await params).slug
	const product = await serverFetch(`/api/products/${slug}`)

	return (
		<section>
			<Heading>{product.name}</Heading>
			<Image src={product.images[0].url} alt={product.name} width={product.images[0].width} height={product.images[0].height} />
		</section>
	)
}