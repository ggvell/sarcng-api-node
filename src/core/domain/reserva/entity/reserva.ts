import { IsDate, IsOptional } from "class-validator";
import { Entity } from "../../../common/entity/Entity";
import { RemovableEntity } from "../../../common/entity/RemovableEntity";
import { Nullable } from "../../../common/type/CommonType";
import { CreateReservaEntityPayload } from "./type/CreateReservaEntityPayload";

export class Reserva extends Entity<string> implements RemovableEntity {
    @IsDate()
    private readonly createdAt: Date;
  
    @IsOptional()
    @IsDate()
    private editedAt: Nullable<Date>;
  
    @IsOptional()
    @IsDate()
    private removedAt: Nullable<Date>;

    @IsOptional()
    @IsDate()
    private publishedAt: Nullable<Date>;
    observationAttr: string;
    idAttr: number;
    dateCreationAttr: Date;
    dateValidityAttr: Date;
  
    constructor(payload: CreateReservaEntityPayload) {
      super();
  
      this.id = payload.id || v4();
      this.createdAt = payload.createdAt || new Date();
      this.editedAt = payload.editedAt || null;
      this.publishedAt = payload.publishedAt || null;
      this.removedAt = payload.removedAt || null;
    }
  
    remove(): Promise<void> {
      throw new Error("Method not implemented.");
    }
  }

function v4(): string {
  throw new Error("Function not implemented.");
}
