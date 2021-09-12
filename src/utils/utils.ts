import * as crypto from 'crypto'

function getRandomString(): string {
    const bytes = crypto.randomBytes(4)
    return bytes.toString('hex')
}

function getRandomNumber(len: number): number | never {
    if (len < 1) {
        throw new Error('len should be greater than or equal to 1')
    }
    const base = Math.pow(10, len)
    return Math.floor(Math.random() * base)
}

export { getRandomString, getRandomNumber }
