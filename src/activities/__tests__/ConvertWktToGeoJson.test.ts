import { ConvertWktToGeoJson } from "../ConvertWktToGeoJson";

describe("ConvertWktToGeoJson", () => {
    it("converts a valid WKT point", () => {
        const activity = new ConvertWktToGeoJson();
        expect(
            activity.execute({ wktGeometry: "POINT (45.5165 -122.6764)" }),
        ).toMatchObject({
            result: {
                coordinates: [45.5165, -122.6764],
                type: "Point",
            },
        });
    });
    it("throws if wktGeometry input missing", () => {
        const activity = new ConvertWktToGeoJson();
        expect(() =>
            activity.execute({ wktGeometry: undefined as any }),
        ).toThrow("wktGeometry is required");
        expect(() => activity.execute({ wktGeometry: null as any })).toThrow(
            "wktGeometry is required",
        );
        expect(() => activity.execute({ wktGeometry: "" })).toThrow(
            "wktGeometry is required",
        );
    });
    it("throws if wktGeometry input is not valid WKT", () => {
        const activity = new ConvertWktToGeoJson();
        expect(() => activity.execute({ wktGeometry: "foo" })).toThrow();
    });
});
