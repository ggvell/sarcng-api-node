import { Aula } from "../../entity/aula";

export interface AulaRepositoryPort {
  getAllAula(): Promise<Aula[]>;
  getAula(id: number): Promise<Aula>;
  putAula(payload: Aula): Promise<Aula>;
  postAula(payload: Aula): Promise<Aula>;
  deleteAula(id: number): Promise<void>;
}