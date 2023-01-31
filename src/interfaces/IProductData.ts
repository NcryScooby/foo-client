import { Product } from "../models/Product";

export interface IProductData {
  products: Product[];
  currentPage: number;
  totalPages: number;
}
