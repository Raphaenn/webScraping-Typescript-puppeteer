import { ObjectID, Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectIdColumn } from "typeorm";

@Entity('images')
class ImageSchema {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    site: string

    @Column()
    url: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default ImageSchema;