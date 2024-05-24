import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "react-animated-3d-card";

import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { MdOutlineSafetyCheck } from "react-icons/md";

import { Link } from "react-router-dom";

const cardstyle = {
  width: "320px",
  height: "300px",

  cursor: "pointer",
  backgroundColor: "white",
  "@media (maxWidth: 600px)": {
    width: "100%", // Set the width to 100% for screens smaller than 600px
    textAlign: "center", // Center text horizontally
    display: "flex", // Center text vertically
    flexDirection: "column", // Stack text elements vertically
    justifyContent: "center",
  },
};

const cards = [
  {
    title: "Franchise Development Program ",
    text: " Market research, detailed expansion plan, financial model creation, designing of marketing collaterals, preparing legal documents ",
    icon: <FaMoneyBillTrendUp />,
  },
  {
    title: "Marketing & Promotion of Brands",
    text: "Digital marketing, events & exhibitions, franchise lead generation, road shows etc.",
    icon: <MdOutlineLocalLibrary />,
  },
  {
    title: "Appointment of Franchise Partners ",
    text: "Dedicated key account manager for your brand, lead filtrations, concalls / meetings with potential franchise partners / participation in single or multi brands event & exhibitions  .",
    icon: <MdOutlineSafetyCheck />,
  },
];

const listItems = cards.map((item) => (
  <Grid
    item
    columns={{ xs: 1, sm: 2, md: 3 }}
    key={item.title}
    sx={{ margin: "auto" }}
  >
    <Card style={cardstyle}>
      <CardContent className="flex flex-col items-center">
        <div className="blue-light-text md:text-5xl text-3xl">{item.icon}</div>
        {/* React icon */}
        <Typography
          sx={{
            marginTop: 4,
            fontSize: "20px",
            fontWeight: 700,
            color: "black",
            textAlign: "center",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            marginTop: 1,
            fontSize: "14px",
            fontWeight: 400,
            color: "gray",
            textAlign: "center",
          }}
          variant="body2"
          color="text.secondary"
        >
          {item.text}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
));
const BrandCrad = () => {
  return (
    <Link to={"/contact"}>
      <Box>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {listItems}
        </Grid>
      </Box>
    </Link>
  );
};

export default BrandCrad;
