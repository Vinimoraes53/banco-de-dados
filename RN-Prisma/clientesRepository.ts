/* Caminho absoluto

 import { PrismaClient } from "@prisma/client"; */


// Caminho relativo

import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();


async function connect() {

  await prisma.$connect();

}


connect();


export function getClientes() {

  return prisma.clientes.findMany();

}


// Consulta por id

export function getCliente(id: number) {

    return prisma.clientes.findUnique({

        where: { id }

    })

}

// inserir registro

export function addCliente(newCustomer: any) {

    return prisma.clientes.create({

        data: newCustomer

    });

}

// Atualizar registro

export function updateCliente(id: number, newData: any) {

    return prisma.clientes.update({

        where: { id },

        data: newData

    })

}

// Deletar registro

export async function deleteCliente(id: number) {

    return prisma.clientes.delete({

        where: { id }

    })

}