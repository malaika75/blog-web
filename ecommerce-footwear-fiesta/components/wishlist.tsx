import React from 'react'
import { useState } from 'react'
import { createContext , useContext } from 'react'
import productDetails from './productDetails'

const wishlistContext = createContext([])
export const wishlistProvider = ({children}:{children: React.ReactNode})=>{
    const [wishlist , setwishlist] = useState<any>([])

  const addToWishlist = (product: typeof productDetails) => {
    setwishlist([...wishlist, product]);
  };}
function Wishlist() {
  
return (
    
    <wishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </wishlistContext.Provider>
    
  )
}

export default Wishlist
export const useWishlist = () => {
  return useContext(wishlistContext);}