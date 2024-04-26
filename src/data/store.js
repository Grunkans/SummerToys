import { create } from 'zustand'

// set, create

const useStore = create(set => ({
	products: [],

	setProducts: (newProducts) => set ({
		products: newProducts
	}),
	// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),

	// addProduct: products => set(state => ({
	// 	products: [ ...state.products, products ]
	// }))
}))


export { useStore }