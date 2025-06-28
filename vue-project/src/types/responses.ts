export interface Item {
  id: number;
  name: string;
  description: string;
  complite: boolean;
  imageUrl?: string | URL;
}

export type ItemsResponse = Item[];
