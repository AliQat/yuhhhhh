'use client';

import { useState, useEffect } from 'react';

export const useVideoThumbnail = (videoUrl: string) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const generateThumbnail = () => {
      try {
        // Set video dimensions
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // Draw the first frame
        if (context) {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/jpeg');
          setThumbnail(dataUrl);
        }
      } catch (err) {
        setError('Failed to generate thumbnail');
        console.error('Thumbnail generation error:', err);
      }
    };

    // Set up video element
    video.crossOrigin = 'anonymous';
    video.src = videoUrl;
    video.currentTime = 0;
    video.preload = 'metadata';

    video.addEventListener('loadeddata', generateThumbnail);
    video.addEventListener('error', () => setError('Failed to load video'));

    return () => {
      video.removeEventListener('loadeddata', generateThumbnail);
      video.remove();
      canvas.remove();
    };
  }, [videoUrl]);

  return { thumbnail, error };
};