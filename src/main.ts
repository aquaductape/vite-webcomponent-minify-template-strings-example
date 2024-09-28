import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import "./counter.ts";

class HelloWorld extends HTMLElement {
  //
  constructor() {
    super();
    // Attach a shadow root to the element.
    let shadowRootshadowRootshadowRootshadowRootshadowRootshadowRootshadowRootshadowRootshadowRoot =
      this.attachShadow({ mode: "open" });
    shadowRootshadowRootshadowRootshadowRootshadowRootshadowRootshadowRootshadowRootshadowRoot.innerHTML = `
    <section class="container">
      <div class="inner">
        <p>hello world web component??!!!!!</p>
      </div>
    </section>
    `;
  }
}
customElements.define("hello-world", HelloWorld);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <hello-world></hello-world>
    <my-counter></my-counter>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
