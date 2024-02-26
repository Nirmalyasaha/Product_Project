import Wraper from "@/layout/Wrapper/Wrapper";
import { store } from "@/redux-toolkit/Store/Store";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { deflate } from "zlib";





export default function APP({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient
    return (


        <Provider store={store}>
        <Wraper>
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
        </Wraper>
        </Provider>
    )

}