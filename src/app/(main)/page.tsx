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
  const products = await serverFetch("http://localhost:3001/api/products")

  return (
    <>
      <Heading>The Full Next Showcase</Heading>
      <ProductGrid>
        {
          products.results.map((product: Product) => <ProductCard key={product.id} product={product} />)
        }
      </ProductGrid>
    </>
  )
}
