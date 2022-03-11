import {CreateDateColumn, UpdateDateColumn} from "typeorm";

export abstract class Timestamps {

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
