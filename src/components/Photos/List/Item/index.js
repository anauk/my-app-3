import React, {Component} from 'react';

class Item extends Component {

    handleClick = () => {
        if (window.confirm('Are you sure to delete photo')) {
            this.props.onDelete(this.props.photo.id)
        }
    };

    render() {
        const {photo} = this.props;
        console.log(this.props);
        return (
            <li key={photo.id}><img src={photo.src}
                alt={photo.name}/>
                <button onClick={() => this.handleClick()}>
                    DELETE
                </button>
            </li>
        )
    }
}

export default Item;