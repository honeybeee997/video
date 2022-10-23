import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Video, Notifiactions, Chats, Friends } from "./pages/Index";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video" element={<Video />} />
      <Route path="/notifications" element={<Notifiactions />} />
      <Route path="/messages" element={<Chats />} />
      <Route path="/friends" element={<Friends />} />
    </Routes>
  );
};

export default App;
