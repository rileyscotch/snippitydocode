const imgSeed = [{
  name: 'Github',
  imgUrl: 'https://image.flaticon.com/icons/svg/25/25231.svg'
},
{
  name: 'React',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png',
},
{
  name: 'NPM',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/800px-Npm-logo.svg.png',
}
]

exports.seed = function(knex, Promise) {
  return knex('language').del()
    .then(function () {
      return knex('language').insert(imgSeed);
    });
};
