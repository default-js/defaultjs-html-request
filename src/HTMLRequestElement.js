import { toNodeName, define } from "@default-js/defaultjs-html-components/src/utils/DefineComponentHelper";
import HTMLJsonDataElement from "@default-js/defaultjs-html-jsondata/src/HTMLJsonDataElement";
import { Requester } from "@default-js/defaultjs-dynamic-requester"


const NODENAME = toNodeName("request");
class HTMLRequestElement extends HTMLJsonDataElement {
	
	static get NODENAME() { return NODENAME; }
	
	constructor() {
		super();
		this.style.display = "none !important";
	}

	async reinit() {
		delete this.__json__;
		delete this.__requester__;
	}

	get request() {
		return this.json;
	}

	get requester() {
		if (this.__requester__)
			this.__requester__ = new Requester(this.request);

		return this.__requester__;
	}

	async execute(context) {
		return this.requester.execute({ context });
	}

}

define(HTMLRequestElement);
export default HTMLRequestElement;
