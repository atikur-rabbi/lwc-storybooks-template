import App from "c/app";
import Header from "c/header"
import UserCard from "c/userCard"
import Icon from "c/at_icon"
import Atsite_allActivity from "c/atsite_allActivity"

customElements.define('c-app', App.CustomElementConstructor);
customElements.define('c-header', Header.CustomElementConstructor);
customElements.define('c-user-card', UserCard.CustomElementConstructor);
customElements.define('c-at_icon', Icon.CustomElementConstructor);
customElements.define('c-atsite_all-activity', Atsite_allActivity.CustomElementConstructor);