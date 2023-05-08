export interface DeleteReservaUsecase {
    execute(id: number): Promise<void>;
  }