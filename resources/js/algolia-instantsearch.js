(function() {
    const searchClient = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');

    const search = instantsearch({
        indexName: 'products',
        searchClient,
        routing: true
    });

    const widgets = {
        searchBox: instantsearch.widgets.searchBox({
            container: '#search-box',
            placeholder: 'Search for Products'
        }),
        hits: instantsearch.widgets.hits({
            container: '#hits',
            templates: {
                empty: 'No Results found',
                item: function(item) {
                    let markdown = `
                      <a href="${window.location.origin}/shop/${item.slug}">
                        <div class="result-title">${item._highlightResult.name.value}</div>
                        <div class="result-details">${item._highlightResult.details.value}</div>
                        <div class="result-price">$${(item.price / 100).toFixed(2)}</div>
                      </a>
                    `;
                    if (item.image) {
                        markdown += `<img src="${window.location.origin}/storage/${item.image}" alt="img" class="algolia-thumb-result"/>`;
                    }

                    return markdown;
                }
            }
        }),
        pagination: instantsearch.widgets.pagination({
            container: '#pagination',
        }),
        stats: instantsearch.widgets.stats({
            container: '#stats',
        }),
        refinementList: instantsearch.widgets.refinementList({
            container: '#refinement-list',
            attribute: 'categories',
        })
    };

    search.addWidgets([widgets.searchBox, widgets.hits, widgets.pagination, widgets.stats, widgets.refinementList]);

    search.start();
})();