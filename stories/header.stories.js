import { storiesOf } from '@storybook/html';
// import buildAndRegisterCustomElement from './utils/build-custom-element';
import Header from 'c/header';

// buildAndRegisterCustomElement('c-header', Header);

customElements.define('c-header', Header.CustomElementConstructor);

storiesOf('Header', module)
    .add('basic', () => `
        <div class="slds-p-around_medium">
            <c-header label="Hello"><c-header>
        <div class="slds-p-around_medium">    
    `)
    .add('demo', () => `
        <div class="slds-p-around_medium">
            <c-header label="Welcome"><c-header>
        <div class="slds-p-around_medium">    
    `);
