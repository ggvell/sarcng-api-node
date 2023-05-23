import { Reserva } from "../../../../core/domain/reserva/entity/reserva";
import { TypeOrmReserva } from "./TypeOrmReserva";

export class TypeOrmReservaMapper {
  public static toOrmEntity(domain: Reserva): TypeOrmReserva {
    const ormReserva: TypeOrmReserva = new TypeOrmReserva();

    ormReserva.id = domain.getId();
    ormReserva.observation = domain.getObservation();
    ormReserva.dateCreation = domain.getDateCreation() as Date;
    ormReserva.dateValidity = domain.getDateValidity() as Date;

    return ormReserva;
  }

  public static toDomainEntity(ormReserva: TypeOrmReserva): Reserva {
    const domain: Reserva = new Reserva({
      id: ormReserva.id,
      observation: ormReserva.observation,
      dateCreation: ormReserva.dateCreation,
      dateValidity: ormReserva.dateValidity,
    });

    return domain;
  }

  public static toDomainEntities(ormReservas: TypeOrmReserva[]): Reserva[] {
    return ormReservas.map((ormReserva) => this.toDomainEntity(ormReserva));
  }
}