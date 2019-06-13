import React, { Component } from 'react';
import Item from './Item';
class List extends Component{
    render(){
        return(<ul>
            {
                this.props.photos.map(photo=>{
                    return <Item
                        onDelete={this.props.onDelete}
                        key={photo.id}
                        photo={photo}/>
                })
            }
        </ul>)
    }
}
export default List;