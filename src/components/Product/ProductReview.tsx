import CustomerReview from "./CustomerReview";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Heading, Text } from "@chakra-ui/react";

const ProductReview = () => {
  return (
    <Box mb={8}>
      <Heading as='h4' size='md' fontWeight={'semibold'} mb={4}>Customer Reviews</Heading>
      <Box>
        <CustomerReview name={'Kenneth'} datePublished={'10/29/2021'} message={'receive the keyboard and working fine also RGB light was good maayos naman at walang problema sa keyboard maraming salamat easypc'} />
        <CustomerReview name={'Ken'} datePublished={'10/29/2021'} message={'Thank you!'} />
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Only registered users can write reviews.</AlertTitle>
          <AlertDescription>Please <Text as={'span'} color={'crimsonRed.500'} cursor={'pointer'}>Sign In</Text> or <Text as={'span'} color={'crimsonRed.500'} cursor={'pointer'}>Create an account</Text></AlertDescription>
        </Alert>
      </Box>
    </Box>
  );
};

export default ProductReview;
