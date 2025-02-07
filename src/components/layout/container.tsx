export default function Container({ children, className }: Readonly<{ children: React.ReactNode, className?: string }>) {
	return <div className={"mx-auto px-1 py-2 lg:p-4 lg:w-3/4" + (className ? " " + className : "")}>{children}</div>
}
