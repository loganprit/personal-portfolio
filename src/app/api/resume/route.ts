import { NextResponse } from "next/server";

export async function GET() {
  const GOOGLE_DRIVE_URL = "https://docs.google.com/uc?export=download&id=1moEKcpXt_1K86KUhq8jJZMQgSDrhZoUe";
  
  try {
    const response = await fetch(GOOGLE_DRIVE_URL);

    if (!response.ok || !response.body) {
      return new NextResponse("Failed to fetch resume from upstream source", { status: 502 });
    }
    
    return new NextResponse(response.body, {
      headers: {
        "Content-Type": response.headers.get("content-type") ?? "application/pdf",
        "Content-Disposition": "inline; filename=resume.pdf",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        "X-Content-Type-Options": "nosniff",
        "Accept-Ranges": "bytes",
      }
    });
  } catch (error) {
    console.error("Failed to fetch resume:", error);
    return new NextResponse("Failed to fetch resume", { status: 502 });
  }
}
