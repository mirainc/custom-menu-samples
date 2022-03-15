export interface MenuData {
  id: string;
  name: string;
  description: string;
  items: Record[];
  groups: Record[];
}

export type Tag = string;
export interface Record {
  id: string;
  name: string;
  description: string;
  calories: string;
  price: string;
  tags: Tag[];
  items: Record[];
  groups: Record[];
}
