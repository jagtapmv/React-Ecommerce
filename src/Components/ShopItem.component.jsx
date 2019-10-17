import React from 'react';

import '../Styles/ShopItem.styles.scss';
import ItemContent from '../Components/ItemContent.component';

const ShopItem = ({id,title,items})=>(
    <div>
        <h1>{title}</h1>
        <div>
            {
                items.map(({id, ...otherItems})=>(
                    <div key = {id}><ItemContent {...otherItems} /></div>
                )
                )
            }
        </div>
    </div>
)

export default ShopItem;