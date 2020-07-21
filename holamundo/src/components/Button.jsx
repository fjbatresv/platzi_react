import React, { Component } from 'react';

class Button extends Component {
    state = {
        count: 0
    };

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <h1>
                    Manzanas: { this.state.count }
                </h1>
                <button type="button" onClick={this.handleClick}>
                    Click
                </button>
            </div>
        );
    }
}

export default Button;
