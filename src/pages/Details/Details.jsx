import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './DetailBanner/DetailsBanner'

const Details = () => {
  const {mediaType,id} = useParams()
  const {data,loading} = useFetch(`/${mediaType}/${id}/videos`)

  const {data:credit,loading:creditLoding} = useFetch(`/${mediaType}/${id}/credits`)
  console.log(data,loading);
  console.log('creadit',credit,creditLoding);
  // console.log(mediaType,id);
  return (
    <div>
      <DetailsBanner video={data?.results[0] } crew={credit?.crew}/>
    </div>
  )
}

export default Details