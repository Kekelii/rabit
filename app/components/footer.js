import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

let date = new Date();
let year = date.getFullYear();
export default class FooterComponent extends Component {
  @tracked year = year;
}
