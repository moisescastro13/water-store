import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Entity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;
    
}