module.exports = {
  extend: 'apostrophe-pieces',
  name: 'article',
  label: 'Article',
  pluralLabel: 'Articles',
  addFields: [
    // publication
    {
      label: 'Publication Date',
      help: 'The original date at which this article was written.',
      name: 'publicationDate',
      type: 'date',
      required: true
    },

    // author
    {
      label: 'Author',
      help: '',
      name: '_author',
      type: 'joinByArray',
      withType: [
        'person',
        'organization'
      ],
      filters: {
        projection: {
          _url: 1,
          title: 1
        }
      },
      required: true
    },

    // contributor
    {
      label: 'Contributor',
      help: '',
      name: '_contributor',
      type: 'joinByArray',
      withType: [
        'person',
        'organization'
      ],
      filters: {
        projection: {
          _url: 1,
          title: 1
        }
      },
    },
  ],
  arrangeFields: [
    {
      label: 'Basics',
      name: 'basics',
      fields: [
        'title',
        'publicationDate',
        '_author',
        '_contributor',
      ]
    },
  ]
}