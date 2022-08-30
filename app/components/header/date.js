import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

const time = new Date();
const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const Days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default class HeaderDateComponent extends Component {
  @tracked day = time.getDate();
  @tracked month = Months[time.getMonth()];
  @tracked year = time.getFullYear();
  @tracked dayname = Days[time.getDay() - 1];
}
