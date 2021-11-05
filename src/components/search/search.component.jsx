import React from "react";

import './search.style.css'

export const SearchBox=(props)=>{
        const {onHandlerChange,placeholder}=props
    return(
        <div >
        <input src="" className="search" type="search" 
        placeholder={placeholder}
        onChange={ onHandlerChange }
      />
        </div>
    )

}