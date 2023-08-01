import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { options } from "../utils/constants";
import SideNav from "../components/SideNav";
import VideoCard from "../components/VideoCard";

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("search");

  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    axios
      .get(`https://youtube138.p.rapidapi.com/search/?q=${query}`, options)
      .then((res) => setVideos(res.data.contents));
  }, [query]);

  return (
    <div className="flex">
      <SideNav />

      <div className="flex justify-center p-5 w-full ">
        {!videos && <p>lOADİNG</p>}

        <div className="max-w-[500px]">
          {videos &&
            videos.map((video) => {
              if (video.type !== "video") return;
              return <VideoCard video={video} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
