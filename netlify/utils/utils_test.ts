import * as utils from './utils'
import assert from 'assert'

describe('utils', () => {
    describe('getRandomString', () => {
        it('should return a string of length 8', () => {
            const str = utils.getRandomString()
            assert.strictEqual(str.length, 8)
        })
    })
})
