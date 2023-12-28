import createGlobalStyle from "styled-components"

 export const Styling=createGlobalStyle.h1`
color:${(props)=>props.outline?"red":"green"}`
