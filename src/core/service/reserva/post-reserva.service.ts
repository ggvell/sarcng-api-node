import { Inject, Injectable } from "@nestjs/common";
import { ReservaRepositoryPortDI } from "src/application/di/reserva.token";
import { Reserva } from "../../domain/reserva/entity/reserva";
import { ReservaRepositoryPort } from "../../domain/reserva/port/repository/reserva-repository.port";
import { PostReservaUsecase } from "../../domain/reserva/usecase/post-reserva.usecase";
import { ReservaDto } from "../dto/reserva.dto";

export class PostReservaService implements PostReservaUsecase {
    constructor(private readonly repository: ReservaRepositoryPort) {}
  
    public async execute(data: ReservaDto): Promise<ReservaDto> {
      const reserva: Reserva = new Reserva();
      reserva.observationAttr = data.observationAttr;
      reserva.dateCreationAttr = data.dateCreationAttr;
      reserva.dateValidityAttr = data.dateValidityAttr;
      await this.repository.postReserva(reserva);
      return new ReservaDto(reserva);
    }
  }