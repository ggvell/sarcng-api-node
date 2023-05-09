import { Inject, Injectable } from "@nestjs/common";
import { AulaRepositoryPortDI } from "src/application/di/aula.token";
import { Aula } from "../../domain/aula/entity/aula";
import { AulaRepositoryPort } from "../../domain/aula/port/repository/aula-repository.port";
import { PostAulaUsecase } from "../../domain/aula/usecase/post-aula.usecase";
import { AulaDto } from "../dto/aula.dto";
import { CreateAulaEntityPayload } from "src/core/domain/aula/entity/type/CreateAulaEntityPayload";

export class PostAulaService implements PostAulaUsecase {
    constructor(private readonly repository: AulaRepositoryPort) {}
  
    public async execute(data: AulaDto, payload: CreateAulaEntityPayload): Promise<AulaDto> {
      
      const aula: Aula = new Aula(payload);
      aula.contentAttr = data.contentAttr;
      aula.dateAttr = data.dateAttr;
      await this.repository.postAula(aula);
      return new AulaDto(aula);
    }
  }