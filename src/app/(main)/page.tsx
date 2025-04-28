import Heading from "@/components/text/heading"
import serverFetch from "@/lib/server-fetch"
import type { Metadata } from "next"
import type Product from "@/types/product"
import ProductCard from "@/components/cards/product"
import ProductGrid from "@/components/layout/product-grid"

export const metadata: Metadata = {
  title: "Home"
}

export default async function Home() {
  const response = await fetch("http://localhost:4000/api/v1/products", { cache: "no-cache" })
  const { results: products } = await response.json()

  return (
    <>
      <Heading>The Full Next Showcase</Heading>
      <ProductGrid>
        {
          products.map((product: Product) => <ProductCard key={product.slug} product={product} />)
        }
      </ProductGrid>
    </>
  )
}
