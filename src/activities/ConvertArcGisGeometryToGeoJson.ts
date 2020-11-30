import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { parse } from "terraformer-arcgis-parser";

/** An interface that defines the inputs of the activity. */
export interface ConvertArcGisGeometryToGeoJsonInputs {
    /**
     * @description An ArcGIS geometry.
     * @required
     */
    geometry: any;
}

/** An interface that defines the outputs of the activity. */
export interface ConvertArcGisGeometryToGeoJsonOutputs {
    /**
     * @description A GeoJSON geometry.
     */
    result: any;
}

/**
 * @displayName Convert ArcGIS Geometry to GeoJSON
 * @category Geometry Conversion
 * @description Converts an ArcGIS geometry to a GeoJSON geometry
 */
export class ConvertArcGisGeometryToGeoJson implements IActivityHandler {
    execute(
        inputs: ConvertArcGisGeometryToGeoJsonInputs
    ): ConvertArcGisGeometryToGeoJsonOutputs {
        if (!inputs.geometry) {
            throw new Error("geometry is required");
        }

        const agsGeometry = parse(inputs.geometry);

        return {
            result: agsGeometry,
        };
    }
}
