import mongoose, { Schema } from "mongoose";

const PortfolioSchema = new Schema(
  {
    navItems: { type: [Schema.Types.Mixed], default: [] },
    gridItems: { type: [Schema.Types.Mixed], default: [] },
    projects: { type: [Schema.Types.Mixed], default: [] },
    workExperience: { type: [Schema.Types.Mixed], default: [] },
    socialMedia: { type: [Schema.Types.Mixed], default: [] },
  },
  { timestamps: true }
);

export const PortfolioModel =
  mongoose.models.Portfolio ||
  mongoose.model("Portfolio", PortfolioSchema, "portfolio");
