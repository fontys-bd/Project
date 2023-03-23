const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


export async function GetUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export async function GetUserByID(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return user;
}

export async function CreateUser(data: any) {
  const user = await prisma.user.create({
    data: data,
  });
  return user;
}

export async function UpdateUser(id: string, data: any) {
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  });
  return user;
}

export async function DeleteUser(id: string) {
  const user = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return user;
}


