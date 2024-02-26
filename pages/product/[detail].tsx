import { FetchAllDetails } from "@/api/Functions/function"
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useQuery } from "react-query"
import Link from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux-toolkit/ProuctSlice/ProductSlice";



export default function ProductDetails() {


    const router = useRouter()
    const { detail } = router.query;


   // const disPatch=useDispatch();

    const { data, isLoading } = useQuery({
        queryKey: ["Details"],
        queryFn: () => FetchAllDetails(Number(detail))

    });
    console.log("id ", data)







    return (
        <Card sx={{ maxWidth: 345 }}>
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
                <Button >
                  AddTOCART
                </Button>
           </CardContent>
      </Card>


    )
}