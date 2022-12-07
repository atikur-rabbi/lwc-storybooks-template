import { LightningElement, api } from 'lwc';

/**
 * Show an item
 */
export default class Header extends LightningElement {
  @api
  label = '';
}
