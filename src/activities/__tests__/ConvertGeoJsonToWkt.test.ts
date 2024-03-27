import { ConvertGeoJsonToWkt } from "../ConvertGeoJsonToWkt";

describe("ConvertGeoJsonToWkt", () => {
    it("converts a valid GeoJSON point", () => {
        const geoJson = {
            type: "Point",
            coordinates: [45.5165, -122.6764],
        };
        const activity = new ConvertGeoJsonToWkt();
        expect(activity.execute({ geoJSON: geoJson })).toStrictEqual({
            result: "POINT (45.5165 -122.6764)",
        });
    });
    it("throws if geoJSON input missing", () => {
        const activity = new ConvertGeoJsonToWkt();
        expect(() => activity.execute({ geoJSON: undefined })).toThrow(
            "geoJSON is required",
        );
    });
    it("throws if geoJSON input is not valid GeoJSON", () => {
        const activity = new ConvertGeoJsonToWkt();
        expect(() => activity.execute({ geoJSON: { foo: "baz" } })).toThrow(
            "Unknown Type:",
        );
    });
});
