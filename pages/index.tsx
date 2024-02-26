import { ALLProductInterFace, Products } from "@/InterFace/interface";
import { FetchProduct } from "@/api/Functions/function"
import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query"
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux-toolkit/ProuctSlice/ProductSlice";
import { ProductInterFace } from "@/redux-toolkit/InterFace/productInterFace";




export default function Index() {


    
  
    const { data, isLoading, error } = useQuery({
        queryKey: ["Product"],
        queryFn: FetchProduct
    });
    console.log("all product data ", data)

// const handleADD=()=>{
//     disPatch(addToCart())



    return (
        <Container>
            <Grid container spacing={2}>
                {data?.map((item: Products) => (
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image={item.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.price}
                                </Typography>

                            </CardContent>
                            <Button>
                                <Link href={`/product/${item.id}`}>Details</Link>
                            </Button>

                            {/* <Button onClick={()=>handleADD()}>
                                Add to Cart
                            </Button> */}

                        </Card>
                    </Grid>
                ))}
                ;

            </Grid>
        </Container>

    )
                        }
                        