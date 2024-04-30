import'../css/orderpage.css'
import {useStore} from "../data/store.js"






const Orderpage=()=>{

	const cartItems = useStore(state => state.cartItems)

	return(
		
		
		<div className="order-page-container">

			{cartItems.map((cartItems, index) => (
              <div className="selected-product-container" key={index}>
                <div className='selected'>
                  <div className='cart-name'>
                    <h3>{cartItems.name}</h3>
                    <p className="cart-price">{cartItems.price} kr</p>
                  </div>
                </div>
              </div>
            ))}

			<div className ="total">
			<p>Totalt: {cartItems.reduce((total, item) => total + parseFloat(item.price), 0)} kr</p>


			</div>
			
	
		</div>
		
        

		
		


	)
}


export default Orderpage