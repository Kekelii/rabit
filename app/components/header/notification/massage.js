import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

let messages = [1];
let messagenumber = messages.length;
let icon = 'd-none';
if (messages.length > 0) {
    icon = 'd-flex';
}

export default class HeaderNotificationMassageComponent extends Component {
    @tracked State = 'text-primary';
    @tracked count = messagenumber;
    @tracked icon = icon;
}