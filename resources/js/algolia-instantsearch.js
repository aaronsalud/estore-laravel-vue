(function () {
    const searchClient = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');

    const search = instantsearch({
        indexName: 'products',
        searchClient,
    });

    search.addWidgets([
        instantsearch.widgets.searchBox({
            container: '#search-box',
            placeholder: 'Search for Products'
        }),

        instantsearch.widgets.hits({
            container: '#hits',
            templates: {
                item(hit) {
                  return `
                    <article>
                      <p>Name: ${instantsearch.highlight({ attribute: 'name', highlightedTagName: 'mark', hit })}</p>
                      <p>Name: ${instantsearch.snippet({ attribute: 'name', highlightedTagName: 'mark', hit })}</p>
                    </article>
                  `;
                }
              }
        })
    ]);

    search.start();
})();