import { controller } from "@github/catalyst";

@controller
class TheAppElement extends HTMLElement {
	connectedCallback(){
		this.innerHTML = 'Hello Catalyst'
	}
}

export default TheAppElement;