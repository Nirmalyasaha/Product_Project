import { FetchAllDetails } from "@/api/Functions/function"
import { Button, Card, CardContent, CardMedia, Container, Grid, Rating, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useQuery } from "react-query"
import {Link} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux-toolkit/ProuctSlice/ProductSlice";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";




export default function ProductDetails() {


    const router = useRouter()
    const { detail } = router.query;

    const disPatch=useDispatch();

    const { data, isLoading } = useQuery({
        queryKey: ["Details"],
        queryFn: () => FetchAllDetails(Number(detail))
    });
    console.log("id ", data)



// const handleCart=()=>{
//     disPatch(addToCart(id))}





    return (

<Container>

        <Grid container spacing={2} sx={{marginTop:"20px"}}>
            <Grid item xs={6}>
            <CardMedia
                sx={{ height: "400px",width:"400px" }}
                image={data?.image}
            />
         
             </Grid>
           <Grid item xs={6}>  

              <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"30px"}} >
                    {data?.title}
                </Typography>
                <Typography>
                    {data?.price}
                </Typography>
                <Rating value={data?.rate} precision={0.5} />
                <Typography variant="body2" color="text.secondary" sx={{fontSize:"20px"}}>
                    {data?.description}  
                </Typography>
             </Grid>
             </Grid>

    
    
    
    
    
        {/* <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: "300px" }}
                image={data?.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data?.title}
                    {data?.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data?.description}  
                </Typography>
           </CardContent>
      </Card> */}
      </Container>

    )
}