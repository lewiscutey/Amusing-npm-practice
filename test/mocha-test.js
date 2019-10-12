const assert = require('assert');
const add = require('../mocha')

describe('Array', () => {
  describe('indexOf()', () => {
    before(function() {
      // 在这个区块内的所有测试之前运行
      console.log(`before`)
    })
    after(function () {
        // 在这个区块内的所有测试之后运行
        console.log(`after`)
    })
    beforeEach(function () {
        // 在这个区块内的每个测试运行之前运行
        console.log(`beforeEach`)
    })
    afterEach(function () {
        // 在这个区块内的每个测试之后运行
        console.log(`afterEach`)
    })
    it('should return 0 when the value is not present', () => {
      assert.equal(0, add(0))
    })
    it('should return 3 when the value is not present', () => {
      assert.equal(3, add(1,2))
    })
    it('should return 6 when the value is not present', () => {
      assert.equal(6, add(1,2,3))
    })
  })
})