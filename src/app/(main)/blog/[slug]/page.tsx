import { renderPost } from "@/lib/block-parser"

export default async function PostPage({ params }: Readonly<{ params: { slug: string } }>) {
	const slug = (await params).slug

	const response = await fetch(`http://localhost:4000/api/v1/posts/${slug}`, { cache: "no-cache" })
	const post = await response.json()
	const published = new Date(post.published).toLocaleDateString("da-DK", { month: "long", day: "numeric", year: "numeric" })
	
	return (
		<>
			<h1>{post.title}</h1>
			<p>{published}</p>
			{renderPost(post.blocks)}
		</>
	)
}
