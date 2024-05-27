import { Column, Entity } from "typeorm";
import { Entity as BaseEntity } from "./entity";

@Entity('providers')
export class Provider extends BaseEntity {

    @Column({type: 'varchar', unique: true, nullable: false})
    name: string;


}