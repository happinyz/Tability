import React, { useEffect, useState } from "react";
import "./App.css";
import RunningTime from "./components/RunningTime";
import Word from "./components/Word";
import GithubCalendar from "./components/GithubCalendar";
import { fetchBackgroundImages, ImageResponse } from "./helpers/requests";
import Widgets from "./components/Widgets";
import Background from "./components/Background";

// TODO: Study mode, notes mode

// console.log(fetchBackgroundImages());

function App() {
  const [background, setBackground] = useState<ImageResponse>(
    {} as ImageResponse
  );

  // useEffect(() => {
  //   getBackgroundImage();
  // }, []);

  // const getBackgroundImage = async () => {
  //   const image = await fetchBackgroundImages();
  //   setBackground(image);
  // };

  // TODO: Move individual widgets to generalized widget components
  return (
    <div
      className={"app"}
      style={{
        // backgroundImage: `url(${background.rawUrl})`,
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"})`,
      }}>
      <Widgets />
    </div>
  );
}

export default App;
