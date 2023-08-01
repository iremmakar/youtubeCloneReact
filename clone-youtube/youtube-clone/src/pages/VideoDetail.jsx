import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/constants";

import { AiFillLike } from "react-icons/ai";

import { FaShare } from "react-icons/fa";

import ReactPlayer from "react-player";
import millify from "millify";
import VideoCard from "../components/VideoCard";
import StringArea from "../components/StringArea";

const VideoDetail = () => {
  const params = useParams();
  const [detail, setDetail] = useState(null);
  const [relatedContent, setRelatedContent] = useState(null);

  useEffect(() => {
    setDetail(null);
    setRelatedContent(null);

    axios
      .get(
        `https://youtube138.p.rapidapi.com/video/details/?id=${params.videoId}`,
        options
      )
      .then((res) => setDetail(res.data));

    axios
      .get(
        `https://youtube138.p.rapidapi.com/video/related-contents/?id=${params.videoId}`,
        options
      )
      .then((res) => setRelatedContent(res.data.contents));
  }, [params.videoId]);

  return (
    <div>
      {!detail && <div className="m-auto mt-[400px]">Loading</div>}

      {detail && (
        <div className="flex flex-col gap-5 justify-between p-3 sm:p-5 md:p-12 lg:flex-row lg:justify-between ">
          <div className="lg:max-w-[900px] flex flex-col items-center">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${detail.videoId}`}
              width={"100%"}
              controls
              playing={true}
            />
            <div className="flex flex-col gap-5 mt-5">
              <h3>{detail?.title}</h3>

              <div className="flex justify-between">
                <div className="flex">
                  <img
                    src={detail?.author?.avatar[0]?.url}
                    alt=""
                    className="w-[50x] h-[50px] rounded-full"
                  />
                  <div>
                    <p>{detail.author.title}</p>
                    <p>{detail.author.stats.subscribersText}</p>
                  </div>
                  <button className="bg-white text-black rounded-lg p-1">
                    Abone Ol
                  </button>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center gap-3 rounded p-3 cursor-pointer bg-gray-800 hover:bg-gray-700">
                    <AiFillLike />
                    <span>{detail.stats.likes}</span>
                  </div>
                  <div className="flex items-center gap-3 rounded p-3 cursor-pointer bg-gray-800 hover:bg-gray-700">
                    <FaShare />
                    <span>Paylaş</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-600 rounded p-4">
                <p className="flex gap-5 mb-3">
                  <span>{millify(detail.stats.views)}</span>
                  <span>{detail.publishedDate}</span>
                </p>
                <StringArea text={detail.description} max={100} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 related lg:max-w-[300px]">
            {!relatedContent && <p>Loading</p>}

            {relatedContent &&
              relatedContent.map((video) => {
                if (video.type !== "video") return;
                return <VideoCard video={video} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDetail;

// url = https://www.youtube.com/watch?v=${detail.videoId} react player url
