export class FormatHelper {
	public static formatPrice(value: number): string {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		}).format(value);
	}

	public static formatDate(date: Date): string {
		return new Intl.DateTimeFormat('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		}).format(date);
	}

	public static getInitials(text: string): string {
		return (text.charAt(0).toUpperCase() + text.charAt(text.length - 1).toUpperCase());
	}

}