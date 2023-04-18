export class PostDTO {
  constructor(
    id: string,
    anonymous: boolean,
    title: string,
    content: string,
    status: string,
    created_at: Date,
    updated_at: Date,
    authorUsername: string,
    picture: string | null,
    picture_desc: string | null,
    deleted_at: Date | null,
    topic: string | null
  ) {
    this.id = id;
    this.anonymous = anonymous;
    this.title = title;
    this.content = content;
    this.picture = picture;
    this.picture_desc = picture_desc;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
    this.topic = topic;
    this.authorUsername = authorUsername;
  }

  id: string;
  anonymous: boolean;
  title: string;
  content: string;
  picture: string | null;
  picture_desc: string | null;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
  topic: string | null;
  authorUsername: string;
}
