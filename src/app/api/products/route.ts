const products = {
	count: 10,
	previous: null,
	next: null,
	results: [
		{
			id: 1,
			name: "Audiolux AL-1000 Power Amplifier",
			description: "High-precision, high-power audio amplifier with advanced noise reduction technology",
			price: 1000,
			image: "https://picsum.photos/id/1015/200/300"
		},
		{
			id: 2,
			name: "Aurora AU-5000 CD Player",
			description: "Advanced digital CD player with high-resolution audio support and USB connectivity",
			price: 500,
			image: "https://picsum.photos/id/1016/200/300"
		},
		{
			id: 3,
			name: "Sonus SA-2000 Speakers",
			description: "High-quality, high-fidelity speakers with advanced sound reproduction technology",
			price: 1500,
			image: "https://picsum.photos/id/1017/200/300"
		},
		{
			id: 4,
			name: "Audiolux AL-5000 Integrated Amplifier",
			description: "High-performance integrated amplifier with advanced audio processing and USB connectivity",
			price: 2000,
			image: "https://picsum.photos/id/1018/200/300"
		},
		{
			id: 5,
			name: "Pulse PA-1000 Phono Amplifier",
			description: "High-quality phono amplifier with advanced noise reduction technology and USB connectivity",
			price: 500,
			image: "https://picsum.photos/id/1019/200/300"
		},
		{
			id: 6,
			name: "Terra TE-1000 Turntable",
			description: "High-quality turntable with advanced motor control and USB connectivity",
			price: 1000,
			image: "https://picsum.photos/id/1020/200/300"
		},
		{
			id: 7,
			name: "Audiolux AL-2000 Power Amplifier",
			description: "High-performance power amplifier with advanced noise reduction technology and USB connectivity",
			price: 2000,
			image: "https://picsum.photos/id/1021/200/300"
		},
		{
			id: 8,
			name: "Aurora AU-1000 CD Player",
			description: "Advanced digital CD player with high-resolution audio support and USB connectivity",
			price: 1000,
			image: "https://picsum.photos/id/1022/200/300"
		},
		{
			id: 9,
			name: "Sonus SA-1000 Speakers",
			description: "High-quality, high-fidelity speakers with advanced sound reproduction technology",
			price: 1000,
			image: "https://picsum.photos/id/1023/200/300"
		},
		{
			id: 10,
			name: "Audiolux AL-3000 Integrated Amplifier",
			description: "High-performance integrated amplifier with advanced audio processing and USB connectivity",
			price: 3000,
			image: "https://picsum.photos/id/1024/200/300"
		},
	]
}

const sleep = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms))

export async function GET(request: Request) {
	await sleep(4000)
	return Response.json(products)
}