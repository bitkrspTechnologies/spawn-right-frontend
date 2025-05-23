export const getValidLogoUrl = (url?: string) => {
  try {
    if (!url) throw new Error();
    new URL(url); // throws if invalid
    return url;
  } catch {
    return '/images/bgmi.svg'; // your fallback image
  }
};
