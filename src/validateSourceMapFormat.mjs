import fs from "fs";

export function validateSourceMapFormat(sourceMap, sourceMapPath) {
  try {
    if (sourceMap.version !== 3) {
      throw new Error("Source map version is not 3.");
    }
    if (!sourceMap.sources || !Array.isArray(sourceMap.sources)) {
      throw new Error('Source map "sources" field is invalid or missing.');
    }
    if (!sourceMap.mappings) {
      throw new Error('Source map "mappings" field is missing.');
    }

    console.log("Source map format is valid.");
  } catch (err) {
    console.error("Invalid source map format: ", err.message);
  }
}
