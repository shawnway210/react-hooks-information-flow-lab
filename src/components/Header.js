import React from "react"
function Header({ onDarkModeClick, isDarkMode}){
    return (
      <button
      onClick={onDarkModeClick}>
      {isDarkMode ? "Dark" : "Light"} Mode
      </button>
      
    )
}
export default Header