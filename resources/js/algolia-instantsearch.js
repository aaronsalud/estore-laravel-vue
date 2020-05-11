(function() {
    const searchClient = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');

    const search = instantsearch({
        indexName: 'products',
        searchClient,
    });

    const widgets = {
        searchBox: instantsearch.widgets.searchBox({
            container: '#search-box',
            placeholder: 'Search for Products'
        }),
        hits: instantsearch.widgets.hits({
            container: '#hits',
            templates: {
                item(hit) {
                    return `
            <div>
              <p>${instantsearch.highlight({ attribute: 'name', highlightedTagName: 'mark', hit })}</p>
            </div>
          `;
                }
            }
        }),
        pagination: instantsearch.widgets.pagination({
            container: '#pagination',
        }),
        stats: instantsearch.widgets.stats({
            container: '#stats',
        })
    };

    search.addWidgets([widgets.searchBox, widgets.hits, widgets.pagination, widgets.stats]);

    search.start();
})();