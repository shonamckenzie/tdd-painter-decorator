const assert = require('assert')
const PaintCan = require('../paint_can')

describe('PaintCan', function () {
  it('should have paint litres in numbers', function () {
    const paintcan = new PaintCan(5)
    const actual = paintcan.litres
    assert.strictEqual(actual, 5)
  })

  it('should be able to empty itself', function () {
    const paintcan = new PaintCan(5)
    paintcan.emptyPaintCan()
    const actual = paintcan.litres
    assert.strictEqual(actual, 0)
  })

  describe('checkEmptiness', function () {
    it('should check if it\'s empty', function () {
      const paintcan = new PaintCan(0)
      const actual = paintcan.checkIfEmpty()
      assert.strictEqual(actual, true)
    })

    it('should check if it\'s not empty', function () {
      const paintcan = new PaintCan(5)
      const actual = paintcan.checkIfEmpty()
      assert.strictEqual(actual, false)
    })
  })

})
