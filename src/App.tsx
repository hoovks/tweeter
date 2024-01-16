import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Explore from "./pages/explore/Explore";
import Homepage from "./pages/homepage/Homepage";
import ProfilePage from "./pages/profile-page/ProfilePage";
import SignIn from "./pages/auth/Auth";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/user" element={<ProfilePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
