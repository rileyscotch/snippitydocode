const snipSeed = [
  {
    title: '.gitignore',
    description: 'Keep your unwanted files from pushing to Github!',
    url: 'https://git-scm.com/docs/gitignore',
    language_id: 1,
  },
  {
    title: 'React Fragment',
    description: 'The Div of React, makes a great parent element that is completely empty and useless',
    url: 'https://reactjs.org/docs/fragments.html',
    language_id: 2,

  },
  {
    title: 'NPM FUN',
    description: 'So Much Fun',
    url: 'https://www.npmjs.com/package/npm-fun',
    language_id: 3,

  }
]


exports.seed = function(knex, Promise) {
  return knex('snip').del()
    .then(function () {
      return knex('snip').insert(snipSeed);
    });
};