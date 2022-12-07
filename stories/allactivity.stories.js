import { storiesOf } from '@storybook/html';
import AllActivity from 'c/atsite_allActivity';

customElements.define('c-atsite_all-activity', AllActivity.CustomElementConstructor);

storiesOf('All Activity', module)
    .add('Activity', () => `
        <div class="slds-p-around_medium">
        <c-atsite_all-activity></c-atsite_all-activity>
        <div class="slds-p-around_medium">    
    `);
