import { module, test } from 'qunit';
import { setupRenderingTest } from 'rabit-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | header/notification/container',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<Header::Notification::Container />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <Header::Notification::Container>
        template block text
      </Header::Notification::Container>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);
