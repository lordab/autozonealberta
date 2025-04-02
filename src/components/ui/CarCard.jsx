import React, { useEffect, useState } from "react";
import { Box, Image, Text, Flex, Grid, VStack, Card, CardBody, Stack, Heading, Divider, SimpleGrid } from '@chakra-ui/react'
import './CarCard.css'
export default function CarCard ({cars}) {
 
  return(
    <div>
      <SimpleGrid  columns={4} spacing={6} minChildWidth='250px'>
      {cars?.map((item, index)=>(
        <Card key={index} size="lg" variant='outline' style={{maxHeight: '500px'}}>
        <CardBody>
        <Image
        src={item?.images[0].imageUrl}
        fit='cover'
        boxSize='300px'
        //htmlHeight='180px'
        //htmlWidth='300px'
        //style={{borderRadius: '12px'}}
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{item?.listingTitle}</Heading>
        <div>
        <label className='card-item-label'>Price: </label>
        <span>${item?.price}</span>
        </div>
        <div>
        <label className='card-item-label'>Mileage: </label>
        <span>{item?.mileage}km</span>
        </div>
        <div>
        <label className='card-item-label'>VIN: </label>
        <span>{item?.vin}</span>
        </div>
        </Stack>
        </CardBody>
      </Card>
      
      ))
    }
      </SimpleGrid>
    </div>
    
)
}