import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createAffiliateLink(amazonUrl: string): string {
  try {
    const url = new URL(amazonUrl);
    url.searchParams.set('tag', 'shopright090-21');
    return url.toString();
  } catch (error) {
    console.error('Error creating affiliate link:', error);
    return amazonUrl;
  }
}
