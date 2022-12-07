import { LightningElement, api } from 'lwc';
import iconUpArrow from './templates/iconUpArrow.html';
import iconDownArrow from './templates/iconDownArrow.html';
import iconRightArrow from './templates/iconRightArrow.html';
import iconActivityListIconMessage from './templates/iconActivityListIconMessage.html';
import iconActivityListNote from './templates/iconActivityListNote.html';
import iconActivityListFile from './templates/iconActivityListFile.html';
import iconArrowRight from './templates/iconArrowRight.html';


export default class At_icon extends LightningElement {
    @api name='message';

    render() {
        if (this.name === 'iconUpArrow')
        {
            return iconUpArrow;
        }
        else if(this.name === 'iconDownArrow')
        {
            return iconDownArrow;
        }
        else if(this.name === 'iconRightArrow')
        {
            return iconRightArrow;
        }
        else if(this.name === 'distribution')
        {
            return iconActivityListIconMessage;
        }
        else if(this.name === 'hardship')
        {
            return iconActivityListNote;
        }
        else if(this.name === 'loan')
        {
            return iconActivityListFile;
        }
        else if(this.name === 'iconArrowRight')
        {
            return iconArrowRight;
        }
            
    }
}