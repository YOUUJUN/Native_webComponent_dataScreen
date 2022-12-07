class StateCard extends HTMLElement{
    constructor() {
        super();

    }
}

customElements.define('state-card', StateCard, { extends: 'div' })

export default StateCard