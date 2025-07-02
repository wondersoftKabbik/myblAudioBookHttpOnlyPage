
// Utility: Add CORS headers to every response

import { NextResponse } from "next/server";


export async function middleware(req) {
  const origin = req.headers.get("origin") || "*";
  const method = req.method;
  // const redirectUrlFullPath = "http://localhost:3000/unauthorized";
  const redirectUrlFullPath = "https://myblaudiobook.kabbik.com/";
  let msisdn = req.headers.get('x-msisdn') || req.headers.get('X-MSISDN') || req.headers.get('msisdn') ||  req.headers.get('x-access-number') || req.nextUrl?.searchParams.get('number')
  if(msisdn){
    return NextResponse.redirect(`https://myblaudiobook.kabbik.com/?msisdn=${msisdn}`);
  }else {
    return NextResponse.redirect(`https://myblaudiobook.kabbik.com`);
  }
}
