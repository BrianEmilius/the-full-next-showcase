"use client"

import loginAction from "@/actions/login-action"
import { useActionState, useEffect } from "react"

export default function LoginForm() {
	const [formState, formAction, isPending] = useActionState(loginAction, { email: "", password: "" })

	useEffect(function() {
		console.log("formState", formState)
	}, [formState])

	return (
		<form action={formAction}>
			<div>
				<label>
					Email
					<input type="email" name="email" defaultValue={formState.email} />
				</label>
			</div>
			<div>
				<label>
					Password
					<input type="password" name="password" defaultValue={formState.password} />
				</label>
			</div>
			<button type="submit" disabled={isPending}>
				{isPending ? "Logging in..." : "Login"}
			</button>
		</form>
	)
}