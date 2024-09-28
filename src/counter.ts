const template = document.createElement("template");

template.innerHTML = `
  <style>
    span,
    button {
      font-size: 200%;
    }

    span {
      display: inline-block;
      text-align: center;
      width: 4rem;
    }
    
    button {
      background-color: #DE411B;
      border: none;
      border-radius: 10px;
      color: white;
      height: 4rem;
      width: 4rem;
    }
  </style>
  <div>
    <button aria-label="decrease"> - </button>
    <span>0</span>
    <button aria-label="increase"> + </button>
  </div>

`;

export class MyCounter extends HTMLElement {
  _value: number;
  valueElement: HTMLElement | null;
  decreaseButton: HTMLElement | null;
  increaseButton: HTMLElement | null;
  constructor() {
    super();

    this._value = 0;

    this.attachShadow({ mode: "open" });

    const _shadowRoot = this.shadowRoot!;
    _shadowRoot?.appendChild(template.content.cloneNode(true));

    this.valueElement = _shadowRoot.querySelector("span");
    this.decreaseButton = _shadowRoot.querySelector(
      'button[aria-label="decrease"]'
    );
    this.increaseButton = _shadowRoot.querySelector(
      'button[aria-label="increase"]'
    );

    this.increaseButton?.addEventListener("click", () => this.value++);
    this.decreaseButton?.addEventListener("click", () => this.value--);
  }

  static get observedAttributes() {
    return ["value"];
  }

  attributeChangedCallback(
    attrName: string,
    oldValue: string,
    newValue: string
  ) {
    if (attrName !== "value") return;
    console.log({ oldValue });

    this.value = parseInt(newValue, 10);
  }

  set value(value) {
    this._value = value;
    this.valueElement!.innerText = this._value.toString();

    this.dispatchEvent(new CustomEvent("change", { detail: this._value }));
  }

  get value() {
    return this._value;
  }
}

customElements.define("my-counter", MyCounter);
