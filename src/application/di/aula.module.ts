import { Module } from "@nestjs/common";
import { GetAulaService } from "src/core/service/aula/get-aula.service";
import { TypeOrmAulaRepositoryAdapter } from "src/infrastructure/adapter/persistence/TypeOrmAulaRepositoryAdapter";
import { AulaController } from "../rest-api/aula.controller";
import { GetAulaUsecaseDI, AulaRepositoryPortDI } from "./aula.token";

const repositoryProviders = [
  {
    provide: AulaRepositoryPortDI,
    useClass: TypeOrmAulaRepositoryAdapter,
  },
];

const useCaseProviders = [
  {
    provide: GetAulaUsecaseDI,
    useFactory: (repository) => new GetAulaService(repository),
    inject: [AulaRepositoryPortDI],
  },
];

@Module({
  imports: [],
  controllers: [AulaController],
  providers: [...repositoryProviders, ...useCaseProviders],
})
export class AulaModule {}