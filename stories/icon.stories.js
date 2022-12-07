import { storiesOf } from '@storybook/html';
// import buildAndRegisterCustomElement from './utils/build-custom-element';
import Icon from 'c/at_icon';

// buildAndRegisterCustomElement('c-header', Header);

customElements.define('c-at_icon', Icon.CustomElementConstructor);

storiesOf('Icon', module)
    .add('up arrow', () => `
        <div class="slds-p-around_medium">
            <c-at_icon name="iconUpArrow"><c-at_icon>
        <div class="slds-p-around_medium">    
    `)
    .add('down arrow', () => `
        <div class="slds-p-around_medium">
        <c-at_icon name="iconDownArrow"><c-at_icon>
        <div class="slds-p-around_medium">    
    `)
    .add('right arrow', () => `
        <div class="slds-p-around_medium">
        <c-at_icon name="iconRightArrow"><c-at_icon>
        <div class="slds-p-around_medium">    
    `)
    .add('distribution', () => `
        <div class="slds-p-around_medium">
        <c-at_icon name="distribution"><c-at_icon>
        <div class="slds-p-around_medium">    
    `)
    .add('hardship', () => `
        <div class="slds-p-around_medium">
        <c-at_icon name="hardship"><c-at_icon>
        <div class="slds-p-around_medium">    
    `)
    .add('loan', () => `
        <div class="slds-p-around_medium">
        <c-at_icon name="loan"><c-at_icon>
        <div class="slds-p-around_medium">    
    `);
