import React, { useEffect, useState } from "react";
import { Box, Image, Text, Flex, Grid, VStack } from '@chakra-ui/react'
import source from '../../images/IMG_1671.png'

export default function CarCard ({cars}) {
 
  return(
    <div>
      <Grid>
      {cars?.map((item, index)=>(
        <div key={index} style={{maxWidth: 300, height:350, backgroundColor: '#fff', borderColor: '#D9D3D0', borderWidth: '0.1px', borderStyle: 'solid', borderRadius:'0.1px'}} >
        <Image
        src={item?.images[0].imageUrl}
        fit='contain'
        htmlHeight='180px'
        htmlWidth='300px'
        />
        <Flex>
        <Text as='b' fontSize="1rem" padding="0.5rem">{item?.listingTitle}</Text>
        </Flex>
        <VStack>
        <div>
        <label>Price: $</label>
        <span>{item?.price}</span>
        </div>
        <div>
        <label>Mileage: </label>
        <span>{item?.mileage}km</span>
        </div>
        <div>
        <label>VIN: </label>
        <span>{item?.vin}</span>
        </div>
        </VStack>
      </div>
      
      ))
    }
      </Grid>
    </div>
    
)
}