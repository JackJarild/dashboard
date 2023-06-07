import { ReportPackageCard } from "@/components/ReportPackageCard"
import { Box, Flex, Grid, HStack, SimpleGrid, Skeleton, useColorModeValue } from "@chakra-ui/react"
import { useCompanies } from "../api/getCompanies"


type CompaniesProps = {
    onClick: () => void
}

export const Companies = ({ onClick }: CompaniesProps) => {
    const { data, status } = useCompanies({ companyId: 2381 })

    if (status === 'loading') {
        return (
            <Grid
                templateColumns={'repeat(auto-fit, minmax(330px, 1fr))'}
                gap={10}
            >
                <Skeleton
                    h={'375px'}
                    w={'330px'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    isLoaded={status !== 'loading'}
                    fadeDuration={1}
                />
                   <Skeleton
                    h={'375px'}
                    w={'330px'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    isLoaded={status !== 'loading'}
                    fadeDuration={1}
                />
                   <Skeleton
                    h={'375px'}
                    w={'330px'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    isLoaded={status !== 'loading'}
                    fadeDuration={1}
                />
                   <Skeleton
                    h={'375px'}
                    w={'330px'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    isLoaded={status !== 'loading'}
                    fadeDuration={1}
                />
                   <Skeleton
                    h={'375px'}
                    w={'330px'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    isLoaded={status !== 'loading'}
                    fadeDuration={1}
                />
                   <Skeleton
                    h={'375px'}
                    w={'330px'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    isLoaded={status !== 'loading'}
                    fadeDuration={1}
                />
                   <Skeleton
                    h={'375px'}
                    w={'330px'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    isLoaded={status !== 'loading'}
                    fadeDuration={1}
                />
                   <Skeleton
                    h={'375px'}
                    w={'330px'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    isLoaded={status !== 'loading'}
                    fadeDuration={1}
                />
                
            </Grid>
        )
    }

    return (
        <Grid
            templateColumns={'repeat(auto-fit, minmax(330px, 1fr))'}
            gap={10}
        >
            {/* {data?.map((company, index) => (
                <ReportPackageCard
                    key={company.id || index}
                    daysToDeliver={0}
                    description={ ''}
                    reportPackage={company.name}
                    onClick={onClick} 
                    />
            ))
            } */}
        </Grid >
    )
}