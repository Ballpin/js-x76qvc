// Import stylesheets
import './style.css';
import { observable, computed, action } from "mobx";

class MyComponent extends HTMLElement {
  constructir() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
  }

  @observable person = {
    firstName: 'Matt',
    lastName: 'Ruby',
    age: 37,
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  };

  connectedCallback() {
    this.root.innerHTML = `
      <input id='nameInput' type='text' name='firstName' value='' placeholder='first name'/>
      <h1>Test</h1>
    `
  }
}

customElements.define('my-comp', MyComponent);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<my-comp></my-comp>`;