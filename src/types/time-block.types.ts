import { IBase } from '@/types/root.type';

export interface ITimeBlockResponse extends IBase{
  name: string;
  color?: string;
  duration: number;
  order: number;
}

export type TypeTimeBlockFormState = Partial<
  Omit<ITimeBlockResponse, 'createdAt' | 'updateAt'>
>;
