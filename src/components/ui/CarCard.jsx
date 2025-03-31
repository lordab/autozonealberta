import React from "react";
import { Box, Image, Text, Flex } from '@chakra-ui/react'
const CarCard = (...props) => {
return(
    <div style={{maxWidth: 300, height:350, backgroundColor: '#fff', borderColor: '#D9D3D0', borderWidth: '0.1px', borderStyle: 'solid', borderRadius:'0.1px'}} >
        <Image
        src='src/images/IMG_1671.png'
        fit='contain'
        htmlHeight='180px'
        htmlWidth='300px'
        />
        <Flex>
        <Text fontSize="0.8rem" padding="0.5rem">2014 Ford F150</Text>
        </Flex>
      </div>
)
}
export default CarCard;