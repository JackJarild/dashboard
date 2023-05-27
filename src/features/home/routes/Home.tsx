import { StatsCard } from "@/components/Elements";
import { SidebarWithHeader } from "@/components/Layout"
import { Box, Heading, SimpleGrid, chakra, useTheme } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { useState } from "react";


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
                {isFirstMount && <InitialTransition />}
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

                <SidebarWithHeader>
                    <BasicStatistics />
                </SidebarWithHeader>
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
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                Välkommen Jack!
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard title={'Inväntar godkännande'} stat={'5st'} />
                <StatsCard title={'Pågående'} stat={'30st'} />
                <StatsCard title={'Olästa rapporter'} stat={'2st'} />
            </SimpleGrid>
        </Box>
    );
}