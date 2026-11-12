import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { PortfolioModel } from "@/models/Portfolio";

export async function GET() {
  try {
    await connectToDatabase();
    const portfolio = await PortfolioModel.findOne().lean();

    return NextResponse.json({ success: true, data: portfolio });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch portfolio data",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { field, item } = await request.json();
    if (!field || !item) {
      return NextResponse.json(
        { success: false, message: "field and item are required" },
        { status: 400 }
      );
    }
    await connectToDatabase();

    const updated = await PortfolioModel.findOneAndUpdate(
      {},
      { $push: { [field]: item } },
      { upsert: true, new: true }
    ).lean();

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to push item",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Update fields on an existing project matched by title
// Body: { "title": "Wordle Mobile App", "fields": { "be-git": "...", "be-stack": [...] } }
export async function POST(request: Request) {
  try {
    const { title, fields } = await request.json();
    if (!title || !fields || typeof fields !== "object") {
      return NextResponse.json(
        { success: false, message: "title and fields object are required" },
        { status: 400 }
      );
    }
    await connectToDatabase();

    // Build a $set map targeting the matched array element via positional operator
    const setPayload = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [
        `projects.$.${key}`,
        value,
      ])
    );

    const updated = await PortfolioModel.findOneAndUpdate(
      { "projects.title": title },
      { $set: setPayload },
      { new: true }
    ).lean();

    if (!updated) {
      return NextResponse.json(
        { success: false, message: `No project found with title "${title}"` },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update project",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const payload = await request.json();
    await connectToDatabase();

    const updated = await PortfolioModel.findOneAndUpdate(
      {},
      { $set: payload },
      { upsert: true, new: true }
    ).lean();

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update portfolio data",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
