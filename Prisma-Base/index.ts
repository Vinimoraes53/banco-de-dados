import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.cliente.createMany({
    data: [
      { nome: 'Renato', idade: 32, uf: 'RJ' },
      { nome: 'Dado',   idade: 18, uf: 'RJ' },
      { nome: 'Bonfá',  idade: 5,  uf: 'DF' }
    ],
    skipDuplicates: true
  });

  const clientes = await prisma.cliente.findMany();
  console.table(clientes);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());