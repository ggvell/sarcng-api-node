import { Aula } from "../../../../core/domain/aula/entity/aula";
import { TypeOrmAula } from "./TypeOrmAula";

export class TypeOrmAulaMapper {
  public static toOrmEntity(domain: Aula): TypeOrmAula {
    const ormAula: TypeOrmAula = new TypeOrmAula();

    ormAula.id = domain.getId();
    ormAula.title = domain.getTitle();

    ormAula.createdAt = domain.getCreatedAt();
    ormAula.editedAt = domain.getEditedAt() as Date;
    ormAula.publishedAt = domain.getPublishedAt() as Date;
    ormAula.removedAt = domain.getRemovedAt() as Date;

    return ormAula;
  }

  public static toDomainEntity(ormAula: TypeOrmAula): Aula {
    const domain: Aula = new Aula({
      title: ormAula.title,
      id: ormAula.id,
      createdAt: ormAula.createdAt,
      editedAt: ormAula.editedAt,
      publishedAt: ormAula.publishedAt,
      removedAt: ormAula.removedAt,
    });

    return domain;
  }

  public static toDomainEntities(ormAulas: TypeOrmAula[]): Aula[] {
    return ormAulas.map((ormAula) => this.toDomainEntity(ormAula));
  }
}