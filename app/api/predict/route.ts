import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { symbol } = await request.json();

  console.log("Predict API called with:", { symbol });

  if (!symbol) {
    return NextResponse.json(
      { error: "Missing symbol parameter" },
      { status: 400 }
    );
  }

  try {
    const externalApiUrl = `https://dynamite-djangomodel.onrender.com/predict/?crypto=${symbol}`;

    console.log("Fetching from external API:", externalApiUrl);

    const response = await fetch(externalApiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

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
