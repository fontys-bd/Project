import * as prisma from "../integration/index";

export async function GetUsers() {
  const users =  await prisma.GetUsers();

  return users;
}

export async function GetUsersById(id: string) {
  const user = await prisma.GetUserByID(id);
  console.log("user service :",user);

 return user;
}

export async function CreateUser(data: any) {
  const user = await prisma.CreateUser(data);

  return user;
}

export async function UpdateUsers(id: string, data: any) {
  const user = await prisma.UpdateUser(id, data);

  return user;
}

export async function DeleteUsers(id: string) {
  const user = await prisma.DeleteUser(id);

  return user;
}
