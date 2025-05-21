import axios from 'axios';

const API_BASE_URL = 'http://localhost:5090/api/v1';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    // Add other product fields as needed
}

export const getProducts = async (): Promise<Product[]> => {
    const response = await axios.get(`${API_BASE_URL}/products/get-all-shop-right-products`);
    return response.data;
}; 