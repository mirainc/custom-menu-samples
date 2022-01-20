export interface MenuData {
  id: string;
  groups: Group[];
}

export interface Group {
  sizes: Size[];
  id: string;
  name: string;
  description: string;
  price: string;
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
  price: string;
  calories: string;
  sizes: Size[];
}

export interface Size {
  id: string;
  name: string;
  price: string;
}

export interface ModifierGroup {
  id: string;
  name: string;
  description: string;
  price: string;
  items: Item[];
}

export type Modifier = Item;
