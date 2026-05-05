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
