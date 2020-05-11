(function () {
    var client = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');
    var index = client.initIndex('products');

    function newHitsSource(index, params) {
        return function doSearch(query, cb) {
            index
                .search(query, params)
                .then(function (res) {
                    cb(res.hits, res);
                })
                .catch(function (err) {
                    console.error(err);
                    cb([]);
                });
        };
    }

    autocomplete('#search-input', { hint: false }, [
        {
            source: newHitsSource(index, { hitsPerPage: 5 }),
            displayKey: 'name',
            templates: {
                suggestion: function (suggestion) {
                    console.log(suggestion);
                    // return suggestion._highlightResult.my_attribute.value;
                    return suggestion.name;
                }
            }
        }
    ]).on('autocomplete:selected', function (event, suggestion, dataset, context) {
        console.log(event, suggestion, dataset, context);
    });
})();