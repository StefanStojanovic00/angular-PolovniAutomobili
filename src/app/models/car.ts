import { Category } from "./category";
import { User } from "./user";

export interface Car {
    id: string;
    title: string;
    description: string;
    brand: string;
    engineSize: number;
    horsePower: number;  
    firstRegistration:number;  
    price: number;
    gallery: string[];
    category: Category;
    createdBy?: User;
    isSaved?: boolean;
  }