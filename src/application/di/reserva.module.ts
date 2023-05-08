import { Module } from "@nestjs/common";
import { GetReservaService } from "src/core/service/reserva/get-reserva.service";
import { TypeOrmReservaRepositoryAdapter } from "src/infrastructure/adapter/persistence/OrmReserva/TypeOrmReservaRepositoryAdapter";
import { ReservaController } from "../rest-api/reserva.controller";
import { GetReservaUsecaseDI, ReservaRepositoryPortDI } from "./reserva.token";

const repositoryProviders = [
  {
    provide: ReservaRepositoryPortDI,
    useClass: TypeOrmReservaRepositoryAdapter,
  },
];

const useCaseProviders = [
  {
    provide: GetReservaUsecaseDI,
    useFactory: (repository) => new GetReservaService(repository),
    inject: [ReservaRepositoryPortDI],
  },
];

@Module({
  imports: [],
  controllers: [ReservaController],
  providers: [...repositoryProviders, ...useCaseProviders],
})
export class ReservaModule {}