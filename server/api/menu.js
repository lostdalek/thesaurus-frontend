

module.exports = function(req, res) {

    res.setHeader('Content-Type', 'application/json');
    if( req.method === 'GET') {
        var response = {
            module: 'rot',
            children: [{
                module: 'a1',
                children: [{
                    module: 'aa1',
                    leaf: true
                }, {
                    module: 'aa2',
                    leaf: true
                }]
            }, {
                module: 'a2'
            }]
        };
        /*var response = [
            {
                "base_id": 69,
                "databox_id": 4,
                "collection_id": 26,
                "name": "collectionTest",
                "record_count": 0,
                "labels": {"fr": "collectionTest", "en": "collectionTest", "de": "collectionTest", "nl": "collectionTest"},
                "slug": "collectionTest"
            }, {
                "base_id": 59,
                "databox_id": 4,
                "collection_id": 13,
                "name": "collectionTest 2",
                "record_count": 46,
                "labels": {"fr": "collectionTest 2", "en": "collectionTest 2", "de": "collectionTest 2", "nl": "collectionTest 2"},
                "slug": "collectionTest2"
            }, {
                "base_id": 60,
                "databox_id": 4,
                "collection_id": 14,
                "name": "collectionTest 3",
                "record_count": 178,
                "labels": {"fr": "collectionTest 3", "en": "collectionTest 3", "de": "collectionTest 3", "nl": "collectionTest 3"},
                "slug": "collectionTest3"
            }];*/

        res.end(JSON.stringify(response));
    }

};