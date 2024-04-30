import'../css/orderpage.css'
import {useStore} from "../data/store.js"






const Orderpage=()=>{

	const cartItems = useStore(state => state.cartItems)

	return(
		
		
		<div className="order-page-container">

			{/* {orderedItems.map((item, index) => (
              <div className="selected-product-container" key={index}>
                <div className='selected'>
                  <div className='name-price'>
                    <h3>{item.name}</h3>
                    <p className="price">{item.price} kr</p>
                  </div>

                  <div className='delete-conatiner'>
                  <button className='cart-delete-btn' onClick={() => deleteOrderedItem(item.id)}>
                    <img src={Delete} alt='delete icon' />
                  </button>

                  </div>
                  


                </div>
              </div>
            ))} */}
			
			{/* <p className="name">{cartItems.name} kr</p> */}




			{/* <div className="order-container">hej {cartItems.map}</div> */}
			

		
		</div>
		


	)
}


export default Orderpage