const { Pool } = require('pg');
const pool = new Pool({
  user: 'uxmohmcw',
  host: 'arjuna.db.elephantsql.com',
  database: 'uxmohmcw',
  password: 'pYIaSAvA2JFfhv2UkeKF2I4aWdfP51-1',
  port: 5432, 
});
module.exports = pool;