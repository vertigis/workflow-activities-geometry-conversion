import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { parse } from "terraformer-wkt-parser";

/** An interface that defines the inputs of the activity. */
export interface ConvertWktToGeoJsonInputs {
    /**
     * @displayName WKT Geometry
     * @description A Well Known Text geometry string.
     * @required
     */
    wktGeometry: string;
}

/** An interface that defines the outputs of the activity. */
export interface ConvertWktToGeoJsonOutputs {
    /**
     * @description A GeoJSON geometry.
     */
    result: any;
}

/**
 * @displayName Convert WKT to GeoJSON
 * @category Geometry Conversion
 * @description Converts a WKT geometry to GeoJSON
 * @clientOnly
 * @unsupportedApps GMV
 */
export class ConvertWktToGeoJson implements IActivityHandler {
    execute(inputs: ConvertWktToGeoJsonInputs): ConvertWktToGeoJsonOutputs {
        if (!inputs.wktGeometry) {
            throw new Error("wktGeometry is required");
        }

        const geoJson = parse(inputs.wktGeometry);
        return {
            result: geoJson,
        };
    }
}
