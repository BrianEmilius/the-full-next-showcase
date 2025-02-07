import Link from "next/link"
import Container from "./container"

export default function Navigation() {
	return (
		<nav className="bg-yellow-300 sticky top-0">
			<Container className="flex justify-between">
				<Link href="/">TFNS</Link>
				<ul className="flex gap-4">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/profile">Log in</Link>
					</li>
				</ul>
			</Container>
		</nav>
	)
}
