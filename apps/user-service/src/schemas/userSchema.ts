export default interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  profile_picture?: string;
  first_name?: string;
  last_name?: string;
  registered_at: Date;
  deleted_at?: Date;
}

// model User {
//   id              String    @id @default(auto()) @map("_id") @db.ObjectId
//   email           String    @unique
//   username        String    @unique
//   password        String
//   profile_picture String?
//   first_name      String?
//   last_name       String?
//   registered_at   DateTime
//   deleted_at      DateTime?
//   posts           Post[]
//   Comment         Comment[]
// }
