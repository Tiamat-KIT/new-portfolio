import type { NextRequest } from "next/server";
import { NextResponse} from "next/server";

export function middleware(req: NextRequest){
    return NextResponse.redirect(new URL(`${process.env.NEXT_PUBLIC_VERCEL_URL as string}/Top`,req.url))
}

export const config = {
    matcher: "/"
}