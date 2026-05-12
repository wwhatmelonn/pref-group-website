import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schema";

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || "lgivp3xj";
const dataset = process.env.PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "pref-group",
  title: "PREF Group Website",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
