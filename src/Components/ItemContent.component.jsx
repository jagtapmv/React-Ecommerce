import React from 'react';

import '../Styles/ItemContent.styles.scss';

const ItemContent =({id, name, price, imageUrl})=>(
    <div className="itemLayout">
        <div
        className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
            
        }} />
        <div className="itemFooter">  
        <span className="itemName">{name}</span>
        <span className="itemPrice">{price}</span>
        </div>
    </div>
)

export default ItemContent;