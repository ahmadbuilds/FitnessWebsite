'use client';
import React, { useEffect, useState } from 'react';
import { fetchVideos, VideoScheme } from '../lib/definition';
import Image from 'next/image';
import { lustina } from '../lib/font';
import VideoCardSkeleton from '../Skeletons/VideoSkeleton';

const VideosCard = ({ name }: { name: string }) => {
  const [videos, setVideos] = useState<VideoScheme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchVideos(name);
        const data = response ? JSON.parse(response) : { contents: [] };
        setVideos(data.contents || []);
      } catch (error) {
        console.error('Failed to fetch the data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [name]);

  
  return (
    <>
    {
      loading?<VideoCardSkeleton/>:
        <div className='mx-5 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  items-stretch'>
        {videos.slice(5, 8).map((pro) => {
          const thumbnailUrl = pro.video.thumbnails?.[0]?.url || '/gym.png';
          return (
            <div key={pro.video.videoId} className='flex flex-col gap-7'>
              {thumbnailUrl ? (
                <div>
                  <Image
                  className='flex items-center justify-center w-full rounded-tl-3xl'
                  src={thumbnailUrl}
                  alt="Thumbnail of the video"
                  width={300}
                  height={300}
                  unoptimized={thumbnailUrl === '/gym.png'}
                  // For local placeholders
                  />
                </div>
              ) : (
                <p>No thumbnail available</p>
              )}
              <div className='flex flex-col gap-2'>
                <p className={`${lustina.className} antialiased text-xl font-bold`}>{pro.video.title}</p>
                <p className={`${lustina.className} antialiased text-sm font-semibold`}>{pro.video.channelName}</p>

              </div>
            </div>
          );
        })}
      </div>
    }
    </>  
  );
};

export default VideosCard;
