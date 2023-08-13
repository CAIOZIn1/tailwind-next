'use client';

import { AiOutlineUserAdd } from "react-icons/ai";
import { useFileInput } from "./Root";
import { useMemo } from 'react';

const ImagePreview = () => {
  const {files} = useFileInput();

  const previewURL = useMemo(() => {
    if(files.length === 0) return null;

    return URL.createObjectURL(files[0]);
  }, [files]);

  if(previewURL === null){
    return (
      <div className='flex h-16 w-16 items-center justify-center rounded-full bg-violet-50'>
        <AiOutlineUserAdd className='w-8 h-8 text-violet-600'/>
      </div>
     );
  } else {
    return(
      <img src={previewURL} alt="" className="h-16 w-16 rounded-full object-cover" />
    )
  }
}

export default ImagePreview;
