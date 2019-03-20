import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footerleft">
                    <p>{this.props.number} items left</p>
                </div>
                <div className="footerright">
                    <p>All</p>
                    <p>Active</p>
                    <p>Completed</p>
                </div>
            </div>
        )
    }
}
