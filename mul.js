import React from 'react';
export default
    class Mult extends React.Component {
    render() {
        console.log(this.props);
        const { x, y } = this.props;
        /* is equal to
        const x = this.x;
        const y = this.y;
         */
        return (
            <div class="sum">
                <p>
                    {Number(x) * Number(y)}
                </p>
            </div>
        )
    }
}