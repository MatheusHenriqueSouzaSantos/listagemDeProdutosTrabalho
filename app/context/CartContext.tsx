import { createContext, useCallback, useMemo, useState } from "react";

export type Item={
    id: string,
    nome: string,
    preco:number
}

type Cart={
    itens: Item[],
    addToCart: (item: Item)=>void,
    cartTotal: number
}
//,removeItem: (item: Item)=>void
export const CartContext=createContext<Cart| null>(null);

export function CartProvider({children}:{children: React.ReactNode}){
    const [itens,setItens]=useState<Item[]>([]);

    const addToCart=useCallback((item: Item): void=>{
        setItens((prev)=>[...prev, item])
    },[])

    const cartTotal =useMemo(()=>{
        return itens.reduce((acumulator,item)=>acumulator+item.preco,0)
    },[itens])

    return(
        <CartContext.Provider value={{itens,addToCart,cartTotal}}>
            {children}
        </CartContext.Provider>
    );
}

