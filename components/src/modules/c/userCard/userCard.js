import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class UserCard extends LightningElement {
  @api
  name = "";
  @api
  avatar = "";
}