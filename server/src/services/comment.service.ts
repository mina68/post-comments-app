import { Inject, Service } from "typedi";
import { Connection, EntitySchema } from "typeorm";
import { Comment } from "../database/entity/Comment";
import CommentInterface from '../interfaces/types/Comment';

@Service('service.comment')
export default class CommentService {

    constructor(
        @Inject('connection') private connection: Connection,
        @Inject('postEntity') private postEntity: EntitySchema,
        @Inject('commentEntity') private commentEntity: EntitySchema,
    ) {}

    async fineOne(id: number) {
        return this.connection.getRepository(this.commentEntity).findOneOrFail({where: {id}, relations: ['post']});
    }

    async create(comment: CommentInterface) {
        const post = await this.connection.getRepository(this.postEntity).findOneOrFail({id: comment.post_id});
        const newComment = new Comment;
        newComment.body = comment.body;
        newComment.post = post;
        return this.connection.manager.save(newComment);
    }

    async delete(id: number) {
        return this.connection.getRepository(this.commentEntity).delete({id});
    }
}