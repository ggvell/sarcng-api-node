export interface DeleteAulaUsecase {
    execute(id: number): Promise<void>;
  }