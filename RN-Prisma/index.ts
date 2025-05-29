// codigo para pesquisar clientes
// import { getClientes } from "./clientesRepository";

// async function start() {
//   const clientes = await getClientes();
//   console.log(clientes);
// }
// start();

// codigo para pesquisar cliente por id
// import { addCliente } from "./clientesRepository";
// async function start() {
//     const result = await addCliente({
//         id: 1,
//         nome: "Renato Rocha",
//         idade: 36,
//         uf: "SP"
//     })
//     console.log(result);
// }
// start();


// codigo para atualizar cliente
// import { updateCliente } from "./clientesRepository";
// async function start() {
//   const cliente = await updateCliente(1, {
//     nome: "Dinho",
//     idade: 36,
//     uf: "SC",
//   });
//   console.log(cliente);
// }
// start();

import { deleteCliente } from "./clientesRepository";
async function start() {
  const cliente = await deleteCliente(1);
  console.log(cliente);
}
start();
