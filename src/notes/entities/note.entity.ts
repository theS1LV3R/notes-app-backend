import { ObjectId } from 'mongoose';
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Note {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  archived: boolean;
}
