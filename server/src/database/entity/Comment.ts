import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import { Post } from "./Post";
import { Timestamps } from "./Timestamps";

@Entity('comments')
export class Comment extends Timestamps{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    body: string;

    @ManyToOne(() => Post, post => post.comments)
    @JoinColumn({ name: "post_id" })
    post: Post;

}
