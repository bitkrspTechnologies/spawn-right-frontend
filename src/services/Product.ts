// export interface Product {
//     id: string;
//     name: string;
//     brand: string;
//     price: number;
//     discount: number;
//     rating: number;
//     reviews: number;
//     imageUrl: string;
//     // Add other fields as per your API response
// }

export async function fetchProducts(page) {
    const response = await fetch(`http://localhost:5090api/v1/products/get-all-shop-right-products/${page}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
}


export async function fetchSingleProducts(id) {
    const response = await fetch(`http://localhost:5090api/v1/products/get-single-shop-right-products/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
}