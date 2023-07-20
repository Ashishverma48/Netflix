import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch"
import { useSelector } from "react-redux"
import Img from "../../../component/lazyImageLoader/Img";
import './style.scss'
import { AiFillCaretRight,AiOutlineInfoCircle } from 'react-icons/ai';
import ContentWrapper from "../../../contentWrapper/ContentWrapper";
import Genres from "../../../component/genre/Genres";
import dayjs from "dayjs";
export const HomeBanner = () => {

    const [background,setbackground] = useState('')
    const {url} = useSelector((state)=>state.home);
    
    const{data,loading} = useFetch("/movie/upcoming")
    const [itemdata,setItemData] = useState([])

    useEffect(()=>{
      const moviesdata=data?.results?.[Math.floor(Math.random() *20)]
      setbackground(url.backdrop+moviesdata?.backdrop_path)
      setItemData(moviesdata)
    },[data])
    



   
  //  console.log(background);    

    
  return (
    <div className="heroBanner">
        {!loading && (
          <div className="backdrop-img">
            <Img src={background}/>
          </div>
        )}
        <div className="opacity-layer"></div>
          <ContentWrapper>
            
        <div className="heroBannerContent">
          <h1 className="title">{!loading && itemdata?.title}</h1>
          <p className="content">{!loading && itemdata?.overview}</p>
          <p className="content">{dayjs(!loading && itemdata?.release_date).format('D MMM YYYY')}</p>
          <Genres data={itemdata?.genre_ids}/>
          <div className="play">
            <button className="homeBannerBtn1"> <AiFillCaretRight/> <span>Play</span></button>
            <button className="homeBannerBtn2"> <AiOutlineInfoCircle/> <span>More Info</span></button>
          </div>
        </div>
          </ContentWrapper>
        
    </div>
  )
}
