import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A lockfile in a parent directory makes Next infer the wrong workspace root,
  // which changes which files get traced into the server bundle. Pin it.
  outputFileTracingRoot: path.resolve(__dirname),
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
