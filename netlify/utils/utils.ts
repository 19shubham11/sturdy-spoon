import * as crypto from 'crypto'

function getRandomString(): string {
    const bytes = crypto.randomBytes(4)
    return bytes.toString('hex')
}

export { getRandomString }
