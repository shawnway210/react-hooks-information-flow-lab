import React from "react"
function Filter({selectedCategory, onCategoryChange}){
    return(
       <select value={selectedCategory} onChange={(e)=> onCategoryChange(e.target.value)}>
        </select>
         )
}
export default Filter