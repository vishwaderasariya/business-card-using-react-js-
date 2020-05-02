import React, { Component } from 'react'

export class Preview extends Component {
    render() {
        return (
            <div style={{background:'darkkhaki'}}> 
                <div className='griditem2'>
                <h2>Preview</h2>
                <div className='card1'>
                <p></p>
                <p className='card1text'>{this.props.ComapnyName}</p>
                <p></p>
                <p></p>
                <p className='card1text'>{this.props.website}</p>
                </div>
                <div className='card2'>
                <p>{this.props.Email}</p>
                <p>{this.props.Address}</p>
                <p>{this.props.Contact}</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Preview
