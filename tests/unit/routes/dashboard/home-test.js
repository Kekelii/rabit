import { module, test } from 'qunit';
import { setupTest } from 'rabit-ember/tests/helpers';

module('Unit | Route | dashboard/home', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dashboard/home');
    assert.ok(route);
  });
});
