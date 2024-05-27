import { Column, Entity } from "typeorm";
import { Entity as BaseEntity } from "./entity";

@Entity('products')
export class Product extends BaseEntity {

    @Column({type: 'varchar', unique: true, nullable: false})
    productName: string;


}

