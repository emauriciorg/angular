export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    images :string[];
  }
  
  export const products = [
    {
      id: 1,
      name: 'Osciloscopio',
      price: 115000,
      description: 'Osciloscipio Portable',
      images : ['1.jpeg','2.jpeg']
    },
    {
      id: 2,
      name: 'Protoboard',
      price: 11000,
      description: 'Protoboad de 800 puntos',
      images : ['1.jpeg','2.jpeg']

    },
    {
      id: 3,
      name: 'Cautin',
      price: 52000,
      description: 'Cautin con temperatura Variable',
      images : ['1.jpeg','2.jpeg']
    }
  ];
  
