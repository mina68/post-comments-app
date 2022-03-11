import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Comment } from "./Comment";
import { Timestamps } from "./Timestamps";

@Entity('posts')
export class Post extends Timestamps{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({type: 'text'})
    body: string;

    @OneToMany(() => Comment, comment => comment.post)
    comments: Comment[];
}
