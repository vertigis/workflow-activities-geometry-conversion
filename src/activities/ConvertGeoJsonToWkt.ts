import type { IActivityHandler } from "@vertigis/workflow/IActivityHandler";
import { geojsonToWKT } from "@terraformer/wkt";

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
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class ConvertGeoJsonToWkt implements IActivityHandler {
    execute(inputs: ConvertGeoJsonToWktInputs): ConvertGeoJsonToWktOutputs {
        if (!inputs.geoJSON) {
            throw new Error("geoJSON is required");
        }

        const wkt = geojsonToWKT(inputs.geoJSON);
        return {
            result: wkt,
        };
    }
}
