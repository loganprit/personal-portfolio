import { NextResponse } from "next/server";

export async function GET() {
  const GOOGLE_DRIVE_URL = "https://docs.google.com/uc?export=download&id=1U4bqMGEper-J3ovFkz_4MhC6dwcOwoFF";
  
  try {
    const response = await fetch(GOOGLE_DRIVE_URL);
    const blob = await response.blob();
    
    return new NextResponse(blob, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=resume.pdf",
        "Cache-Control": "public, max-age=3600, must-revalidate",
        "ETag": `"${Date.now()}"`,
        "Last-Modified": new Date().toUTCString()
      }
    });
  } catch (error) {
    console.error("Failed to fetch resume:", error);
    return new NextResponse("Failed to fetch resume", { status: 500 });
  }
}
