import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { convert } from "terraformer-wkt-parser";

/** An interface that defines the inputs of the activity. */
export interface ConvertGeoJsonToWktInputs {
    /**
     * @displayName GeoJSON
     * @description A GeoJSON geometry object.
     * @required
     */
    geoJSON: any;
}

/** An interface that defines the outputs of the activity. */
export interface ConvertGeoJsonToWktOutputs {
    /**
     * @description The WKT geometry.
     */
    result: string;
}

/**
 * @displayName Convert GeoJSON to WKT
 * @category Geometry Conversion
 * @description Converts a GeoJSON geometry to WKT
 */
export class ConvertGeoJsonToWkt implements IActivityHandler {
    /** Perform the execution logic of the activity. */
    execute(inputs: ConvertGeoJsonToWktInputs): ConvertGeoJsonToWktOutputs {
        if (!inputs.geoJSON) {
            throw new Error("geoJSON is required");
        }

        const wkt = convert(inputs.geoJSON);
        return {
            result: wkt,
        };
    }
}
