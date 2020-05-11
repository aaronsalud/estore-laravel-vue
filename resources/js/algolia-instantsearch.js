(function () {
    const searchClient = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');

    const search = instantsearch({
        indexName: 'products',
        searchClient,
    });

    search.addWidgets([
        instantsearch.widgets.searchBox({
            container: '#searchbox',
        }),

        instantsearch.widgets.hits({
            container: '#hits',
        })
    ]);

    search.start();
})();