import { IsDate, IsOptional } from "class-validator";
import { Entity } from "../../../common/entity/Entity";
import { RemovableEntity } from "../../../common/entity/RemovableEntity";
import { Nullable } from "../../../common/type/CommonType";
import { CreateReservaEntityPayload } from "./type/CreateReservaEntityPayload";

export class Reserva extends Entity<string> implements RemovableEntity {

    @IsOptional()
    @IsDate()
    observationAttr: string;
    idAttr: number;
    dateCreationAttr: Date;
    dateValidityAttr: Date;
  
    constructor(payload: CreateReservaEntityPayload) {
      super();
  
      this.id = payload.id || v4();
      this.observationAttr = payload.observation || null;
      this.dateCreationAttr = payload.dateCreation || new Date();
      this.dateValidityAttr = payload.dateValidity || new Date();
    }
  
    remove(): Promise<void> {
      throw new Error("Method not implemented.");
    }

    getObservation(){
      return this.observationAttr;
    }

    getDateCreation(){
      return this.dateCreationAttr;
    }

    getDateValidity(){
      return this.dateValidityAttr;
    }
  }

function v4(): string {
  throw new Error("Function not implemented.");
}
