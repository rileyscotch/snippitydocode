module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///codesnips-db'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL, 
  }

};
