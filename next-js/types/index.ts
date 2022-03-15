export interface MenuData {
  id: string;
  name: string;
  description: string;
  items: Item[];
}

export type Tag = string;
export interface Item {
  id: string;
  name: string;
  description: string;
  calories: string;
  price: string;
  tags: Tag[];
}
