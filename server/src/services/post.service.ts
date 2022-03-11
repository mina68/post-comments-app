import { Inject, Service } from "typedi";
import { Connection, EntitySchema } from "typeorm";
import { Comment } from "../database/entity/Comment";
import PostInterface from '../interfaces/types/Post';

@Service('service.post')
export default class PostService {

    constructor(
        @Inject('connection') private connection: Connection,
        @Inject('postEntity') private postEntity: EntitySchema,
        @Inject('commentEntity') private commentEntity: EntitySchema,
    ) {}

    async getAll() {
        return this.connection.getRepository(this.postEntity).find({ relations: ["comments"] });
    }

    async fineOne(id: number) {
        return this.connection.getRepository(this.postEntity).findOneOrFail({where: {id}, relations: ['comments']});
    }

    async getPostComments(post_id: number) {
        return this.connection.getRepository(this.commentEntity).find({where: {post: post_id}});
    }

    async create(post: PostInterface) {
        return this.connection.createQueryBuilder()
        .insert()
        .into('posts')
        .values(post)
        .execute();
    }

    async delete(id: number) {
        const post = await this.connection.getRepository(this.postEntity).findOneOrFail({id});

        const comment = new Comment();
        comment.post = post;
        await this.connection.getRepository(this.commentEntity).delete(comment);

        return this.connection.getRepository(this.postEntity).delete({id});
    }
}