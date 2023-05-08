import { Reserva } from "../../entity/reserva";

export interface ReservaRepositoryPort {
  getAllReserva(): Promise<Reserva[]>;
  getReserva(id: number): Promise<Reserva>;
  putReserva(payload: Reserva): Promise<Reserva>;
  postReserva(payload: Reserva): Promise<Reserva>;
  deleteReserva(id: number): Promise<void>;
}