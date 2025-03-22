declare module "clsx" {
	// Minimal type declarations for clsx
	export type ClassValue = string | number | null | undefined | boolean | { [key: string]: unknown };
	export default function clsx(...args: ClassValue[]): string;
}

declare module "tailwind-merge" {
	// Minimal type declarations for tailwind-merge
	export function twMerge(...classNames: string[]): string;
}