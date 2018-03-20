import React from 'react';
export default
    class Input extends React.Component {
    render() {
        return (
            <div>
                <input id = "input1" type = "text" onChange = {this.props.inputHandler} />
                <input id = "input2" type = "text" onChange = {this.props.inputHandler}/>
            </div>
        )
    }
}