import React from 'react';

import MenuItem from './MenuItem.component';
import '../Styles/directory-menu.styles.scss';

class DirectoryMenu extends React.Component{
    constructor(){
        super();
        this.state = {
            section:[
            {
                id:1,
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                title: "HATS"
            },
            {
                id:2,
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                title: "JACKETS"
            },
            {
                id:3,
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                title: "SNEAKERS"
            },
            {
                id:4,
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                title:"MENS",
                size: "large"
            },
            {
                id:5,
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                title: "WOMENS",
                size: "large"
            }
        ]
    }
    }

    render(){
        return(
            <div className="directory-menu">
                {this.state.section.map(({id, title, imageUrl, size})=>
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)}
            </div>
        )
    }
}

export default DirectoryMenu;