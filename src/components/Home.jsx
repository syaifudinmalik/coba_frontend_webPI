import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Item from "@mui/material/ListItem";
import StickyNavbar from "./StickyNavbar";
import {
  Navbar,
  MobileNav,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Grid } from "@mui/material";
import { Carousel } from "flowbite-react";

//
const MediaCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345}} className="shadow-lg cursor-pointer">
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title={props.key}
        className="box-content text-black bg-green-100"
        alt="gambar"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

const CardMenuRight = (props) => {
  return (
    <div className="w-9/12 mb-3">
      <Card className="card shadow-lg rounded-md border flex flex-col items-center">
        <div className="flex flex-row items-center justify-evenly">
          <div className="w-1/2 mx-10">
            <div className="font-bold text-lg">{props.title}</div>
            <p>{props.description}</p>
          </div>
          <div className="my-2 w-1/2 h-40 rounded-md bg-green-100 box-content flex items-center justify-center">
            <img src="" alt="gambar" />
          </div>
        </div>
        <button className="hover:bg-gray-100 w-full h-10 rounded-bl-md rounded-br-md border-t">
          Learn More
        </button>
      </Card>
    </div>
  );
};
const CardMenuLeft = (props) => {
  return (
    <div className="w-9/12 mb-3">
      <Card className="card shadow-lg rounded-md border flex flex-col items-center">
        <div className="w-11/12 flex flex-row items-center">
          <div className="my-2 w-1/2 h-40 rounded-md bg-green-100 box-content flex items-center justify-center">
            <img src="" alt="gambar" />
          </div>
          <div className="mx-10 w-1/2">
            <div className="font-bold text-lg">{props.title}</div>
            <p>{props.description}</p>
          </div>
        </div>
        <button className="hover:bg-gray-100 w-full h-10 rounded-bl-md rounded-br-md border-t">
          Learn More
        </button>
      </Card>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full lg:w-9/12 h-full flex flex-col-reverse items-center justify-between">
      <div className="lg:w-3/4 w-3/4 lg:text-center mb-5">
        <h2 className="font-bold lg:text-2xl mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          quas similique doloribus unde vitae repellat omnis ea corrupti sunt?
          In consequatur fuga temporibus reprehenderit ipsum debitis, rem
          praesentium tenetur natus illo tempora esse quaerat. Nostrum, vero.
          Dicta sapiente odio quisquam et molestias? Ipsum laudantium repellat
          sunt doloremque quos minus illum!
        </p>
        <button className="bg-green-800 text-white rounded-md w-28 h-10 shadow-md hover:bg-green-700 transition-colors ease-in-out mt-5">
          Learn More
        </button>
      </div>
      <div className="lg:w-full h-60 lg:h-4/6 flex items-center justify-center w-11/12 box-border">
      <Carousel className="bg-gray-200">
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
      </div>
    </div>
  );
};

const Home = () => {
  const Lists = [
    {
      key: "jmtPria",
      title: "Jamaah Tahlil Pria",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reiciendis?`,
    },
    {
      key: "jmtWanita",
      title: "Jamaah Tahlil Wanita",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reiciendis?hhbbgyftyvv gvuhvygv vghfrtxc gvh gvuhtyf tfuighft hguhgffn ggugrxr yggygyuh gg gyhhuy`,
    },
    {
      key: "mbtMasjid",
      title: "Marbot Masjid",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, officiis excepturi. Sunt id molestiae quo quos corporis eaque. Obcaecati, totam!`,
    },
    {
      key: "tkmrMasjid",
      title: "Takmir Masjid",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus maxime aspernatur assumenda similique expedita voluptatibus fugit aliquam, autem reprehenderit vero corporis vitae laborum quaerat, sequi explicabo minima, error dignissimos asperiores.`,
    },
    {
      key: "guruKeagamaan",
      title: "Guru Keagamaan",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reiciendis?`,
    },
    {
      key: "mudin",
      title: "Keagamaan Monita/Mudin",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, officiis excepturi. Sunt id molestiae quo quos corporis eaque. Obcaecati, totam!`,
    },
  ];
  return (
    <div className="lg:h-[250vh] w-full flex flex-col items-center justify-between">
      <StickyNavbar />
      <div className="flex flex-col items-center justify-center h-full">
        <Hero />
        <div className="lg:w-9/12 flex flex-col items-center justify-evenly lg:grid lg:grid-cols-3 gap-5 mb-5 lg:mt-0 mx-10">
          {Lists.map((list) => (
            <MediaCard
              title={list.title}
              description={list.description}
              key={list.key}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
