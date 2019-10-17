import React from 'react';

import '../Styles/ShopCategory.styles.scss';

import SHOP_DATA from '../Assets/ShopData';
import ShopItem from './ShopItem.component';

class ShopCategory extends React.Component{
    constructor(){
        super();
        this.state={
            shopData: SHOP_DATA
        };
    }

    render(){
        const {shopData} = this.state;
        return(
            <div >
                {shopData.map(({id, ...otherShopData})=>
                   <div key = {id}> <ShopItem  id={id} {...otherShopData} /> </div>)}
                
            </div>
        );
    }
}

export default ShopCategory;