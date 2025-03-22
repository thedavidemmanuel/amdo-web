declare module "class-variance-authority" {
	// Function that computes class names based on variants
	export function cva(
		base: string, 
		config?: Record<string, unknown>
	): (props?: Record<string, unknown>) => string;

	// Type helper for extracting variant prop types
	export type VariantProps<T> = T extends (
		props?: infer P
	) => string ? P : Record<string, never>;
}