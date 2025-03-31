import { Box, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <div>
      <div style={{maxWidth: 300, height:300, backgroundColor: '#fff', borderColor: '#D9D3D0', borderWidth: '0.1px', borderStyle: 'solid'}} >
        <Image
        src='src/images/IMG_1671.png'
        fit='contain'
        borderRadius='xl'
        htmlHeight='180px'
        htmlWidth='300px'
        />
        {/* <img src='src/images/IMG_1671.png' width='300px' height='200px'/> */}
        <Flex>
        <Text fontSize="1rem">Ford F150</Text>
        </Flex>
      </div>
    </div>
  )
}
