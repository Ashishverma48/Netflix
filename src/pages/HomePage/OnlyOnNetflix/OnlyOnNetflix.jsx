import React from 'react'
import './style.scss'
import ContentWrapper from '../../../contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../component/carousel/Carousel'
export const OnlyOnNetflix = () => {
  const {data,loading} = useFetch('/discover/tv?with_networks=213')
  console.log('netflix ',data?.results);

  return (
    <div className='carouselSection'>
      <ContentWrapper>
      <span className='carouselTitle'>Only on Netflix</span>
      </ContentWrapper>
    <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}
