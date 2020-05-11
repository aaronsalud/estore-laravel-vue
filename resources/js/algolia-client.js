(function () {
    var client = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');
    var index = client.initIndex('products');
    var enterPressed = false;

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
                    const markup = `
                        <div class="algolia-result">
                            <span>${suggestion._highlightResult.name.value}</span>
                            <span>$${(suggestion.price / 100).toFixed(2)}</span>
                        </div>
                        <div class="algolia-details">
                            <span>${suggestion._highlightResult.details.value}</span>
                        </div>
                    `;

                    return markup;
                },
                empty: function(result){
                    return `<span>Sorry, we id not find any results for ${result.query}</span>`
                }
            }
        }
    ]).on('autocomplete:selected', function (event, suggestion, dataset, context) {
        window.location.href = window.location.origin + '/shop/' + suggestion.slug;
        enterPressed = true;
    }).on('keyup', function(event){
        if(event.keyCode === 13 && !enterPressed){
            console.log('Enter key hit');
        }
    });
})();