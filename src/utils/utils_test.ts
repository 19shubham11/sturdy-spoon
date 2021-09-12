import * as utils from './utils'
import assert from 'assert'

describe('utils', () => {
    describe('getRandomString', () => {
        it('should return a string of length 8', () => {
            const str = utils.getRandomString()
            assert.strictEqual(str.length, 8)
        })
    })

    describe('getRandomNumber', () => {
        it('should return a random number of given length', () => {
            const len = 6
            const num = utils.getRandomNumber(len)
            assert.strictEqual(num.toString().length, len)
        })

        it('should throw if len is less than 1', () => {
            const len = 0
            assert.throws(() => {
                utils.getRandomNumber(len)
            }, /len should be greater than or equal to 1/)
        })
    })
})
