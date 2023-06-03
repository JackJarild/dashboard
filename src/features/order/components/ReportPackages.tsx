import { ReportPackageCard } from "@/components/ReportPackageCard"
import { Box, Flex, Grid, HStack, SimpleGrid, Skeleton, useColorModeValue } from "@chakra-ui/react"
import { useReportPackages } from "../api/getReportPackages"


type ReportPackagesProps = {
    onClick: () => void
}

export const ReportPackages = ({ onClick }: ReportPackagesProps) => {
    const { data, status } = useReportPackages({ companyId: 2381 })

    if (status === 'loading') {
        return (
            <Grid
                templateColumns={'repeat(auto-fit, minmax(330px, 1fr))'}
                gap={10}
            >
                {Array.from(Array(8).keys()).map((id) => {
                    return (
                        <Skeleton
                    h={'375px'}
                    w={'330px'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    isLoaded={status !== 'loading'}
                    fadeDuration={1}
                />
                    )
                })}
                {/* <Skeleton
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
                 */}
            </Grid>
        )
    }

    return (
        <Grid
            templateColumns={'repeat(auto-fit, minmax(330px, 1fr))'}
            gap={10}
        >
            {data?.map((reportPackage, index) => (
                <ReportPackageCard
                    key={reportPackage.id || index}
                    daysToDeliver={reportPackage.daysToDeliver}
                    description={reportPackage.description ?? ''}
                    reportPackage={reportPackage.customName}
                    onClick={onClick} 
                    />
            ))
            }
        </Grid >
    )
}