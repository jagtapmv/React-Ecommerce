import React from 'react';

import '../Styles/ShopItem.styles.scss';
import ItemContent from '../Components/ItemContent.component';

const ShopItem = ({id,title,items})=>(
    <div className="mainLayout"> 
        <h2 className="title">{title.toUpperCase()}</h2>
        <div className="categoryLayout"> 
            {
                items.filter((item,idx)=>idx<4).map(({id, ...otherItems})=>(
                    <ItemContent key = {id} {...otherItems} />
                )
                )
            }
        </div>
    </div>
)

export default ShopItem;