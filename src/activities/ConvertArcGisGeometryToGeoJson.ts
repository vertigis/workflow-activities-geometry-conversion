import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { arcgisToGeoJSON } from "@terraformer/arcgis";

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
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class ConvertArcGisGeometryToGeoJson implements IActivityHandler {
    execute(
        inputs: ConvertArcGisGeometryToGeoJsonInputs
    ): ConvertArcGisGeometryToGeoJsonOutputs {
        if (!inputs.geometry) {
            throw new Error("geometry is required");
        }

        const geoJson = arcgisToGeoJSON(inputs.geometry);

        // The conversion will just result in an empty object if the input isn't valid
        if (Object.keys(geoJson).length === 0) {
            throw new Error("geometry was not valid");
        }

        return {
            result: geoJson,
        };
    }
}
