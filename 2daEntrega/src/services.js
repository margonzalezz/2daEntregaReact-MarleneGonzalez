const products = [
    {id: "1", name: "Avocado toast", price: 4200, category: "desayunos"},
    {id: "2", name: "Bowl saludable", price: 2870, category: "desayunos"},
    {id: "3", name: "Bruschettas", price: 3550, category: "desayunos"},
    {id: "4", name: "Carrot Cake ", price: 2100, category: "desayunos"},
    {id: "5", name: "Croissant ", price: 1600, category: "desayunos"},
    {id: "6", name: "Red Velvet ", price: 1740, category: "desayunos"},
    {id: "7", name: "Cafe de Brasil", price: 5700,category: "especialidad"},
    {id: "8", name: "Cafe de Nicaragua", price: 8420,category: "especialidad"},
    {id: "9", name: "Cafe chocolate", price: 4190,category: "especialidad"},
    {id: "10", name: "Cafe de Colombia", price: 5900,category: "especialidad"},
    {id:"11", name: "Café del día", price: 1000, category: "promos"},
    {id:"12", name: "Coffe Time", price: "2x1", category: "promos"},
    {id:"13", name: "Lunes cafeteros", price: "50% OFF", category: "promos"},
    {id:"14", name: "Café del día con 2 croissants", price: 3100, category: "promos"}
]

//getProduct
export const getProduct = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            const product = products.find( p => p.id == id)

            if (product) {
                resolve(product)
            } else {
                reject("No exite el producto")
            }
        }, 1000)
    })
}

//getProducts

export const getProducts = (category) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const productsFiltered = category ? products.filter (product => product.category == category) : products;

            resolve(productsFiltered);
        },1000);
    })
}


