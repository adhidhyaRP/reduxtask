import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:
    [
        {
          id: 1,
          title: "iPhone 9",
          description: "An apple mobile which is nothing like apple",
          price: 549,
          discountPercentage: 12.96,
          quantity: 0,
          thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          images: "https://th.bing.com/th/id/OIP.nLi2A0Beu5RPL7TTAaH2mQHaHa?rs=1&pid=ImgDetMain",
        }
      ]
}

const Cartslice = createSlice({
    name : 'cart',
    initialState,
    reducers :{
        incrementquantity : (state,action)=>{
            const items = state.items.find((val)=>val.id==action.payload)
            items.quantity += 1
        },
        decrementquantity :(state,action)=>{
            const items = state.items.find((val)=>val.id==action.payload) 
            if(items.quantity > 0){
                items.quantity -= 1
            }
    }
}
});

export const {incrementquantity,decrementquantity} = Cartslice.action

export default Cartslice.reducer;