import { ALLProductInterFace, Products } from "@/InterFace/interface";
import { FetchProduct } from "@/api/Functions/function"
import { Button, Card, CardContent, CardMedia, Container, Grid, Rating, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query"
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux-toolkit/ProuctSlice/ProductSlice";
import { ProductInterFace } from "@/redux-toolkit/InterFace/productInterFace";
import { useappDisPatch } from "@/hooks/UseAppDispatch/useAppDispatch";
import { toast } from "sonner";




export default function Index({ item }: { item: Products }) {


    const dispatch = useappDisPatch();

    const { data, isLoading, error } = useQuery({
        queryKey: ["Product"],
        queryFn: FetchProduct
    });
    console.log("all product data ", data)




    return (
        <Container>
            <Grid container spacing={2}>
                {data?.map((item: Products, index: number) => (
                    <Grid item xs={3} >
                        <Card sx={{ Width: 250 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="400"
                                width="100px"
                                image={item.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.price}
                                </Typography>
                                <Rating value={item.rating.rate} precision={0.5} />
                            </CardContent>
                            <Button >
                                <Link href={`/product/${item.id}`}>Details</Link>
                            </Button>
                            <Button variant="contained" onClick={() => dispatch(addToCart({ ...item }))}>

                                <Link href={"/cart"}>AddtoCArt</Link>
                            </Button>
                        </Card>
                    </Grid>
                ))}
                ;

            </Grid>
        </Container>

    )
}
