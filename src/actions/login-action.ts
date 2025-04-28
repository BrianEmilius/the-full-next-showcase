"use server"

import { cookies } from "next/headers"
import { z } from "zod"

export default async function loginAction(prevState: any, formData: FormData) {
	const email = formData.get("email")
	const password = formData.get("password")

	const schema = z.object({
		email: z.string().email({ message: "Invalid email" }),
		password: z.string().min(4, { message: "Password must be at least 4 characters" }),
	})

	const validated = schema.safeParse({ email, password })

	if (!validated.success) {
		return { errors: validated.error.format() }
	}

	try {
		const response = await fetch("http://localhost:4000/auth/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		})

		if (response.ok) {
			const data = await response.json()
			const cookieStore = await cookies()
			cookieStore.set("token", data.accessToken, { path: "/", httpOnly: true, secure: true, sameSite: "strict", expires: new Date(Date.now() + 1000 * 60 * 15) })
			cookieStore.set("refreshToken", data.refreshToken, { path: "/", httpOnly: true, secure: true, sameSite: "strict", expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) })
			return { data }
		} else {
			throw new Error("Invalid email or password")
		}
	} catch (error) {
		return { errors: { email: "Invalid email or password" } }
	}
}