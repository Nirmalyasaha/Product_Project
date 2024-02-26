import { Box } from "@mui/material"
import Header from "../header"




interface HeaderProp{
    children:React.ReactNode
}

const Wraper=(props:HeaderProp)=>{
    const {children}=props

    return (
        <Box><Header/>{children}</Box>
    )
}

export default Wraper