export interface MenuData {
  id: string;
  groups: Group[];
}

export interface Group {
  sizes: Size[];
  id: string;
  name: string;
  description: string;
  price: number;
  items: Item[];
  modifiers: Modifier[];
  groups: Group[];
}

export interface Item {
  id: string;
  name: string;
  description: string;
  winery: string;
  location: string;
  price: number;
  calories: string;
  sizes?: Size[];
  type: string;
  volume: string;
  abv: string;
}

export interface Size {
  id: string;
  name: string;
  price: number;
}

export interface ModifierGroup {
  id: string;
  name: string;
  description: string;
  price: number;
  items: Item[];
}

export type Modifier = Item;
