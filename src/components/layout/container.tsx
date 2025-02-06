export default function Container({ children }: Readonly<{ children: React.ReactNode }>) {
	return <div className="mx-auto px-1 py-2 lg:p-4 w-full lg:w-3/4 xl:w-1/2">{children}</div>
}
