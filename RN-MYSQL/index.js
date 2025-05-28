// const db = require("./db");
// console.log('conectou!');

// (async () => {
//     const clientes = await db.consultarClientes();
//     console.log(clientes);
// })();

// (async () => {
//     const db = require("./db");
//     const result = await db.insertCustumer
//     ({nome: "Zé", idade: 18, uf: "SP"});
//     console.log(result);
//     const clientes = await db.consultarClientes();
//     console.log(clientes);
//  })();

// (async () => {
//      const db = require("./db");
//      const result2 = await db.updateCustumer
//     (4, {nome: "Zé Mnaé", idade: 19, uf: "SP"});
//     console.log(result2);
//  })();

(async () => {
    const db = require("./db");
    console.log('Apagar registros');
    const result3 = await db.deleteCustomer(1); // inserir o id do cliente que deseja apagar
    console.log(result3);
})();