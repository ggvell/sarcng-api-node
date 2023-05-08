import { Inject, Injectable } from "@nestjs/common";
import { AulaRepositoryPortDI } from "src/application/di/aula.token";
import { Aula } from "../../domain/aula/entity/aula";
import { AulaRepositoryPort } from "../../domain/aula/port/repository/aula-repository.port";
import { PostAulaUsecase } from "../../domain/aula/usecase/post-aula.usecase";
import { AulaDto } from "../dto/aula.dto";

export class PostAulaService implements PostAulaUsecase {
    constructor(private readonly repository: AulaRepositoryPort) {}
  
    public async execute(data: AulaDto): Promise<AulaDto> {
      const aula: Aula = new Aula();
      aula.contentAttr = data.contentAttr;
      aula.dateAttr = data.dateAttr;
      await this.repository.postAula(aula);
      return new AulaDto(aula);
    }
  }