import { ConvertArcGisGeometryToGeoJson } from "../ConvertArcGisGeometryToGeoJson";

describe("ConvertArcGisGeometryToGeoJson", () => {
    it("converts a valid ArcGIS point", () => {
        const agsGeometry = {
            spatialReference: { wkid: 4326 },
            x: 45.5165,
            y: -122.6764,
        };
        const activity = new ConvertArcGisGeometryToGeoJson();
        expect(activity.execute({ geometry: agsGeometry })).toMatchObject({
            result: {
                type: "Point",
                coordinates: [45.5165, -122.6764],
            },
        });
    });
    it("throws if geometry input missing", () => {
        const activity = new ConvertArcGisGeometryToGeoJson();
        expect(() => activity.execute({ geometry: undefined })).toThrow(
            "geometry is required"
        );
    });
    it("throws if geometry input is not valid ArcGIS geometry", () => {
        const activity = new ConvertArcGisGeometryToGeoJson();
        expect(() => activity.execute({ geometry: { foo: "baz" } })).toThrow(
            "geometry was not valid"
        );
    });
});
