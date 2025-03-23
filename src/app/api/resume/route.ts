import { NextResponse } from "next/server";

export async function GET() {
  const GOOGLE_DRIVE_URL = "https://docs.google.com/uc?export=download&id=1moEKcpXt_1K86KUhq8jJZMQgSDrhZoUe";
  
  try {
    const response = await fetch(GOOGLE_DRIVE_URL);
    const blob = await response.blob();
    
    return new NextResponse(blob, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=resume.pdf",
        "Cache-Control": "public, max-age=3600, must-revalidate",
        "ETag": `"${Date.now()}"`,
        "Last-Modified": new Date().toUTCString(),
        "X-Content-Type-Options": "nosniff",
        "Accept-Ranges": "bytes"
      }
    });
  } catch (error) {
    console.error("Failed to fetch resume:", error);
    return new NextResponse("Failed to fetch resume", { status: 500 });
  }
}