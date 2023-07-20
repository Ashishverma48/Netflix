import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from 'react-icons/bs';
import './style.scss'
import ContentWrapper from '../../contentWrapper/ContentWrapper'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import noPoster from '../../assests/no-poster.png'
import Img from '../lazyImageLoader/Img'

const Carousel = ({data,loading,endPoint,title}) => {
   const {url} = useSelector((state)=>state.home)
   const carouselContainer = useRef();
   console.log('cat',carouselContainer?.current);

   
   const skelItem = ()=>{
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton">
            <div className="data skeleton"></div>
          </div>
        </div>
      </div>
    )
   }

  return (
    <div className='carousel'>
          <ContentWrapper>
          <BsFillArrowLeftCircleFill className='arrow arrowLeft'/>
            <BsFillArrowRightCircleFill className='arrow arrowRight'/>
            {!loading ? (
            
            <div className="carouselItems">
              {
                data?.map((item)=>{
                  const posterUrl = item?.poster_path?url?.poster +item?.poster_path:noPoster
                 return (
                  <div className="carouselItem" key={item?.id}>
                    <div className="posterBlock">
                      <Img src={posterUrl}/>
                    </div>

                  </div>
                 )
                })

                  
              
              }
            </div>
            ):<div className='loadingSkeleton'>
              {skelItem}
              {skelItem}
              {skelItem}
              {skelItem}
              {skelItem}
              </div>}
          </ContentWrapper>
    </div>
  )
}

export default Carousel