import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const CustomerReview = ({ message, name, datePublished }) => {
    return (
        <Box borderTop={'1px'} borderColor={'dustyGray.500'} mb={10}>
            <Flex alignItems={'center'} py={3}>
                <Avatar size='md' name={name} src='https://bit.ly/tioluwani-kolawole' mr={2} />
                <Box>
                    <Flex alignItems={'center'}>
                        <ReactStars size={20} value={2} edit={false} style={{ marginRight: '2rem' }} />
                        <Text fontSize={'sm'}>{datePublished}</Text>
                    </Flex>
                    <Text fontWeight={'bold'} color={'dustyGray.500'}>{name}</Text>
                </Box>
            </Flex>
            <Text>
                {message}
            </Text>
        </Box>
    )
}

export default CustomerReview