import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Reserva")
export class TypeOrmReserva {
  @PrimaryColumn()
  public id: string;

  @Column()
  public observation: string;

  @Column()
  public dateCreation: Date;

  @Column()
  public dateValidity: Date;
}