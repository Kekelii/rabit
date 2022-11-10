import { module, test } from 'qunit';
import { setupRenderingTest } from 'rabit-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | productPerformance24Modifer', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{product-performance24-modifer this.inputValue}}`);

    assert.dom(this.element).hasText('1234');
  });
});
