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
            const num = utils.getRandomNumber(6)
            console.log('nu', num)
        })
    })
})
