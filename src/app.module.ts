import { Module } from "@nestjs/common";
import { AulaModule } from "./application/di/aula.module";

@Module({
  imports: [AulaModule],
})
export class AppModule {}