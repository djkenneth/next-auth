import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink href='#' fontWeight={'bold'}>Home</BreadcrumbLink>
            </BreadcrumbItem>

            {breadcrumbs?.map((breadcrumb: string, index: number) => (
                <BreadcrumbItem key={index} isCurrentPage={breadcrumbs.length-1 === index}>
                    <BreadcrumbLink fontWeight={'bold'} href='#'>{breadcrumb}</BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    )
}

export default Breadcrumbs