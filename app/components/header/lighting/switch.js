import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class HeaderLightingSwitchComponent extends Component {
  @tracked mode = 'light_mode';

  @action
  toggle() {
    if (this.mode === 'light_mode') {
      this.mode = 'dark_mode';
      window.halfmoon.toggleDarkMode();
    } else {
      this.mode = 'light_mode';
      window.halfmoon.toggleDarkMode();
    }
  }
}
