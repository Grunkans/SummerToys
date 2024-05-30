import { create } from 'zustand'
import { useState } from 'react';

// set, create

const useStore = create(set => ({
	products: [],

	setProducts: (newProducts) => set ({
		products: newProducts
	}),

	cartItems: [],
	addCartItems: (item) => set(state => ({
		cartItems: [...state.cartItems, item]
	})),

	clearItems: () => set({
		cartItems: []
	  }),


	

	
	// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),

	// addProduct: products => set(state => ({
	// 	products: [ ...state.products, products ]
	// }))

	
}))





  



export { useStore, }