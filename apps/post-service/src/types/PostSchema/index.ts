export type PostSchema = {
  id: string;
  anonymous: boolean;
  title: string;
  content: string;
  picture?: string | null;
  picture_desc?: string | null;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  topic?: string | null;
  authorUsername: string;
}
