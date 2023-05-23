import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Aula")
export class TypeOrmAula {
  @PrimaryColumn()
  public id: string;

  @Column()
  public content: string;

  @Column()
  public date: Date;
}