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
        },300);
    })

    return await promise;
}