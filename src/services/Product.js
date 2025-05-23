export async function fetchProducts(page, categoryId) {
    const response = await fetch(`http://localhost:5090/api/v1/products/get-all-shop-right-products/${categoryId}/${page}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
};

export async function fetchSearchedProducts(page, search) {
    const response = await fetch(`http://localhost:5090/api/v1/products/get-searched-products/${search}/${page}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
}


export async function fetchSingleProducts(id) {
    const response = await fetch(`http://localhost:5090/api/v1/products/get-single-shop-right-products/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
}