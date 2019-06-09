// Import stylesheets
import './style.css';
import { observable, computed, action } from "mobx";

@observable class MyComponent {

}

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;