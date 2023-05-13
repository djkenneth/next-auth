// Dependencies
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import {
  Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Link, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure, Container, InputGroup, InputRightElement, Input, UnorderedList, ListItem, Grid, GridItem
} from '@chakra-ui/react';
import {
  HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon,
} from '@chakra-ui/icons';
import axios from "axios";

// Icons
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";

// data
import { NAV_ITEMS, NavItem } from "@/lib/contants/navigation";

function Header() {
  const router = useRouter();

  const { isOpen, onToggle } = useDisclosure();

  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => axios.get('/api/categories')
  })

  const categoryProduct = (category: string) => {
    router.push({
      pathname: `/product-category/${category}`,
    });
  }

  return (
    <Box as='header'>
      <Box display={{ base: 'none', md: 'block' }} bg={'crimsonRed.500'} py={3} borderBottomColor={'white'} borderBottomWidth={'1px'}>
        <Container maxW="1250px">
          <UnorderedList styleType={"none"} display={'flex'} justifyContent={'end'} color={'white'}>
            <ListItem px={5} borderLeftColor={'white'} borderLeftWidth={'1px'} fontSize={'xs'}>CONTACT US</ListItem>
            <ListItem px={5} borderLeftColor={'white'} borderLeftWidth={'1px'} fontSize={'xs'}>FIND A STORE</ListItem>
            <ListItem px={5} borderLeftColor={'white'} borderLeftWidth={'1px'} fontSize={'xs'}>SIGN IN</ListItem>
            <ListItem pl={5} borderLeftColor={'white'} borderLeftWidth={'1px'} fontSize={'xs'}>CREATE AN ACCOUNT</ListItem>
          </UnorderedList>
        </Container>
      </Box>
      <Box bg={'sharkGray.500'} py={10}>
        <Container maxW="1250px">
          <Flex
            // bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            align={'center'}>
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justifyContent={'space-between'} alignItems={'center'}>

              <Box onClick={() => router.push("/")} display={{ base: 'none', md: 'block' }}>
                <Image src="/assets/images/logo.png" alt="PC Link Logo" width={152} height={45} />
              </Box>

              <Flex alignItems={'center'}>
                <Flex display={{ base: 'none', md: 'flex' }} width={'30rem'} mr={8}>
                  {/* <DesktopNav /> */}
                  <InputGroup size='lg'>
                    <InputRightElement
                      pointerEvents='none'
                      children={<BsSearch color='white' />}
                      bgColor={'crimsonRed.500'}
                      borderTopRightRadius={'full'}
                      borderBottomRightRadius={'full'}
                    />
                    <Input type='text' placeholder='Search...' borderRadius={'full'} width={'full'} bg={'white'} />
                  </InputGroup>
                </Flex>

                <Stack
                  flex={{ base: 1, md: 0 }}
                  justify={'flex-end'}
                  direction={'row'}
                  spacing={6}>
                  <Icon as={HiOutlineHeart} boxSize={7} color={'white'} />
                  <Icon as={HiOutlineShoppingBag} boxSize={7} color={'white'} />
                </Stack>
              </Flex>
            </Flex>
          </Flex>

          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Container>
      </Box>
      <Box>
        <Container maxW="1250px">
          <DesktopNav />
        </Container>
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                <Flex alignItems={'center'} color={'codGray.500'} _hover={{ color: "crimsonRed.500" }}>
                  <Text fontWeight={'bold'} pr={2}>{navItem.label}</Text>
                  <Icon as={MdKeyboardArrowDown} boxSize={6} />
                </Flex>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                width={'100%'}
              >
                <Stack>
                  <Grid templateColumns={'repeat(5, 0.8fr)'} >
                    {navItem.children.map((child,) => (
                      <GridItem key={child.label}>
                        <DesktopSubNav key={child.label} {...child} />
                      </GridItem>
                    ))}
                  </Grid>
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, children }: NavItem) => {
  return (
    <>
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('crimsonRed.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'crimsonRed.500' }}
              fontWeight={500}>
              {label}
            </Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'crimsonRed.500'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
      <Stack>
        {children?.map((child) => (
          <Link
            key={child.label}
            href={child.href}
            role={'group'}
            display={'block'}
            py={1}
            pl={8}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('crimsonRed.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
              <Box>
                <Text
                  transition={'all .3s ease'}
                  _groupHover={{ color: 'crimsonRed.500' }}>
                  {child.label}
                </Text>
              </Box>
              <Flex
                transition={'all .3s ease'}
                transform={'translateX(-10px)'}
                opacity={0}
                _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                justify={'flex-end'}
                align={'center'}
                flex={1}>
                <Icon color={'crimsonRed.500'} w={5} h={5} as={ChevronRightIcon} />
              </Flex>
            </Stack>
          </Link>
        ))}
      </Stack>
    </>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default Header;
