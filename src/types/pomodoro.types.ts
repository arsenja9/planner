import { IBase } from '@/types/root.type';

export interface IPomodoroRoundResponse extends IBase {
  isCompleted?: boolean;
  totalSeconds: number;
}

export interface IPomodoroSessionResponse extends IBase {
  isCompleted?: boolean;
  rounds?: IPomodoroRoundResponse[];
}

export type TypePomodoroSessionFormState = Partial<
  Omit<IPomodoroSessionResponse, 'id' | 'createdAt' | 'updateAt'>
>;

export type TypePomodoroRoundFormState = Partial<
  Omit<IPomodoroRoundResponse, 'id' | 'createdAt' | 'updateAt'>
>;

