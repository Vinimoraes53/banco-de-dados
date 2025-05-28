const mysql = require("mysql2/promise");

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306, 
        user: 'root',
        password: '250616Av', // Coloque a senha aqui, se houver
        database: 'crud'
    });

    // console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

// Opcional: executa a conexão ao carregar o módulo
// connect();

async function consultarClientes() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clientes;');
    return rows;
}

async function insertCustumer(custumer) {
    const conn = await connect();
    const sql = 
    'INSERT INTO clientes (nome, idade, uf) VALUES (?, ?, ?)';
    const values = [custumer.nome, custumer.idade, custumer.uf];
    return await conn.query(sql, values);
}

async function updateCustumer(id, custumer) {
    const conn = await connect();
    const sql = 
    'UPDATE clientes SET nome = ?, idade = ?, uf = ? WHERE id = ?';
    const values = [custumer.nome, custumer.idade, custumer.uf, id];
    return await conn.query(sql, values);
}

async function deleteCustomer(id) {
    const conn = await connect();
    const sql = 'DELETE FROM clientes where id=?;';
    return await conn.query(sql, [id]);
}
module.exports = { consultarClientes, insertCustumer, updateCustumer, deleteCustomer };

