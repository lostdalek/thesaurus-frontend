module.exports = function (req, res) {

    res.setHeader('Content-Type', 'application/json');
    if (req.method === 'GET') {
        var response = [
            {
                "id": 1,
                "name": "db_master"
            }, {
                "id": 2,
                "name": "db_test1"
            }, {
                "id": 3,
                "name": "db_test2"
            }];

        res.end(JSON.stringify(response));
    }

};