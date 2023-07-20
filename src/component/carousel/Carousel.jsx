import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./style.scss";
import ContentWrapper from "../../contentWrapper/ContentWrapper";
import { useSelector } from "react-redux";
import { useRef } from "react";
import noPoster from "../../assests/no-poster.png";
import Img from "../lazyImageLoader/Img";
import { useNavigate } from "react-router-dom";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genre/Genres";
import dayjs from "dayjs";

const Carousel = ({ data, loading, endPoint, title }) => {
  const carouselContainer = useRef();
 
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const navigation = (dir) => {
    const container = carouselContainer?.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skelItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="data skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="arrow arrowLeft"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="arrow arrowRight"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item?.poster_path
                ? url?.poster + item?.poster_path
                : noPoster;
              console.log();
              return (
                <div className="carouselItem" key={item?.id} onClick={()=>navigate(`/${endPoint}/${item?.id}`)}>
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                    <CircleRating rating={item?.vote_average.toFixed(1)} />
                    <Genres data={item?.genre_ids.slice(0,2)}/>
                  </div>
                  <div className="textBlock">
                    <span className="title ">{item?.name||item.title}</span>
                    <span className="date ">{dayjs(item?.release_date).format('MMM D, YYYY')}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skelItem}
            {skelItem}
            {skelItem}
            {skelItem}
            {skelItem}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
