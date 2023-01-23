export type Product = {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: [
    {
      _id: string;
      name: string;
      icon: string;
    }
  ];
  category: string;
};
