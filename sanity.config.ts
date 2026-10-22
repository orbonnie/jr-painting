"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

const previewUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        initial: previewUrl,
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
      allowOrigins: [
        "http://localhost:3000",
        "https://jacobreitzpainting.com",
        "https://www.jacobreitzpainting.com",
      ],
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
