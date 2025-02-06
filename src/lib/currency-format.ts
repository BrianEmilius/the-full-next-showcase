export default function currencyFormat(number: number, currency: string = "USD", locale: string = "en-US") {
	return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(number)
}
