
export default async function PostsPage() {
	const response = await fetch("http://localhost:4000/api/v1/posts")
	const data = await response.json()
	const posts = data.results
	return (
		<>
			<h1>Posts</h1>
			{posts.map((post: any) => (
				<p key={post.slug}><a href={`/blog/${post.slug}`}>{post.title}</a></p>
			))}
		</>
	)
}
