import React from 'react';
import './Item.css';
const imgPath = '../../assests/images/items/';

const importImg = (path) => {
  return require(`${imgPath+path}`);
}
const items = [
    { name: 'Veg Biryani', price: 200, images:['vlogo.png']}
];

function ProductList() {
  return (
    <section class="items">
        {items.map(item => (
                    <div class="item">
                    <img src={require('../../assests/images/items/'+item.images[0])} />
                    <div class="item-content">
                        Dosa
                    </div>
                </div>
        ))}
    </section>
  );
}

export default ProductList;
