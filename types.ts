export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'froyo' | 'smoothie' | 'topping';
  calories: number;
}

export interface FlavorRecommendation {
  name: string;
  description: string;
  ingredients: string[];
  funFact: string;
}

export enum ViewState {
  HOME = 'HOME',
  MENU = 'MENU',
  WIZARD = 'WIZARD'
}