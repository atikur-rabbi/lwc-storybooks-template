import App from "c/app";
import Header from "c/header"
import UserCard from "c/userCard"
import Icon from "c/at_icon"

customElements.define('c-app', App.CustomElementConstructor);
customElements.define('c-header', Header.CustomElementConstructor);
customElements.define('c-user-card', UserCard.CustomElementConstructor);
customElements.define('c-at_icon', Icon.CustomElementConstructor);
