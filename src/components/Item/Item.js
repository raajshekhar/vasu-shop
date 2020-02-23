import React from 'react';
import './Item.css';
// const imgPath = '../../assests/images/items/';

// const importImg = (path) => {
//   return require(`${imgPath+path}`);
// }
const items = [
    { name: 'Food Items', price: 200, images:['vlogo.png']},
    { name: 'Chai Boy', price: 200, images:['vlogo.png']}
];

function ProductList() {
  return (
    <section className="items">
        {items.map(item => (
                    <div key={item.name} className="item">
                    <img src={require('../../assests/images/items/'+item.images[0])} alt={item.name} />
                    <div className="item-content">
                        {item.name}
                    </div>
                </div>
        ))}
    </section>
  );
}

export default ProductList;
