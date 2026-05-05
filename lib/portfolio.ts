import { connectToDatabase } from "@/lib/mongoose";
import { PortfolioModel } from "@/models/Portfolio";

export async function getPortfolioData() {
  try {
    await connectToDatabase();
    const portfolio = await PortfolioModel.findOne().lean();

    return JSON.parse(JSON.stringify(portfolio));
  } catch (error) {
    console.error("Failed to fetch portfolio data:", error);
    return null;
  }
}
