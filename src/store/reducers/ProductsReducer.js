const initState = {
    products: [
        {id: 1, name: 'High Ankle Nike Shoes', image: '1.jpg', price: 599, discount: 2, discountPrice: 599  - 2 / 100 * 599, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 2, name: 'Apple Macbook', image: '2.jpg', price: 400, discount: 5, discountPrice: 400  - 5 / 100 * 400, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 3, name: 'Brainstorm Headphones', image: '3.jpg', price: 200, discount: 3, discountPrice: 200  - 3 / 100 * 200, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 4, name: 'Playstation 5', image: '4.jpg', price: 999, discount: 4, discountPrice: 999  - 4 / 100 * 999, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 5, name: 'Acer Desktop', image: '5.jpg', price: 299, discount: 2, discountPrice: 299  - 2 / 100 * 299, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 6, name: 'Weight Plates', image: '6.jpg', price: 60, discount: 6, discountPrice: 60  - 6 / 100 * 60, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 7, name: 'Dumbbells', image: '7.jpg', price: 35, discount: 2, discountPrice: 35  - 2 / 100 * 35, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 8, name: 'Jeans', image: '8.jpg', price: 80, discount: 7, discountPrice: 80  - 7 / 100 * 80, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 9, name: 'Summer Clothing', image: '9.jpg', price: 95, discount: 4, discountPrice: 95  - 4 / 100 * 95, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},        
        {id: 10, name: 'Female Winter Clothing', image: '10.jpg', price: 120, discount: 3, discountPrice: 120  - 3 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},        
        {id: 11, name: 'Kar98 Rifle', image: '11.jpg', price: 999, discount: 3, discountPrice: 999  - 3 / 100 * 999, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},        
        {id: 12, name: 'M16 Machine Gun ', image: '12.jpg', price: 1500, discount: 10, discountPrice: 1500  - 10 / 100 * 1500, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},        

    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;