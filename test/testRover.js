const { Rover } = require('../src/rover.js');
const assert = require('assert');

describe('Rover', () => {
  it('Should validate rover of same position and same direction', () => {
    const rover1 = new Rover({ x: 0, y: 0 }, 'north');
    const rover2 = new Rover({ x: 0, y: 0 }, 'north');
    assert.ok(rover1.equals(rover2));
  });
});
