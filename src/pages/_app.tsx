import { ChakraProvider } from '@chakra-ui/react'


// styles
import { theme } from '@/styles/theme/theme';

// Import Splide styles
import '@splidejs/react-splide/css';

import "../styles/globals.scss";

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/apollo/client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
