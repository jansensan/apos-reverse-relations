module.exports = {
  extend: 'apostrophe-pieces',
  name: 'person',
  label: 'Person',
  pluralLabel: 'People',
  addFields: [
    // details
    {
      label: 'Display Name',
      help: '',
      name: 'title', // override apos'
      type: 'string',
      required: true,
    },
    {
      label: 'First Name',
      help: '',
      name: 'firstName',
      type: 'string',
      required: false,
    },
    {
      label: 'Last Name',
      help: '',
      name: 'lastName',
      type: 'string',
      required: false,
    },

    // reverse relations
    {
      name: '_articlesWritten',
      type: 'joinByArrayReverse',
      withType: 'article',
      reverseOf: '_author',
      filters: {
        projection: {
          '_url': 1,
          'title': 1,
        }
      }
    },
    {
      name: '_articlesContributed',
      type: 'joinByArrayReverse',
      withType: 'article',
      reverseOf: '_contributor',
      filters: {
        projection: {
          '_url': 1,
          'title': 1,
        }
      }
    },
  ],
  arrangeFields: [
    {
      label: 'Basics',
      name: 'basics',
      fields: [
        'title',
        'firstName',
        'lastName',
      ]
    },
  ]
};
