import { ALLProductInterFace, Products } from "@/InterFace/interface";
import { FetchProduct } from "@/api/Functions/function"
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Rating, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useQuery } from "react-query"
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux-toolkit/ProuctSlice/ProductSlice";
import { ProductInterFace } from "@/redux-toolkit/InterFace/productInterFace";
import { useappDisPatch } from "@/hooks/UseAppDispatch/useAppDispatch";
import { toast } from "sonner";
import styles from "@/styles/product.module.css"
import Link from "next/link";




export default function Index({ item }: { item: Products }) {


    const dispatch = useappDisPatch();
    const { data, isLoading, error } = useQuery({
        queryKey: ["Product"],
        queryFn: FetchProduct
    });
    console.log("all product data ", data)




    return (


        <Container>     
            <Grid container spacing={2} >
                {data?.map((item: Products, index: number) => (
                    <Grid item xs={3}   >
                        <Card className={styles.cardMain}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={item.image}
                                className={styles.IMGmain}
                              
                            />
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" className={styles.TitleText} >
                                    {item.title.slice(0, 20)}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.price}
                                </Typography>
                                <Rating value={item.rating.rate} precision={0.5} />
                            </CardContent>                           
                            <CardActions className={styles.Btn_Main}>
                                <Button variant="contained" className={styles.Btn1} >
                                    <Link  href={`/product/${item.id}`} >Details</Link>
                                </Button>   
                                 <Button 
                                variant="contained" 
                                onClick={() => dispatch(addToCart({...item}))} 
                                className={styles.Btn1}> 
                                 <Link href={"/cart"}>AddToCart</Link>
                                </Button>
                                </CardActions>
                          
                        </Card>
                    </Grid>
                ))}


            </Grid>
        </Container>

    )
}
