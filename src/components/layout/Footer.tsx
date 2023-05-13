import { MdNavigation, MdLocalPhone, MdOutlinePhoneAndroid } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Box, Container, Flex, Heading, Input, InputGroup, InputRightElement, Text, Button, Grid, GridItem, Icon } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box bgColor={'stoneBlue.500'}>
      <Container maxW="1250px" mx={'auto'} py={8}>
        <Flex justifyContent={'space-between'} alignItems={'center'} mb={8}>
          <Box>
            <Heading as='h2' size='2xl' color={'crimsonRed.500'} fontWeight={'bold'} mb={'2'}>
              Sign up for newsletter
            </Heading>
            <Text color={'white'} fontSize={'sm'}
            >
              Get news about latest tech out in market and more just to be updated in tech world!
            </Text>
          </Box>
          <Box>
            <InputGroup size='lg'>
              <Input type={'text'} placeholder='Enter your email address here' pr='4.5rem' bg={'white'} htmlSize={30} width='auto' borderRadius={10}
              />
              <InputRightElement width='4.5rem'>
                <Button size='lg' colorScheme="crimsonRed">
                  Submit
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
        <Grid templateColumns={'repeat(5, 1fr)'} color={'white'}>
          <GridItem>
            <Text fontWeight={'bold'} mb={4} >Store Information</Text>
            <Text fontSize={'sm'} display={'flex'} alignItems={'center'} mb={4}>
              <Icon as={MdNavigation} boxSize={25} color={'crimsonRed.500'} mr={2} />
              Angeles City, Pampanga Philippines
            </Text>
            <Text fontSize={'sm'} display={'flex'} alignItems={'center'} mb={4}>
              <Icon as={MdLocalPhone} boxSize={25} color={'crimsonRed.500'} mr={2} />
              331-1754
            </Text>
            <Text fontSize={'sm'} display={'flex'} alignItems={'center'} mb={4}>
              <Icon as={MdOutlinePhoneAndroid} boxSize={25} color={'crimsonRed.500'} mr={2} />
              09997418529
            </Text>
            <Text fontSize={'sm'} display={'flex'} alignItems={'center'} mb={4}>
              <Icon as={AiOutlineClockCircle} boxSize={25} color={'crimsonRed.500'} mr={2} />
              <>
                <Text as={'span'}>Mon - Sat: 9AM to 7PM</Text>
                <br />
                <Text as={'span'}>Sun: 9AM to 5PM</Text>
              </>
            </Text>
          </GridItem>
          <GridItem>
            <Text fontWeight={'bold'} mb={3}>Navigation</Text>
            <Text fontSize={'sm'} display={'flex'} alignItems={'center'} mb={4}>Computers</Text>
            <Text
              fontSize={'sm'}
              display={'flex'}
              alignItems={'center'}
              mb={4}
            >Component</Text>
            <Text
              fontSize={'sm'}
              display={'flex'}
              alignItems={'center'}
              mb={4}
            >Peripherals</Text>
            <Text
              fontSize={'sm'}
              display={'flex'}
              alignItems={'center'}
              mb={4}
            >Net Devices</Text>
            <Text
              fontSize={'sm'}
              display={'flex'}
              alignItems={'center'}
              mb={4}
            >Accessories</Text>
            <Text
              fontSize={'sm'}
              display={'flex'}
              alignItems={'center'}
              mb={4}
            >Gadgets</Text>
          </GridItem>
          <GridItem>
            <Text
              fontWeight={'bold'}
              mb={3}
            >Customers</Text>
            <Text
              fontSize={'sm'}
              display={'flex'}
              alignItems={'center'}
              mb={4}
            >Buyer</Text>
            <Text
              fontSize={'sm'}
              display={'flex'}
              alignItems={'center'}
              mb={4}
            >Supplier</Text>
          </GridItem>
          <GridItem>
            <Text
              fontWeight={'bold'}
              mb={3}
            >Company</Text>
            <Text
              fontSize={'sm'}
              display={'flex'}
              alignItems={'center'}
              mb={4}
            >About Us</Text>
            <Text
              fontSize={'sm'}
              display={'flex'}
              alignItems={'center'}
              mb={4}
            >Contact Us</Text>
          </GridItem>
          <GridItem>
            <Text
              fontWeight={'bold'}
              mb={3}
            >Further Information</Text>
            <Text
              fontSize={'sm'}
              display={'flex'}
              alignItems={'center'}
              mb={4}
            >Terms and Condition</Text>
            <Text
              fontSize={'sm'}
              display={'flex'}
              alignItems={'center'}
              mb={4}
            >Privacy Policy</Text>
            <Text
              fontSize={'sm'}
              display={'flex'}
              alignItems={'center'}
              mb={4}
            >Laws</Text>
          </GridItem>
        </Grid>
        <Box
          color={'white'}
          borderTop={'1px'}
          borderColor={'gray.700'}
          pt={'5'}
        >
          <Text fontSize={'sm'}
          >
            Copyright &copy; <Text as={'span'}
              fontWeight={'bold'}
              color={'crimsonRed.500'}
            >PCLINK</Text> all right
            reserved 2022
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
