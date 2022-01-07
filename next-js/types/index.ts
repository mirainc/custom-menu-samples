export interface MenuData {
  id: string;
  groups: Group[];
}

export interface Group {
  id: string;
  name: string;
  description: string;
  price: string;
  items: Item[];
  modifierGroups: ModifierGroup[];
}

export interface Item {
  id: string;
  name: string;
  description: string;
  price: string;
  calories: string;
}

export interface ModifierGroup {
  id: string;
  name: string;
  description: string;
  price: string;
  items: Item[];
}
