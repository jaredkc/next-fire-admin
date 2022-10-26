import { Timestamp } from "firebase/firestore";

export interface Product {
  description: string;
  price: number;
  sku: string;
  title: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
