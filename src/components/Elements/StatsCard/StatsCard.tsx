import {
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  interface StatsCardProps {
    title: string;
    stat: string;
  }
  

  export const StatsCard = (props: StatsCardProps)  => {
    console.log(StatLabel)
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'md'}
        border={'2px solid'}
        borderColor={useColorModeValue('white', 'gray.300')}
        // bg={useColorModeValue('tfogreen.300', 'tfopink.600')}
        bg={`${title==='Klara rapporter'? useColorModeValue('tfogreen.400','tfogreen.500') : (title==='Pågående rapporter'? useColorModeValue('tfopink.600', 'tfopink.800') : useColorModeValue('blue.300', 'blue.500'))}`}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} /*color={useColorModeValue('gray.500', 'gray.700')} */ color={useColorModeValue('white', 'gray.800')} isTruncated>
          {title}
        </StatLabel>
        <StatNumber  color={useColorModeValue('gray.600', 'gray.200')} fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }