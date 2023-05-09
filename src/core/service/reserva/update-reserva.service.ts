import { Reserva } from "../../domain/reserva/entity/reserva";
import { ReservaRepositoryPort } from "../../domain/reserva/port/repository/reserva-repository.port";
import { UpdateReservaUsecase } from "../../domain/reserva/usecase/update-reserva.usecase";
import { ReservaDto } from "../dto/reserva.dto";

export class UpdateReservaService implements UpdateReservaUsecase {
    constructor(private readonly repository: ReservaRepositoryPort) {}
  
    public async execute(id: number, data: ReservaDto): Promise<ReservaDto> {
      const reserva: Reserva = await this.repository.getReserva(id);
      reserva.observationAttr = data.observationAttr;
      reserva.dateCreationAttr = data.dateCreationAttr;
      reserva.dateValidityAttr = data.dateValidityAttr;
      await this.repository.putReserva(reserva);
      return new ReservaDto(reserva);
    }
  }