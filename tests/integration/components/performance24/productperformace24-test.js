import { module, test } from 'qunit';
import { setupRenderingTest } from 'rabit-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | performance24/productperformace24',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<Performance24::Productperformace24 />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <Performance24::Productperformace24>
        template block text
      </Performance24::Productperformace24>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);
