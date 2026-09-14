/// <reference types="vite/client" />

/**
 * Resolves asset URLs taking Vite's base path (e.g. '/enreach-salon/') into account.
 * Ensures images and assets load properly when deployed to GitHub Pages subpaths.
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('data:') ||
    path.startsWith('blob:') ||
    path.startsWith('http://') ||
    path.startsWith('https://')
  ) {
    return path;
  }

  const base = import.meta.env?.BASE_URL || '/';
  if (path.startsWith(base)) {
    return path;
  }

  const cleanPath = path.replace(/^(\.\/|\/)/, '');
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}

