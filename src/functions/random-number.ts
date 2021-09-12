import { Handler } from '@netlify/functions'
import * as utils from '../utils/utils'

const handler: Handler = async (event, context) => {
    return {
        statusCode: 200,
        body: utils.getRandomNumber(6).toString(),
    }
}

export { handler }
