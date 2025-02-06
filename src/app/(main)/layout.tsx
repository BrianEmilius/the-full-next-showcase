import Container from "@/components/layout/container"
import Navigation from "@/components/layout/navigation"

export default function ShopLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Navigation />
			<main>
				<Container>
					{ children }
				</Container>
			</main>
		</>
	)
}