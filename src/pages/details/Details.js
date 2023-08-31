import React from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousel/Similar";
import Recommendation from "./carousel/Recommendation";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner
        video={data?.results?.[0]}
        crew={credits?.crew}
      ></DetailsBanner>
      <Cast data={credits?.cast} loading={loading}></Cast>
      <VideosSection data={data} loading={loading}></VideosSection>
      <Similar mediaType={mediaType} id={id}></Similar>
      <Recommendation mediaType={mediaType} id={id}></Recommendation>
    </div>
  );
};

export default Details;
