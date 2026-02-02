import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const crypto = searchParams.get("crypto");
  const action = searchParams.get("action");

  console.log("Analysis API called with:", { crypto, action });

  if (!crypto || !action) {
    return NextResponse.json(
      { error: "Missing crypto or action parameter" },
      { status: 400 }
    );
  }

  try {
    const externalApiUrl = `https://dynamitedatainsightsserver.onrender.com/crypto?name=${encodeURIComponent(
      crypto
    )}&action=${action}`;

    console.log("Fetching from external API:", externalApiUrl);

    const response = await fetch(externalApiUrl);

    console.log("External API response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`External API error: ${errorText}`);
    }

    const data = await response.json();
    console.log("External API data received:", data);

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("API route error:", error.message);
    return NextResponse.json(
      { error: error.message || "Failed to fetch from external API" },
      { status: 500 }
    );
  }
}
