import shirtWhite from "@/assets/shirt-white.jpg";
import jeansBlue from "@/assets/jeans-blue.jpg";
import jacketBlack from "@/assets/jacket-black.jpg";
import sneakersWhite from "@/assets/sneakers-white.jpg";

export interface ClothingItem {
  id: string;
  name: string;
  category: 'tops' | 'bottoms' | 'outerwear' | 'shoes' | 'accessories';
  color: string;
  brand?: string;
  image: string;
  tags: string[];
  addedDate: Date;
}

export interface Outfit {
  id: string;
  name: string;
  items: ClothingItem[];
  occasion: string;
  createdDate: Date;
}

export const sampleClothingItems: ClothingItem[] = [
  {
    id: '1',
    name: 'Classic White Shirt',
    category: 'tops',
    color: 'white',
    brand: 'Premium',
    image: shirtWhite,
    tags: ['formal', 'classic', 'versatile'],
    addedDate: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Dark Blue Jeans',
    category: 'bottoms',
    color: 'blue',
    brand: 'Denim Co',
    image: jeansBlue,
    tags: ['casual', 'everyday', 'comfortable'],
    addedDate: new Date('2024-01-20')
  },
  {
    id: '3',
    name: 'Black Leather Jacket',
    category: 'outerwear',
    color: 'black',
    brand: 'Urban Style',
    image: jacketBlack,
    tags: ['edgy', 'cool', 'statement'],
    addedDate: new Date('2024-02-01')
  },
  {
    id: '4',
    name: 'White Sneakers',
    category: 'shoes',
    color: 'white',
    brand: 'Comfort+',
    image: sneakersWhite,
    tags: ['casual', 'comfortable', 'sporty'],
    addedDate: new Date('2024-02-10')
  }
];