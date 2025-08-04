export const LIMIT = 20;

export const TITLELIMIT = 128;

export function displayTitle(str: string, maxLength = 128) {
	if (str.length > maxLength) {
		return str.slice(0, maxLength) + "...";
	}
	return str;
}

export interface PageInfo {
	nextPage: boolean;
	cursor: string;
}

export enum location {
	hero = "hero",
	diff = "diff",
}

// Utility function to safely make API calls during build time
export async function safeApiCall<T>(
	url: string,
	options?: RequestInit
): Promise<T | null> {
	// Check if we're in a build environment and environment variables are not available
	if (!process.env.NEXT_PUBLIC_API) {
		console.warn('NEXT_PUBLIC_API not available during build, skipping API call');
		return null;
	}

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.warn('API call failed during build:', error);
		return null;
	}
}

// Utility function to build API URL safely
export function buildApiUrl(endpoint: string): string | null {
	if (!process.env.NEXT_PUBLIC_API) {
		return null;
	}
	return `${process.env.NEXT_PUBLIC_API}${endpoint}`;
}

// Type for API response with error property
export interface ApiResponse<T = any> {
	error?: boolean;
	message?: string;
	data?: T;
}
