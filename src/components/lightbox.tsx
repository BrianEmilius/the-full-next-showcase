"use client"

import "react-photo-view/dist/react-photo-view.css"
import { PhotoProvider, PhotoView } from "react-photo-view"
import Media from "@/types/media"
import Image from "next/image"

export default function Lightbox({ media }: Readonly<{ media: Media[] }>) {
	return (
		<PhotoProvider>
			<div className="grid grid-rows-2 grid-cols-4 gap-4">
				<PhotoView src={media[0].url}>
					<Image src={media[0].url} alt={media[0].description} width={media[0].width} height={media[0].height} className="col-span-4" />
				</PhotoView>
				{media.slice(1).map((media) => (
					<PhotoView src={media.url} key={media.id}>
						<Image src={media.url} alt={media.description} width={media.width} height={media.height} />
					</PhotoView>
				))}
			</div>
		</PhotoProvider>
	)
}
