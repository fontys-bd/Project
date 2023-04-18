export type Post = {
    id: string,
    anonymous: boolean,
    title: string,
    content: string,
    picture?: string,
    picture_desc?: string,
    status: string,
    created_at: Date,
    updated_at: Date,
    deleted_at?: Date,
    topic?: string,
    authorUsername: string
};