module.exports = {
  extend: 'apostrophe-pieces',
  name: 'organization',
  label: 'Organization',
  pluralLabel: 'Organizations',
  addFields: [
    {
      label: 'Organization Name',
      help: '',
      name: 'title', // override apos'
      type: 'string',
      required: true,
    },
  ],
  arrangeFields: [
    {
      label: 'Basics',
      name: 'basics',
      fields: [
        'title',
      ]
    },
  ]
};
