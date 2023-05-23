import { Aula } from "../../../../core/domain/aula/entity/aula";
import { TypeOrmAula } from "./TypeOrmAula";

export class TypeOrmAulaMapper {
  public static toOrmEntity(domain: Aula): TypeOrmAula {
    const ormAula: TypeOrmAula = new TypeOrmAula();

    ormAula.id = domain.getId();
    ormAula.content = domain.getContent();
    ormAula.date = domain.getDate() as Date;
    return ormAula;
  }

  public static toDomainEntity(ormAula: TypeOrmAula): Aula {
    const domain: Aula = new Aula({
      id: ormAula.id,
      content: ormAula.content,
      date: ormAula.date,
    });

    return domain;
  }

  public static toDomainEntities(ormAulas: TypeOrmAula[]): Aula[] {
    return ormAulas.map((ormAula) => this.toDomainEntity(ormAula));
  }
}