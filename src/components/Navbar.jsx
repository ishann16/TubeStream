import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/013/929/828/small_2x/eps10-white-live-video-streaming-or-broadcasting-icon-isolated-on-black-background-online-education-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-app-vector.jpg" alt="logo" height={70} width={100} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
