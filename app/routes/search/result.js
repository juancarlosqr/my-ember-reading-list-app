import Ember from 'ember';

let $ = Ember.$;

function docToBook(doc) {
  return Ember.Object.create({
    key: doc.key,
    title: doc.title,
    author: (doc.author_name && doc.author_name[0]) || 'Unknown Author',
    publicationDate: doc.first_publish_year
  });
}

export default Ember.Route.extend({
  model: function(params) {
    let query = encodeURIComponent(params.query);

    return $.getJSON(`https://openlibrary.org/search.json?q=${query}&limit=15&callback=`)
      .then((r) => {
          return {
            'query': query,
            'numFound': r.numFound.toLocaleString(),
            'books': r.docs.map(docToBook).sortBy('title')
          };
      });
  }
});
