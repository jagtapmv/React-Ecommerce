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
                title: "HATS",
                linkUrl: 'hats'
            },
            {
                id:2,
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                title: "JACKETS",
                linkUrl: ''
            },
            {
                id:3,
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                title: "SNEAKERS",
                linkUrl: ''
            },
            {
                id:4,
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                title:"MENS",
                size: "large",
                linkUrl: ''
            },
            {
                id:5,
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                title: "WOMENS",
                size: "large",
                linkUrl: ''
            }
        ]
    }
    }

    render(){
        return(
            <div className="directory-menu">
                {this.state.section.map(({id, ...otherSectionProps})=>

                <MenuItem key={id} {...otherSectionProps} />)}

            </div>
        )
    }
}

export default DirectoryMenu;