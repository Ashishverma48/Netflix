import React from "react";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./style.scss";
import dayjs from "dayjs";
import CircleRating from "../../../component/circleRating/CircleRating";
import Genres from "../../../component/genre/Genres";
import Img from "../../../component/lazyImageLoader/Img";
import poster from "../../../assests/no-poster.png";
import { useSelector } from "react-redux";
import { AiFillCaretRight } from "react-icons/ai";
import ContentWrapper from "../../../contentWrapper/ContentWrapper";
const DetailsBanner = ({ video, crew }) => {
  const { url } = useSelector((state) => state.home);
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const _genres = data?.genres?.map((gen) => gen.id);
  console.log("genres", _genres);

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="backdrop-img">
                <Img src={url.backdrop + data?.backdrop_path} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data?.poster_path ? (
                      <Img
                        className="posterImage"
                        src={url.poster + data?.poster_path}
                      />
                    ) : (
                      <Img src={poster} className="posterImg" />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data?.title || data?.name} (${dayjs(
                        data.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div className="subtitle">{data?.tagline}</div>
                    <div className="genre">
                      <Genres data={_genres} />
                    </div>
                    <div className="trailer">
                      <div className="rating">
                        <CircleRating rating={data?.vote_average.toFixed(1)} />
                      </div>
                      <span className="play">
                        <AiFillCaretRight /> Watch Trailer
                      </span>
                    </div>
                  <div className="overView">
                    <h2>OverView</h2>
                    <span >{data?.overview}</span>
                  </div>
                  </div>
                </div>
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <h2></h2>
      )}
    </div>
  );
};

export default DetailsBanner;
