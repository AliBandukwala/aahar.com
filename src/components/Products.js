import React, { Component } from 'react'
import Logo from '../img/Logo.png'

class Products extends Component{
state = {
    products: [
        {id: 1, title: 'Product 1', body: 'Lame product here, donot bye', img: Logo },
        {id: 2, title: 'Product 2', body: 'Lame product here, donot bye', img: Logo },
        {id: 3, title: 'Product 3', body: 'Lame product here, donot bye', img: Logo },
        {id: 4, title: 'Product 4', body: 'Lame product here, donot bye', img: Logo },
        {id: 5, title: 'Product 5', body: 'Lame product here, donot bye', img: Logo },
        {id: 6, title: 'Product 6', body: 'Lame product here, donot bye', img: Logo }
    ]
}

    render(){
        let productsList = this.state.products.length ? 
        (
            this.state.products.map(product => {
                 return(
                   <div className="card p-2 m-2 col-xl-3" key={product.id}>
                       <img  className="d-flex align-self-center" width="200" height="200" src={product.img} alt=""></img>
                       <div className="card-body">
                          <h4 className="card-title">{product.title}</h4>
                          <div className="card-text">{product.body}</div>
                       </div>
                   </div>
                )
           })
        ) : 
        (
               <div className="container text-center" style={{fontSize: 30}}> No posts yet! </div>
        )

        return(
            <div style={{backgroundColor: 'rgba(0,0,0,0.1)'}}> 
                <div className="Blogs row d-flex justify-content-around p-2">
                    {productsList}
                </div>  

                <div className="footer d-flex align-items-center justify-content-center" style={{backgroundColor:'#00415a', height:60}}>
                   <div className="text-white"> Fatema Bandukwala. All Rights Reserved | Developed by </div>
                   <div className="text-warning ml-1">IMD Corporation</div>
                 </div>

            </div>
        )
    }
}

export default Products