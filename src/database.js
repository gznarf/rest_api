import mysqlConnection from 'mysql2/promise';

const properties = {
    host:'localhost',
    user: 'root',
    password: '22die-Nuerjahre',
    database: 'rest_api',
};

export const pool = mysqlConnection.createPool(properties);