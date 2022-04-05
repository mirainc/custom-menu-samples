export interface MenuData {
  id: string;
  groups: Group[];
}

export type Item = Record;
export type Modifier = Record;
export type Size = Record;

export interface Record {
  id: string;
  name: string;
  description: string;
  price: number;
  items: Item[];
  modifiers: Modifier[];
  tags: string[];
  inStock: boolean;
}

export interface Group extends Record {
  groups: Group[];
}
