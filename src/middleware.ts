import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest) {
	const token = request.cookies.get("accessToken")?.value

	if (!token) {
		return NextResponse.redirect(new URL("/login", request.url))
	}
	return NextResponse.next()
}

export const config = {
	matcher: [
		"/profile/:path*",
		"/dashboard/:path*",
	],
}
