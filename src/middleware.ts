import type { NextRequest } from "next/server";
import { NextResponse} from "next/server";

export function middleware(req: NextRequest){
    return NextResponse.redirect(new URL(`./Top`,req.url))
}

export const config = {
    matcher: "/"
}
