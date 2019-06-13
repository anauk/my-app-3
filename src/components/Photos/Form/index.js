import React, {Component} from 'react';

const Greetings=({first, last}) =><div>I am here {first} {last}</div>
const Image = ({src, alt}) => <img src={src} alt={alt}/>
class Form extends Component {
    state = {
        imgTitle: ''
    };
    changeImgTitle = (e) => {
        this.setState({
            imgTitle: e.target.value
        })
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.imgTitle);
        this.setState({
            imgTitle: ''
        })
    };

    render() {
        return (
            <form onSubmit={(e)=>this.onFormSubmit(e)}>
                <label>Upload img</label>
                <input type="text"
                       value={this.state.imgTitle}
                       onChange={(e) => this.changeImgTitle(e)}/>
                <button type="submit" disabled={this.props.fetching}>
                    ADD
                </button>
                <Greetings first="Vera" last="Samoilova"/>
                <Image src="data:image/jpeg;base64,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" alt="Love"/>
            </form>
        )
    }
}

export default Form;