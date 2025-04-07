import React, { useEffect, useState } from "react";
import { Box, Image, Text, Flex, Grid, VStack, Card, CardBody, Stack, Heading, Divider, SimpleGrid, Button, Container } from '@chakra-ui/react'
import './CarCard.css'
export default function CarCard ({cars}) {
 
  return(
    <Box borderWidth={1} borderRadius='lg' w='100%' p='6'>
      <SimpleGrid  columns={3} spacing={8} minChildWidth='250px' style={{padding: '22px'}}>
      {cars?.map((item, index)=>(
        <Card key={index} size="lg" variant='outline' style={{borderColor:'darkgrey'}}>
        <CardBody>
          <img src={item?.images[0].imageUrl} />
        {/* <Image
        src={item?.images[0].imageUrl}
        objectFit='cover'
        boxSize='500px'
        //htmlHeight='180px'
        htmlWidth='400px'
        //style={{borderRadius: '12px'}}
        /> */}
        <Stack mt='5' spacing='3'>
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
        <div>
          <Button style={{backgroundColor: '#fff', color: '#C47E3B', borderColor: 'darkgrey'}}>View Details</Button>
        </div>
        </Stack>
        </CardBody>
      </Card>
      
      ))
    }
      </SimpleGrid>
    </Box>
    
)
}