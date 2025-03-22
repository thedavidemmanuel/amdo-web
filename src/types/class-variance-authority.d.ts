declare module "class-variance-authority" {
	// Minimal declaration for cva: returns a function that computes class names.
	export function cva(base: string, config?: any): (...args: any[]) => string;

	// Minimal definition for VariantProps: adds a variant property.
	export type VariantProps<T> = T extends (...args: any[]) => string ? { variant?: string } : {};
}
