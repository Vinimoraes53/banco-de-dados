-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "idade" INTEGER NOT NULL,
    "uf" CHAR(2) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);
