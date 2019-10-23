import React from 'react';

import SHOP_DATA from '../Assets/ShopData';
import ShopItem from '../Components/ShopItem.component';
import '../Styles/ShopPage.styles.scss';

class ShopPage extends React.Component{
    constructor(){
        super();
        this.state={
            shopData: SHOP_DATA
        };
    }

    render(){
        const {shopData} = this.state;
        return(
            <div className="mainLayout"> 
                {shopData.map(({id, ...otherShopData})=>
                   <div key = {id}> <ShopItem  id={id} {...otherShopData} /> </div>)}
                
            </div>
        );
    }
}


export default ShopPage;