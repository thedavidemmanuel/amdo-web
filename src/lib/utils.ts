import type { ClassValue } from "clsx";
import clsx from "clsx"; // changed named import to default import
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) { // added explicit type annotation
  return twMerge(clsx(...inputs));
}
