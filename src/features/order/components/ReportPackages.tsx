import { ReportPackageCard } from "@/components/ReportPackageCard"
import { Flex, Grid, HStack, SimpleGrid } from "@chakra-ui/react"


export const ReportPackages = () => {

    return (
        // <SimpleGrid
        //     minChildWidth={'330px'}
        //     gap={'1rem'}
        //     //minChildWidth={{ base: '90%', sm: '90%', md: '330px' }}
        //     //spacing={{ base: 1, sm: 3, md: 5, lg: 10 }}
        // >
        //     <ReportPackageCard key={1} daysToDeliver={5} description="Beskrivning" reportPackage="Grund" />
        //     <ReportPackageCard key={2} daysToDeliver={10} description="Test" reportPackage="Grund + cv" />
        //     <ReportPackageCard key={3} daysToDeliver={14}
        //         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non neque ac orci porttitor luctus non eget nisi. Donec id malesuada lacus. Donec vel lacus finibus mi mattis blandit nec sed nulla. Cras gravida neque eget malesuada bibendum. Integer volutpat, magna ac ultricies interdum, purus sem suscipit arcu, sed ornare odio turpis fringilla arcu. Praesent vulputate lorem vel augue mollis, sed congue odio dictum. Proin non volutpat massa."
        //         reportPackage="Fördjupad" />
        //     <ReportPackageCard key={4} daysToDeliver={2} description="" reportPackage="Utland" />
        //     <ReportPackageCard key={5} daysToDeliver={30} description="" reportPackage="Fördjupad + en utbildning" />
        // </SimpleGrid>
        <Grid
            templateColumns={'repeat(auto-fit, minmax(330px, 1fr))'}
            //templateRows={'repeat(2, 330px)'}
            gap={10}
            mt={10}
        >
            <ReportPackageCard key={1} daysToDeliver={5} description="Beskrivning" reportPackage="Grund" />
            <ReportPackageCard key={2} daysToDeliver={10} description="Test" reportPackage="Grund + cv" />
            <ReportPackageCard key={3} daysToDeliver={14}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non neque ac orci porttitor luctus non eget nisi. Donec id malesuada lacus. Donec vel lacus finibus mi mattis blandit nec sed nulla. Cras gravida neque eget malesuada bibendum. Integer volutpat, magna ac ultricies interdum, purus sem suscipit arcu, sed ornare odio turpis fringilla arcu. Praesent vulputate lorem vel augue mollis, sed congue odio dictum. Proin non volutpat massa."
                reportPackage="Fördjupad" />
            <ReportPackageCard key={4} daysToDeliver={2} description="" reportPackage="Utland" />
            <ReportPackageCard key={5} daysToDeliver={30} description="" reportPackage="Fördjupad + en utbildning" />
        </Grid>
    )
}