import React, { useState } from "react";
import { RiFacebookFill, RiArrowLeftRightFill } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { HiShoppingBag } from 'react-icons/hi';
import { BsPlus, BsDash } from "react-icons/bs";
import { MdCompareArrows } from 'react-icons/md'
import { FaCartArrowDown, FaFacebook, FaTwitter } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import { convertToDecimal } from "@/lib/general";
import { Box, Button, Divider, Flex, HStack, Heading, Input, Text, useNumberInput, Icon, IconButton } from "@chakra-ui/react";

const ProductInfo = ({ productName, productPrice, productIsAvailable, productComparePrice }) => {

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 100,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()
  
  return (
    <>
      <Heading fontSize={'2xl'} color={'codGray.500'} fontWeight={'semibold'} letterSpacing={'wide'} mb={2}>
        {productName}
      </Heading>
      <Flex justifyContent={'center'} mb={2}>
        <ReactStars size={20} value={1} edit={false} style={{ marginRight: '1rem' }}/>
        <Text fontSize={'sm'} color={'sharkGray.500'} display={'flex'} alignItems={'center'} mr={2}>
          28 reviews
        </Text>
        |
        <Text fontSize={'sm'} color={'sharkGray.500'} display={'flex'} alignItems={'center'} ml={2} cursor={'pointer'} _hover={{ textDecoration: 'underline', textDecorationColor: 'sharkGray.500' }}>
          Be the first to review this product
        </Text>
      </Flex>
      <Flex justifyContent={'space-between'} mb={5}>
        <Flex alignItems={'baseline'}>
          <Text fontSize={'xl'} color={'scarpaGray.500'} fontWeight={'semibold'} textDecoration={'line-through'} mr={2}>
            &#8369;{convertToDecimal(productComparePrice)}
          </Text>
          <Text fontSize={'2xl'} color={'crimsonRed.500'} fontWeight={'semibold'}>
            &#8369;{convertToDecimal(productPrice)}
          </Text>
        </Flex>
        <Box>
          <Text fontSize={'sm'} color={'crimsonRed.500'} m={1}>Availability: {productIsAvailable > 0 ? 'In Stock' : 'Out of Stock'}</Text>
        </Box>
      </Flex>
      <Divider borderTopWidth={1} my={4} />
      <Box mb={5}>
        <Text fontSize={'sm'} color={'sharkGray.500'} mb={2} display={'flex'}>
          Brands:
        </Text>
        <Image alt="Brand Logo" src='/assets/images/BrandLogos/rog.jpg' width={160} height={150} />
      </Box>
      <Box mb={5}>
        <Flex>
          <Flex pos={'relative'} px={2} height={'10'}>
            <HStack maxW='320px'>
              <Button {...inc}> <Icon as={BsPlus} boxSize={6} /> </Button>
              <Input {...input} maxWidth={16} />
              <Button {...dec}> <Icon as={BsDash} boxSize={6} /> </Button>
            </HStack>
          </Flex>
          <Button leftIcon={<HiShoppingBag />} colorScheme='crimsonRed' variant='solid'> ADD TO CART </Button>
          <IconButton
            variant='outline'
            colorScheme='teal'
            aria-label='Call Sage'
            fontSize='20px'
            icon={<FiHeart />}
            w={14}
          />
          <IconButton
            variant='outline'
            colorScheme='teal'
            aria-label='Call Sage'
            fontSize='20px'
            icon={<MdCompareArrows />}
            w={14}
          />
        </Flex>
      </Box>
      <Divider borderTopWidth={1} my={4} />
      <HStack>
        <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
          Facebook
        </Button>
        <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
          Twitter
        </Button>
      </HStack>
    </>
  );
};

export default ProductInfo;
