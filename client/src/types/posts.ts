export interface IComment {
    id: number;
    body: string;
    created_at: Date;
    updated_at: Date | null;
}

export interface IPost {
    id: number;
    title: string;
    body: string;
    created_at: Date;
    comments: IComment[]
}

export interface IPostsContext {
    posts: IPost[] | undefined;
    deletePost: (id: number) => void;
    isPending: boolean;
    error: any;
}

export interface ISinglePostContext {
    post: IPost | undefined;
    addComment: (comment: IComment) => void;
    deleteComment: (id: number) => void;
    isPending: boolean;
    error: any;
}