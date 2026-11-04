import { NextResponse, type NextRequest } from "next/server";
import { guides } from "@/content/guides";

const slugs = new Set(guides.map((g) => g.slug));

/**
 * Unknown guide slugs get a real 404 status before rendering starts. Without this, the first
 * request for a new unknown slug streams the page shell with a 200 (and a noindex tag).
 */
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];
  if (slug && !slugs.has(slug)) {
    const url = request.nextUrl.clone();
    url.pathname = "/_not-found";
    return NextResponse.rewrite(url, { status: 404 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/guides/:slug"],
};
