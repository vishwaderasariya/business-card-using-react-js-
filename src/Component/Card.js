import React, { Component } from 'react'
import Preview from './Preview';

export class Card extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ComapnyName:'',
             Email:'',
             Contact:'',
             website:''
        }
    }
    changeCompanyName = (event) =>
    {
        this.setState({
            ComapnyName : event.target.value
        })
    }
    changeemail =  (event) =>
    {
        this.setState({
            Email : event.target.value
        })
    }
    changenumber = (event) =>
    {
        this.setState({
            Contact : event.target.value
        })
    }
    changewebsite = (event) =>
    {
        this.setState({
            website : event.target.value
        })
    }
    changeAddress = (event) =>
    {
        this.setState({
            Address : event.target.value
        })
    } 
    render() {
        return (
            <div className='grid-container'>
                
                <form className='griditem1'>
                
                    <div>
                    <h2>Give your input here!!</h2>
                    <table>
                        <tr>
                            <td><label>Comapny Name:</label></td>
                            <td><input type='text' onChange={this.changeCompanyName}></input></td>
                        </tr>
                        <tr>
                            <td><label>Email ID:</label></td>
                            <td><input type='email' onChange={this.changeemail} pattern=".+@[a-z]{2,6}.[a-z]{3}"></input></td>
                        </tr>
                        <tr>
                            <td><label>Contact Number:</label></td>
                            <td><input type='tel' onChange={this.changenumber} pattern="[0-9]{3}[0-9]{3}[0-9]{4}"required></input></td>
                        </tr>
                        <tr>
                            <td><label>Website:</label></td>
                            <td><input type='text' onChange={this.changewebsite}></input></td>
                        </tr>
                        <tr>
                            <td><label>Address:</label></td>
                            <td><textarea rows='2' cols='20' onChange={this.changeAddress}></textarea></td>
                        </tr>       
                    </table>                           
                    </div>
                </form>
                <Preview ComapnyName={this.state.ComapnyName} 
                Address={this.state.Address}
                website={this.state.website}
                Contact={this.state.Contact}
                Email={this.state.Email}/>            
            </div>
        )
    }
    
}

export default Card
