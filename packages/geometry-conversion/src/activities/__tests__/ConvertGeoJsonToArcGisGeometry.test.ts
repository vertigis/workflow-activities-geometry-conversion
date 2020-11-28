import { ConvertGeoJsonToArcGisGeometry } from "../ConvertGeoJsonToArcGisGeometry";

describe("ConvertGeoJsonToArcGisGeometry", () => {
    it("converts a valid GeoJSON point", () => {
        const geoJson = {
            type: "Point",
            coordinates: [45.5165, -122.6764],
        };
        const activity = new ConvertGeoJsonToArcGisGeometry();
        expect(activity.execute({ geoJSON: geoJson })).toStrictEqual({
            result: {
                spatialReference: { wkid: 4326 },
                x: 45.5165,
                y: -122.6764,
            },
        });
    });
    it("throws if geoJSON input missing", () => {
        const activity = new ConvertGeoJsonToArcGisGeometry();
        expect(() => activity.execute({ geoJSON: undefined })).toThrow(
            "geoJSON is required"
        );
    });
    it("throws if geoJSON input is not valid GeoJSON", () => {
        const activity = new ConvertGeoJsonToArcGisGeometry();
        expect(() => activity.execute({ geoJSON: { foo: "baz" } })).toThrow(
            "geoJSON was not valid"
        );
    });
});
