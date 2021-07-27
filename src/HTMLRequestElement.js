import { privateProperty } from "@default-js/defaultjs-common-utils/src/PrivateProperty";
import { toNodeName, define } from "@default-js/defaultjs-html-components/src/utils/DefineComponentHelper";
import HTMLJsonDataElement from "@default-js/defaultjs-html-jsondata/src/HTMLJsonDataElement";
import { Requester } from "@default-js/defaultjs-dynamic-requester";

const PRIVATE_REQUESTER = "requester";

const NODENAME = toNodeName("request");
class HTMLRequestElement extends HTMLJsonDataElement {
	static get NODENAME() {
		return NODENAME;
	}

	constructor() {
		super();
		this.style.display = "none !important";
	}

	async reinit() {
		privateProperty(this, PRIVATE_REQUESTER, null);
	}

	get request() {
		return (async () => this.json)();
	}

	get requester() {
		return (async () => {
			let requester = privateProperty(this, PRIVATE_REQUESTER);
			if (!requester) {
				requester = new Requester(await this.request);
				privateProperty(this, PRIVATE_REQUESTER, requester);
			}

			return requester;
		})();
	}

	async execute(context) {
		await this.ready;
		return this.requester.execute({ context });
	}
}

define(HTMLRequestElement);
export default HTMLRequestElement;
