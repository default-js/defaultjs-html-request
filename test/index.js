import "@default-js/defaultjs-extdom";
import HTMLRequestElement from "../src/HTMLRequestElement";

describe("request test", () => {
	it("create as element", async () => {
        const element = document.createElement("d-request");
        document.body.append(element);
        await element.ready;
		expect(element.ready.resolved).toBe(true);
        element.remove();
	});

    it("simple request", async () => {
        const request = create(
           `<d-request>
                {
                    "url" : "/data/response.json"
                }
            </d-request>`).first();
        document.body.append(request);
        const response = await request.execute({});
        const data = await response.json();
		expect(data.success).toBe(true);
        request.remove();
	});

    it("dynamic url request", async () => {
        const request = create(
           `<d-request>
                {
                    "url" : "/data/\${request}"
                }
            </d-request>`).first();
        document.body.append(request);
        const response = await request.execute({request: "response.json"});
        const data = await response.json();
		expect(data.success).toBe(true);
        request.remove();
	});

});