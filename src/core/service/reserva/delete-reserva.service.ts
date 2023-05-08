import { ReservaRepositoryPort } from "../../domain/reserva/port/repository/reserva-repository.port";
import { DeleteReservaUsecase } from "../../domain/reserva/usecase/delete-reserva.usecase";


export class DeleteReservaService implements DeleteReservaUsecase {
    constructor(private readonly repository: ReservaRepositoryPort) {}
  
    public async execute(id: number): Promise<void> {
      await this.repository.deleteReserva(id);
    }
  }