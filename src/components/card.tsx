import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import ReactStars from "react-rating-stars-component";
import { Box, Flex, Icon, Heading, Text, Button } from "@chakra-ui/react";

const Card = ({ product }) => {
  const router = useRouter();

  const priceFormatter = (price) => {
    const numberFormatter = Intl.NumberFormat("en-US");
    return numberFormatter.format(price);
  };

  const handleClick = () => {
    router.push({
      pathname: "/shop/[pid]",
      query: { pid: product.attributes.slug },
    });
  };
  return (
    <Box
      onClick={handleClick}
      minWidth={'15rem'}
      maxWidth={'16rem'}
    >
      <Flex 
      justifyContent={'center'}
      alignItems={'center'}
      p={1}
      position={'relative'}
      >
        <Icon as={FaHeart} boxSize={5} position={'absolute'} top={3} right={3} zIndex={10} />
        <Box py={1}>
          <Image
            src={product.attributes.image.data[0].attributes.url}
            alt="Product Item"
            style={{ objectFit: "cover", minHeight: "250px", maxWidth: "250px", maxHeight: "250px" }}
            width={200}
            height={200}
          />
        </Box>
      </Flex>
      <Flex p={2} pt={4} direction={'column'} minHeight={'160px'}>
        <Heading fontSize={'sm'} fontWeight={'medium'} mb={1} noOfLines={1}>
          {product.attributes.name}
        </Heading>

        <Flex justifyContent={'center'}>
          <ReactStars size={20} value={0} edit={false} />
        </Flex>

        <Flex justifyContent={'center'} alignItems={'center'} mb={4}>
          {(product.attributes.compare_at_price || product.attributes.compare_at_price > 0) && (
            <Text as='s' fontSize={'sm'} fontWeight={'medium'} color={'dustyGray.500'} letterSpacing={'wide'}>
              ₱{priceFormatter(product.attributes.compare_at_price)}
            </Text>
          )}

          <Text ml={1} fontSize={'lg'} fontWeight={'medium'} letterSpacing={'wide'} color={ product.attributes.compare_at_price ? 'crimsonRed.500' : 'codGray.500' }>
            ₱{priceFormatter(product.attributes.price)}
          </Text>
        </Flex>

        <Flex justifyContent={'center'}>
          <Button leftIcon={<HiOutlineShoppingBag />} size='sm' bgColor={'wildGray.500'} color={'dustyGray.500'}
            _hover={{ bgColor: 'crimsonRed.500', color: 'white' }}>
            ADD TO CART
          </Button>
        </Flex>

      </Flex>
    </Box>
  );
};

export default Card;
