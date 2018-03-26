import React, {Component} from 'react';
import axios from 'axios';

class Browsingview extends Component{
    constructor(){
        super();
        this.state = {
            menu: []
        };
    }
        componentDidMount(){
            axios.get('/api/getMenu').then(resp =>  this.setState({menu: resp.data}))
        }
    

    render(){
        const {menu} = this.state;
        const menuItems = menu.map((curr, i) =>{
           return <h1 key={i}>{curr.item}</h1>
        })
        return(
            <div>
            <div className = 'sidebar'>Menu Cart</div>
            <section className = 'menu'>
               <h1> Menu</h1>
             {menuItems}
            </section>
            </div>
        )
    }
}

export default Browsingview;