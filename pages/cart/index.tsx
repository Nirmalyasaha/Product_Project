import { Products } from "@/InterFace/interface"
import { useappDisPatch } from "@/hooks/UseAppDispatch/useAppDispatch"
import { useAppSelector } from "@/hooks/UseAppSelector/useappSelector"
import { removeCart } from "@/redux-toolkit/ProuctSlice/ProductSlice"
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useSelector } from "react-redux"





export default function Cart() {

    const cartItems = useAppSelector((state) => state?.cartSlice)
    console.log("Cart itmes", cartItems)

    const dispatch = useappDisPatch();

    // const getTotalPrice = () => {
    //     return cartItems.items.reduce()
        
    // }


    return (
        <>
            <Typography sx={{textAlign:"center",margin:"20px auto",fontSize:"40px"}}>View Cart Page</Typography>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: "red" }}>Id</TableCell>
                            <TableCell sx={{ color: "red" }}>TITLE</TableCell>
                            <TableCell sx={{ color: "red" }}>PRICE</TableCell>
                            <TableCell sx={{ color: "red" }}>ACTIONS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems?.items.map((prod, indx) => (

                            <TableRow key={indx}>
                                <TableCell sx={{ color: "green" }}>{prod.id}</TableCell>
                                <TableCell sx={{ color: "green" }}>{prod.title}</TableCell>
                                <TableCell sx={{ color: "green" }}>{prod.price}</TableCell>
                                <TableCell><Button onClick={() => dispatch(removeCart(prod.id))}>REMOVE</Button></TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}