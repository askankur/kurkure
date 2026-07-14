// import.meta.env.BASE_URL has no trailing slash (e.g. "/kurkure").
// Join it with a path segment, guaranteeing exactly one "/" between them.
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const p = path.replace(/^\//, '');
	return `${base}/${p}`;
}
