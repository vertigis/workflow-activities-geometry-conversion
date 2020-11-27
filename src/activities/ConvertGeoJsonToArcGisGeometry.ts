import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { convert } from "terraformer-arcgis-parser";

/** An interface that defines the inputs of the activity. */
export interface ConvertGeoJsonToArcGisGeometryInputs {
    /**
     * @displayName GeoJSON
     * @description A GeoJSON Geometry object.
     * @required
     */
    geoJSON: any;
}

/** An interface that defines the outputs of the activity. */
export interface ConvertGeoJsonToArcGisGeometryOutputs {
    /**
     * @description An ArcGIS geometry.
     */
    result: any;
}

/**
 * @displayName Convert GeoJSON to ArcGIS Geometry
 * @category Geometry Conversion
 * @description Converts a GeoJSON geometry to an ArcGIS geometry
 */
export class ConvertGeoJsonToArcGisGeometry implements IActivityHandler {
    execute(inputs: ConvertGeoJsonToArcGisGeometryInputs): ConvertGeoJsonToArcGisGeometryOutputs {
        const agsGeometry = convert(inputs.geoJSON);
        return {
            result: agsGeometry,
        };
    }
}
