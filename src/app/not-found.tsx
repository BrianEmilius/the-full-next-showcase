import Heading from "@/components/text/heading"
import Paragraph from "@/components/text/paragraph"

export default async function NotFound() {
	return (
		<>
			<Heading>Not Found</Heading>
			<Paragraph>Could not find requested resource</Paragraph>
		</>
	)
}