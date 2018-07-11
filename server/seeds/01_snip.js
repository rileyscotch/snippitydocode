const snipSeed = [
  {id: 1, 
    title: '.gitignore',
    language: 'Github',
    description: 'Keep your unwanted files from pushing to Github!',
    url: 'https://git-scm.com/docs/gitignore'
  },
  {id: 2, 
    title: 'React Fragment',
    language: 'React',
    description: 'The Div of React, makes a great parent element that is completely empty and useless',
    url: 'https://reactjs.org/docs/fragments.html'
  },
  {id: 3, 
    title: 'NPM FUN',
    language: 'NPM',
    description: 'So Much Fun',
    url: 'https://www.npmjs.com/package/npm-fun'
  }
]


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "snip"; ALTER SEQUENCE snip_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('snip').insert(snipSeed);
    });
};
