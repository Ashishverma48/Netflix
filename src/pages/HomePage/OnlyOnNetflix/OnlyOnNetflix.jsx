import React from 'react'
import './style.scss'
import ContentWrapper from '../../../contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../component/carousel/Carousel'
import { useState } from 'react'
export const OnlyOnNetflix = () => {
  const [endpoint,setEndpoint] =useState('tv') 
  const {data,loading} = useFetch(`/discover/${endpoint}?with_networks=213`)
  console.log('netflix ',data?.results);
  

  return (
    <div className='carouselSection'>
      <ContentWrapper>
      <span className='carouselTitle'>Only on Netflix</span>
      </ContentWrapper>
    <Carousel data={data?.results} loading={loading} endPoint={endpoint}/ >
    </div>
  )
}
