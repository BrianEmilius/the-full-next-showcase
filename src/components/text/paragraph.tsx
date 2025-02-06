export default function Paragraph({ children }: Readonly<{ children: React.ReactNode }>) {
	return <p className="text-lg">{children}</p>
}
