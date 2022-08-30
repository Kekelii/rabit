import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

let panics = [];

let State;
if (panics.length > 0) {
  State = 'text-danger';
}

export default class HeaderNotificationAlertComponent extends Component {
  @tracked State = State;
}
