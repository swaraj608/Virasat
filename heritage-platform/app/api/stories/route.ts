import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { title, location, category, story } = body;

    if (!title || !location || !category || !story) {
      return NextResponse.json(
        {
          error: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    console.log("New heritage story:", {
      title,
      location,
      category,
      story,
    });

    return NextResponse.json(
      {
        message: "Story received successfully.",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Story API error:", error);

    return NextResponse.json(
      {
        error: "Invalid request.",
      },
      {
        status: 400,
      }
    );
  }
}