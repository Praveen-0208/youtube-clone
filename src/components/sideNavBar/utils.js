import {
  MdHome,
  MdExplore,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdWatchLater,
  MdThumbUp,
} from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { nanoid } from "nanoid";

const menus = [
  {
    id: nanoid(10),
    title: "",
    type: "group",
    divide: true,
    children: [
      {
        id: nanoid(10),
        title: "Home",
        icon: <MdHome />,
        type: "item",
      },
      {
        id: nanoid(10),
        title: "Explore",
        icon: <MdExplore />,
        type: "item",
      },
      {
        id: nanoid(10),
        title: "Subscriptions",
        icon: <MdSubscriptions />,
        type: "item",
      },
    ],
  },
  {
    id: nanoid(10),
    title: "",
    type: "group",
    icon: "",
    divide: true,
    children: [
      {
        id: nanoid(10),
        title: "Library",
        icon: <MdVideoLibrary />,
        type: "item",
      },
      {
        id: nanoid(10),
        title: "History",
        icon: <MdHistory />,
        type: "item",
      },
      {
        id: nanoid(10),
        title: "Your videos",
        icon: <RiVideoLine />,
        type: "item",
      },
      {
        id: nanoid(10),
        title: "Watch later",
        icon: <MdWatchLater />,
        type: "item",
      },
      {
        id: nanoid(10),
        title: "Liked videos",
        icon: <MdThumbUp />,
        type: "item",
      },
    ],
  },
  {
    title: "",
    type: "",
    icon: "",
    children: [],
  },
  {
    title: "",
    type: "",
    icon: "",
    children: [],
  },
  {
    title: "",
    type: "",
    icon: "",
    children: [],
  },
];

export default menus;
