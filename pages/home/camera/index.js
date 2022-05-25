import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const Cam = () => {
  const router = useRouter();
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: { facingMode: "environment" },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => console.error(err));
  };

  const takePhoto = () => {
    const width = 414;
    const height = width;

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");

    ctx.drawImage(video, 0, 0, width, height);

    setHasPhoto(true);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);
  return (
    <div className='w-full h-screen object-fill'>
      <div className='bg-white w-full h-24 flex items-center px-4 gap-x-2 overflow-hidden absolute top-0'>
        <div
          onClick={() => router.back()}
          className='w-10 h-10 bg-sidebar flex items-center justify-center rounded-xl shadow-md'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-white'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <p className='text-sm font-bold'>Back</p>
      </div>
      <div className={`w-full h-full  ${hasPhoto ? "" : "hidden"} px-4 pt-24`}>
        <canvas ref={photoRef} className={`w-full h-auto`}></canvas>

        <div className='relative'>
          <div className='absolute w-full h-16 flex items-center justify-center bottom-0 bg-red-500/20'>
            <button
              className='text-red-500 flex items-center gap-x-2 bg-red-500/40 p-2 rounded-full'
              onClick={() => setHasPhoto(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              <p>Ulangi</p>
            </button>
          </div>
        </div>
      </div>
      <div className={`w-full bg-black h-full ${hasPhoto ? "hidden" : ""}`}>
        <video className='w-full h-full object-none' ref={videoRef}></video>
      </div>
      <div className='bg-white w-full fixed bottom-0 flex items-center justify-center shadow-md'>
        <div className='py-3.5'>
          <button
            onClick={takePhoto}
            className='border border-blue-500 p-1 w-fit rounded-full'
          >
            <div className='bg-blue-500 rounded-full w-14 h-14 ' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cam;

// // import styled, { css, keyframes } from "styled-components";
// // // import { useState, useRef } from "react";
// // import Measure from "react-measure";
// // import { useUserMedia } from "lib/useUserMedia";
// // import { useCardRatio } from "lib/useCardRatio";
// // import { useOffsets } from "lib/useOffsets";
// // const flashAnimation = keyframes`
// //   from {
// //     opacity: 0.75;
// //   }

// //   to {
// //     opacity: 0;
// //   }
// // `;

// // const Wrapper = styled.div`
// //   display: flex;
// //   flex-flow: column;
// //   align-items: center;
// //   width: 100%;
// // `;

// // const Container = styled.div`
// //   position: relative;
// //   overflow: hidden;
// //   width: 100%;
// //   max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
// //   max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};
// // `;

// // const Canvas = styled.canvas`
// //   position: absolute;
// //   top: 0;
// //   left: 0;
// // `;

// // const Video = styled.video`
// //   position: absolute;

// //   &::-webkit-media-controls-play-button {
// //     display: none !important;
// //     -webkit-appearance: none;
// //   }
// // `;

// // const Overlay = styled.div`
// //   position: absolute;
// //   top: 20px;
// //   right: 20px;
// //   bottom: 20px;
// //   left: 20px;
// //   box-shadow: 0px 0px 20px 56px rgba(0, 0, 0, 0.6);
// //   border: 1px solid #ffffff;
// //   border-radius: 10px;
// // `;

// // const Flash = styled.div`
// //   position: absolute;
// //   top: 0;
// //   right: 0;
// //   bottom: 0;
// //   left: 0;
// //   opacity: 0;
// //   background-color: #ffffff;

// //   ${({ flash }) => {
// //     if (flash) {
// //       return css`
// //         animation: ${flashAnimation} 750ms ease-out;
// //       `;
// //     }
// //   }}
// // `;

// // const Button = styled.button`
// //   width: 75%;
// //   min-width: 100px;
// //   max-width: 250px;
// //   margin-top: 24px;
// //   padding: 12px 24px;
// //   background: silver;
// // `;

// // // import {
// // //   Video,
// // //   Canvas,
// // //   Wrapper,
// // //   Container,
// // //   Flash,
// // //   Overlay,
// // //   Button
// // // } from "./styles";

// // const CAPTURE_OPTIONS = {
// //   audio: false,
// //   video: { facingMode: "environment" },
// // };

// // function Camera({ onCapture, onClear }) {
// //   const canvasRef = useRef();
// //   const videoRef = useRef();

// //   const [container, setContainer] = useState({ width: 0, height: 0 });
// //   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
// //   const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
// //   const [isFlashing, setIsFlashing] = useState(false);

// //   const mediaStream = useUserMedia(CAPTURE_OPTIONS);
// //   const [aspectRatio, calculateRatio] = useCardRatio(1.586);
// //   const offsets = useOffsets(
// //     videoRef.current && videoRef.current.videoWidth,
// //     videoRef.current && videoRef.current.videoHeight,
// //     container.width,
// //     container.height
// //   );

// //   if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
// //     videoRef.current.srcObject = mediaStream;
// //   }

// //   function handleResize(contentRect) {
// //     setContainer({
// //       width: contentRect.bounds.width,
// //       height: Math.round(contentRect.bounds.width / aspectRatio),
// //     });
// //   }

// //   function handleCanPlay() {
// //     calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
// //     setIsVideoPlaying(true);
// //     videoRef.current.play();
// //   }

// //   function handleCapture() {
// //     const context = canvasRef.current.getContext("2d");

// //     context.drawImage(
// //       videoRef.current,
// //       offsets.x,
// //       offsets.y,
// //       container.width,
// //       container.height,
// //       0,
// //       0,
// //       container.width,
// //       container.height
// //     );

// //     canvasRef.current.toBlob((blob) => onCapture(blob), "image/jpeg", 1);
// //     setIsCanvasEmpty(false);
// //     setIsFlashing(true);
// //   }

// //   function handleClear() {
// //     const context = canvasRef.current.getContext("2d");
// //     context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
// //     setIsCanvasEmpty(true);
// //     onClear();
// //   }

// //   if (!mediaStream) {
// //     return null;
// //   }

// //   return (
// //     <Measure bounds onResize={handleResize}>
// //       {({ measureRef }) => (
// //         <Wrapper>
// //           <Container
// //             ref={measureRef}
// //             maxHeight={videoRef.current && videoRef.current.videoHeight}
// //             maxWidth={videoRef.current && videoRef.current.videoWidth}
// //             style={{
// //               height: `${container.height}px`,
// //             }}
// //           >
// //             <Video
// //               ref={videoRef}
// //               hidden={!isVideoPlaying}
// //               onCanPlay={handleCanPlay}
// //               autoPlay
// //               playsInline
// //               muted
// //               style={{
// //                 top: `-${offsets.y}px`,
// //                 left: `-${offsets.x}px`,
// //               }}
// //             />

// //             <Overlay hidden={!isVideoPlaying} />

// //             <Canvas
// //               ref={canvasRef}
// //               width={container.width}
// //               height={container.height}
// //             />

// //             <Flash
// //               flash={isFlashing}
// //               onAnimationEnd={() => setIsFlashing(false)}
// //             />
// //           </Container>

// //           {isVideoPlaying && (
// //             <Button onClick={isCanvasEmpty ? handleCapture : handleClear}>
// //               {isCanvasEmpty ? "Take a picture" : "Take another picture"}
// //             </Button>
// //           )}
// //         </Wrapper>
// //       )}
// //     </Measure>
// //   );
// // }

// import React, { Fragment, useState } from "react";
// import ReactDOM from "react-dom";
// import { Camera } from "components/camera/camera";
// import { Root, Preview, Footer, GlobalStyle } from "components/camera/styl";

// export default function Cam() {
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const [cardImage, setCardImage] = useState();

//   return (
//     <>
//       {isCameraOpen && (
//         <Camera
//           onCapture={(blob) => setCardImage(blob)}
//           onClear={() => setCardImage(undefined)}
//         />
//       )}

//       {cardImage && (
//         <div>
//           <h2>Preview</h2>
//           <Preview src={cardImage && URL.createObjectURL(cardImage)} />
//         </div>
//       )}

//       <Footer>
//         <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
//         <button
//           onClick={() => {
//             setIsCameraOpen(false);
//             setCardImage(undefined);
//           }}
//         >
//           Close Camera
//         </button>
//       </Footer>
//     </>
//   );
// }
