import React from 'react'
import {BiBadgeCheck} from "react-icons/bi"
import {millify} from "millify"
import { Link } from 'react-router-dom'


const VideoCard = ({video}) => {
  return (

    <Link to={`/watch/${video.video.videoId}`}>
        <div title={video.video.descriptionSnippet} className='cursor-pointer w-full'> 
            <img src={video.video.thumbnails[0].url} alt="" className='w-full rounded my-4'/>
            <div className='flex gap-3'>
                <img src={video.video.author.avatar[0].url} alt="" className='rounded-full w-[50px] h-[50px]'/>
                <div >
                    <p>{video.video.title}</p>
                    <p className='flex items-center'>
                        <span> {video.video.author.title} </span>
                        {
                            video?.video?.author?.badges[0]?.text === "Doğrulandı" && (<BiBadgeCheck className='mx-2 text-blue-600'/>)
                        }
                    </p>

                    <div className='flex gap-3'>
                        <p>{millify(video.video.stats.views)}</p>
                        <p>{video.video.publishedTimeText}</p>
                    </div>

                </div>
            </div>
        </div>
    </Link>
  )
}

export default VideoCard