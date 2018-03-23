import React, {Component} from 'react';
import axios from 'axios';

class browsingview extends Component{
    constructor(){
        super();
        this.state = {
            menu: []
        };
    }
        componentDidMount(){
            axios.get('/api/getMenu').then(response =>{
                console.log(response)
                this.setState({menu: response.data});
            })
        }
    

    render(){
        return(
            <div>
            <div className = 'sidebar'>Menu
            Cart</div>
            <section className = 'menu'>
                Menu
            </section>
            </div>
        )
    }
}

export default browsingview;