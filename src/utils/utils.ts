import {IProduct} from "../store/models/IProduct";

export const scrollToUp = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Имитация обращения к серверу
export async function fetchProductsImitation() {
    const promise = new Promise((res) => {
        setTimeout(() => {
            const json = localStorage.getItem('productItems');
            if (json) {
                const data = JSON.parse(json);
                res(data);
            }
        },500);
    })

    return await promise;
}

export function setDefaultProductsSort(products: IProduct[]) {
    return  [...products].sort((a, b) => a.price - b.price)
}