"use server"
import React, { useEffect, useState } from 'react'
import CarCard from '../components/ui/CarCard'
import { db } from '../../configs/index'
import { CarImages, CarListing } from '../../configs/schema'
import { eq } from 'drizzle-orm';
import * as Service from '../Shared/service';
import { Grid } from '@chakra-ui/react';

export default function Home() {

  const [carList,setCarList] = useState([]);
  
  useEffect(() => {
    loadCarListings();
  }, [])


  const loadCarListings = async() => {
    const result = await db.select().from(CarListing).leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId));
    const resp = Service.FormatResult(result);
    setCarList(resp);
    console.log('in load', carList)
  }
  
  
  return (
    <div style={{margin: '2rem'}}>
      {console.log('cars', carList)}
      <CarCard cars={carList}/>
    </div>
  )
}
