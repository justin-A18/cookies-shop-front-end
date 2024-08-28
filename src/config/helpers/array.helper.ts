export class ArrayHelpers {
	public static ArrayToObject<T>(array: T[]): Record<string, T> {
		return array.reduce((acc, item, index) => {
			acc[`item${index + 1}`] = item;
			return acc;
		}, {} as Record<string, T>);
	}
}