/// <reference path="../../typings/tsd.d.ts" />
let processResponse = function(response) {
    let isOk = response.ok;

    return response.text()
        .then(body => {
            try {
                body = JSON.parse(body)
            }
            catch (error) {
                if (isOk) isOk = false
            }

            console.log(body, response);
            if (isOk) return body;

            //throw {...body, statusCode: response.status}
            throw {body, statusCode: response.status}
        })
}

export {processResponse};