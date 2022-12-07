import App from "c/app";
import Header from "c/header"
import UserCard from "c/userCard"

customElements.define('c-app', App.CustomElementConstructor);
customElements.define('c-header', Header.CustomElementConstructor);
customElements.define('c-user-card', UserCard.CustomElementConstructor);
