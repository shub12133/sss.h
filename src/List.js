import React from 'react';



class List extends React.Component{

   render(){
       console.log("List" , this.props)
       return(
            <div>
                <center>Products List</center>
                {this.props.productList.map((product,index)=> {
                    return(
                    <div key={index}>
                        {product.name}-{product.qty}-{product.price}
                    </div>
                ) 
                })}
                <hr/>
                {this.props.productList.map((product,index)=>(
                    <div key={index}>
                         {product.name}-{product.qty}-{product.price}
                    </div>
                ))}
            </div>
       )
   }
}

export default List