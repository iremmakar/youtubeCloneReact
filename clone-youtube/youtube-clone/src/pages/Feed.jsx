import React from 'react'
import SideNav from '../components/SideNav'

import { YoutubeContext } from '../context/youtubeContext'
import { useContext } from 'react'
import VideoCard from '../components/VideoCard'

const Feed = () => {

    const {searchResult} = useContext(YoutubeContext);
  return (
    <div className='flex'>
        <SideNav />
        <div className='videos'>
            {
                !searchResult ? (<p>Loading</p>) : (
                    searchResult.map((video)=>{
                    if(video.type !== "video") return;

                    return <VideoCard video={video}/>
                    }
                    )


                )
            }
        </div>
    </div>
  )
}

export default Feed