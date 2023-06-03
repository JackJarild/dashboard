import { StatsCard } from "@/components/Elements";
import { MainLayout, SidebarWithHeader } from "@/components/Layout"
import { ReportPackageCard } from "@/components/ReportPackageCard";
import { Box, Heading, Highlight, SimpleGrid, chakra, useTheme, Text, Flex } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router-dom";


const content = (isFirstMount) => ({
    animate: {
        transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
    },
});

const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};


export const Home = ({ isFirstMount }) => {

    return (
        <>
            <motion.section exit={{ opacity: 0 }}>
                {/* {isFirstMount && <InitialTransition />} */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={content(isFirstMount)}
                >
                </motion.div>
                {/* <motion.h1
                    variants={title}
                    className="text-6xl font-black text-center"
                >
                    ToFindOut
                </motion.h1> */}

              
           
                    <BasicStatistics />
            </motion.section>
        </>
    )
}


const InitialTransition = () => {
    const blackBox = {
        initial: {
            height: "100vh",
            bottom: 0,
        },
        animate: {
            height: 0,
            transition: {
                duration: 3,//1.5,
                ease: [0.87, 0, 0.13, 1],
            },
        },
    };
    // const blackBox = {
    //     initial: {
    //         height: "300px",
    //         width: "300px",
    //         marginLeft: 'auto',
    //         marginRight: 'auto',
    //         left: 0,
    //         right: 0,
    //         textAlign: 'center',
    //         //bottom: 0,
    //         borderRadius: '50%',
    //         opacity: 1,
    //         //scale: 1
    //     },
    //     animate: {
    //         opacity: 0,
    //         //scale: 1,
    //         width: '100%',
    //         height: '100%',
    //         borderRadius: 0,
    //         transition: {
    //             duration: 3,//1.5,
    //             //delay: 0.5,
    //             ease: [0.5, 0.71, 0.2, 1.01]
    //         },
    //     },
    // };

    const textContainer = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 0,
            transition: {
                duration: 0.3,
                when: "afterChildren",
            },
        },
    };

    const text = {
        initial: {
            y: 0,
        },
        animate: {
            y: 80,
            transition: {
                duration: 1.5,
                ease: [0.87, 0, 0.13, 1],
            },
        },
    };

    const [inset, setInset] = useState<number | string>(0)

    console.log('InitialTransition called')

    return (
        <Box pos={'absolute'} zIndex={50} w={'100%'} bgColor={"tfogreen.500"} inset={inset} display={'flex'} alignItems={'center'} justifyContent={'center'}
            as={motion.div}
            initial="initial"
            animate="animate"
            variants={blackBox}
            onAnimationStart={() => setInset(0)}
            onAnimationComplete={() => setInset('unset')}>
            <motion.svg variants={textContainer} style={{ position: 'absolute', display: 'flex', width: '100%' }} z={50}>
                <pattern
                    id="pattern"
                    patternUnits="userSpaceOnUse"
                    width={750}
                    height={800}
                    color="white"
                >
                    <rect style={{ width: '100%', height: '100%', fill: 'currentcolor' }} />
                    <Box as={motion.rect}
                        variants={text}
                        color={'tfopink.500'}
                        w={'100%'}
                        h={'100%'}
                        fill={'currentcolor'}
                    />
                </pattern>
                <text
                    style={{ fontSize: '6rem', fontWeight: 'bold', fill: "url(#pattern)" }}
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                >
                    ToFindOut
                </text>
            </motion.svg>
        </Box>
    );
};

const BasicStatistics = () => {
    return (
        <Box maxW="7xl" mx={'auto'} px={{ base: 2, sm: 12, md: 17 }}>
            <Heading
                lineHeight='tall'
                textAlign={'center'}
                fontSize={'5xl'}
                py={10}
                // bgGradient={'linear(to-r, tfopink.500, tfopink.600, tfopink.900)'}
                // bgClip={'text'}
            >
                Välkommen
                <Heading as={'span'}
                    lineHeight='tall'
                    fontSize={'5xl'}
                    py={10}
                    ml={3}
                    //color={'tfopink.500'}
                    bgGradient={'linear(to-r, tfopink.600, tfopink.700, tfopink.900)'}
                    //bgGradient={'linear(to-r, #DB4D9E, #AC42DB, #2D1D8F)'}
                    bgClip={'text'}
                    >
                    Jack!
                </Heading>
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} mb={10}>
                <StatsCard title={'Klara rapporter'} stat={'5st'} />
                <StatsCard title={'Pågående rapporter'} stat={'30st'} />
                <StatsCard title={'Inväntar godkännande'} stat={'2st'} />
            </SimpleGrid>
            {/* <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <ReportPackageCard key={1} daysToDeliver={5} description="Beskrivning" reportPackage="Grund" />
                <ReportPackageCard key={2} daysToDeliver={10} description="Test" reportPackage="Grund + cv" />
                <ReportPackageCard key={3} daysToDeliver={14}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non neque ac orci porttitor luctus non eget nisi. Donec id malesuada lacus. Donec vel lacus finibus mi mattis blandit nec sed nulla. Cras gravida neque eget malesuada bibendum. Integer volutpat, magna ac ultricies interdum, purus sem suscipit arcu, sed ornare odio turpis fringilla arcu. Praesent vulputate lorem vel augue mollis, sed congue odio dictum. Proin non volutpat massa."
                    reportPackage="Fördjupad" />
                <ReportPackageCard key={4} daysToDeliver={2} description="" reportPackage="Utland" />
                <ReportPackageCard key={5} daysToDeliver={30} description="" reportPackage="Fördjupad + en utbildning" />
            </SimpleGrid> */}
        </Box>
    );
}