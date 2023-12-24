import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import { SearchBar } from "./index.js";

const Navbar = () => (
  <Stack
    direction={"row"}
    alignItems="center"
    justifyContent="space-between"
    p={2}
    sx={{ position: "sticky", top: 0, background: "#000" }}
  >
    <Link to="/" sx={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar p={2} sx={{ background: "white" }}></SearchBar>
  </Stack>
);

export default Navbar;
