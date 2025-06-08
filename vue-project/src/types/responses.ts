export interface Item {
  id: number;
  name: string;
  description: string;
  complite: boolean;
}

export type ItemsResponse = Item[];