"use client"
import { BeatLoader } from "react-spinners"

export default function Loading() {
	return (
		<div className="flex justify-center items-center h-screen">
			<BeatLoader loading={true} color="yellow" size={50} />
		</div>
	)
}
