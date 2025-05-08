export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    discount: number;
    rating: number;
    reviews: number;
    imageUrl: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Keyboard',
        brand: 'Razer',
        price: 1200,
        discount: 12,
        rating: 4.7,
        reviews: 34,
        imageUrl: ''
    },
    {
        id: 2,
        name: 'Headphones',
        brand: 'Razer',
        price: 1200,
        discount: 12,
        rating: 4.7,
        reviews: 42,
        imageUrl: ''
    },
    {
        id: 3,
        name: 'Mouse',
        brand: 'Razer',
        price: 1200,
        discount: 12,
        rating: 4.7,
        reviews: 29,
        imageUrl: ''
    },
    {
        id: 4,
        name: 'Gaming Chair',
        brand: 'Razer',
        price: 2500,
        discount: 10,
        rating: 4.5,
        reviews: 18,
        imageUrl: ''
    },
    {
        id: 5,
        name: 'Gaming Monitor',
        brand: 'Razer',
        price: 3200,
        discount: 15,
        rating: 4.8,
        reviews: 56,
        imageUrl: ''
    },
    {
        id: 6,
        name: 'Controller',
        brand: 'Razer',
        price: 900,
        discount: 8,
        rating: 4.6,
        reviews: 37,
        imageUrl: ''
    }
];