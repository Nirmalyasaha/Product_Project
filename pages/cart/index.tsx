import { Products } from "@/InterFace/interface"
import { useappDisPatch } from "@/hooks/UseAppDispatch/useAppDispatch"
import { useAppSelector } from "@/hooks/UseAppSelector/useappSelector"
import { removeCart } from "@/redux-toolkit/ProuctSlice/ProductSlice"
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useSelector } from "react-redux"





export default function Cart(){

    const cartItems=useAppSelector((state)=>state?.cartSlice)
    console.log("Cart itmes",cartItems)
    
    const dispatch=useappDisPatch();
    return(       
        <>
        <h1>Cart Page</h1>
    
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>TITLE</TableCell>
                        <TableCell>PRICE</TableCell>
                        <TableCell>ACTIONS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {cartItems?.items.map((prod,indx)=>(

                   <TableRow key={indx}>
                        <TableCell>{prod.id}</TableCell>
                        <TableCell>{prod.title}</TableCell>
                        <TableCell>{prod.price}</TableCell>
                        <TableCell><Button onClick={()=>dispatch(removeCart(prod.id))}>REMOVE</Button></TableCell>

                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        
        </>
    )
}