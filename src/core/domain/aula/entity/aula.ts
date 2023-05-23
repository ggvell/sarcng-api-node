import { IsDate, IsOptional } from "class-validator";
import { Entity } from "../../../common/entity/Entity";
import { RemovableEntity } from "../../../common/entity/RemovableEntity";
import { Nullable } from "../../../common/type/CommonType";
import { CreateAulaEntityPayload } from "./type/CreateAulaEntityPayload";
import { getDefaultSettings } from "http2";

export class Aula extends Entity<string> implements RemovableEntity {

    @IsOptional()
    @IsDate()
    contentAttr: string;
    idAttr: number;
    dateAttr: Date;
  
    constructor(payload: CreateAulaEntityPayload) {
      super();
  
      this.id = payload.id || v4();
      this.contentAttr = payload.content || null;
      this.dateAttr = payload.date || new Date();
    }
  
    remove(): Promise<void> {
      throw new Error("Method not implemented.");
    }

    getContent(){
      return this.contentAttr;
    }

    getDate(){
      return this.dateAttr;
    }
  }

function v4(): string {
  throw new Error("Function not implemented.");
}
