import "@default-js/defaultjs-extdom";
import HTMLRequestElement from "../src/HTMLRequestElement";

describe("pagination test", () => {
	it("init tests", async () => {
        const element = document.createElement("d-request");
        document.body.append(element);
        await element.ready;
		expect(element.ready.resolved).toBe(true);
        element.remove();
	});
});