import icon from "../assets/images/logo192.png";
import thumbnail_1 from "../assets/images/thumbnail_1.png";
import thumbnail_2 from "../assets/images/thumbnail_2.jpeg";
import thumbnail_3 from "../assets/images/thumbnail_3.jpeg";
import { nanoid } from "nanoid";
import {
  MdPlaylistAdd,
  MdWatchLater,
  MdNotInterested,
  MdRemoveCircleOutline,
  MdFlag,
  MdPlaylistPlay,
} from "react-icons/md";
import * as dimensions from "../constants/dimensions";
import * as colors from "../constants/colors";

const db_mock_data = [
  {
    id: nanoid(10),
    title: "Git tutorial for beginners: Learn Git in 1 Hour",
    channelName: "CodeMine",
    isVerified: false,
    views: "134K",
    uploadedOn: "1 year ago",
    duration: "1:10:34",
    channelLogo: icon,
    videoLink: thumbnail_1,
  },
  {
    id: nanoid(10),
    title: "What is API?",
    channelName: "CodeMine",
    isVerified: true,
    views: "34.2K",
    uploadedOn: "2 years ago",
    duration: "8:45",
    channelLogo: icon,
    videoLink: thumbnail_2,
  },
  {
    id: nanoid(10),
    title: "AJAX Crash Course (Vanilla Javascript)",
    channelName: "CodeMine",
    isVerified: false,
    views: "34K",
    uploadedOn: " 1 year ago",
    duration: "29:32",
    channelLogo: icon,
    videoLink: thumbnail_3,
  },
  {
    id: nanoid(10),
    title:
      "Learn React JS with Project in 2 Hours | React Tutorial for Beginners | React Project Crash Course",
    channelName: "CodeMine",
    isVerified: true,
    views: "987K",
    uploadedOn: "5 years ago",
    duration: "2:09:10",
    channelLogo: icon,
    videoLink: thumbnail_2,
  },
  {
    id: nanoid(10),
    title:
      "Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks",
    channelName: "CodeMine",
    isVerified: false,
    views: "123K",
    uploadedOn: "5 years ago",
    duration: "56:01",
    channelLogo: icon,
    videoLink: thumbnail_3,
  },
  {
    id: nanoid(10),
    title: "Redux Crash Course with React",
    channelName: "CodeMine",
    isVerified: false,
    views: "2M",
    uploadedOn: "7 years ago",
    duration: "34:45",
    channelLogo: icon,
    videoLink: thumbnail_1,
  },
  {
    id: nanoid(10),
    title: "10 React Hooks Explained // Plus Build your own from Scratch",
    channelName: "CodeMine",
    isVerified: true,
    views: "23K",
    uploadedOn: "6 years ago",
    duration: "45:12",
    channelLogo: icon,
    videoLink: thumbnail_3,
  },
  {
    id: nanoid(10),
    title:
      "Material UI Crash Course - Material UI in React Project Tutorial [2021]",
    channelName: "CodeMine",
    isVerified: false,
    views: "1.5K",
    uploadedOn: "2 years ago",
    duration: "35:25",
    channelLogo: icon,
    videoLink: thumbnail_2,
  },
  {
    id: nanoid(10),
    title: "Git tutorial for beginners: Learn Git in 1 Hour",
    channelName: "CodeMine",
    isVerified: false,
    views: "134K",
    uploadedOn: "1 year ago",
    duration: "1:10:34",
    channelLogo: icon,
    videoLink: thumbnail_1,
  },
  {
    id: nanoid(10),
    title: "What is API?",
    channelName: "CodeMine",
    isVerified: true,
    views: "34.2K",
    uploadedOn: "2 years ago",
    duration: "8:45",
    channelLogo: icon,
    videoLink: thumbnail_2,
  },
  {
    id: nanoid(10),
    title: "AJAX Crash Course (Vanilla Javascript)",
    channelName: "CodeMine",
    isVerified: false,
    views: "34K",
    uploadedOn: " 1 year ago",
    duration: "29:32",
    channelLogo: icon,
    videoLink: thumbnail_3,
  },
  {
    id: nanoid(10),
    title:
      "Learn React JS with Project in 2 Hours | React Tutorial for Beginners | React Project Crash Course",
    channelName: "CodeMine",
    isVerified: true,
    views: "987K",
    uploadedOn: "5 years ago",
    duration: "2:09:10",
    channelLogo: icon,
    videoLink: thumbnail_2,
  },
];

const chipBarData = [
  { id: nanoid(10), title: "All" },
  { id: nanoid(10), title: "Game shows" },
  { id: nanoid(10), title: "Comedy" },
  { id: nanoid(10), title: "Sci-fi films" },
  { id: nanoid(10), title: "Python" },
  { id: nanoid(10), title: "JavaScript" },
  { id: nanoid(10), title: "3D Modelling" },
  { id: nanoid(10), title: "DevOps" },
  { id: nanoid(10), title: "Computers" },
  { id: nanoid(10), title: "3D Printing" },
  // { id: nanoid(10), title: "Computers and information technology" },
  { id: nanoid(10), title: "Desks" },
  // { id: nanoid(10), title: "Swimming Pools" },
  // { id: nanoid(10), title: "History" },
  // { id: nanoid(10), title: "Trick shots" },
  { id: nanoid(10), title: "Live" },
  // { id: nanoid(10), title: "New to you" },
];

const dropdownMenu = [
  {
    id: nanoid(10),
    icon: (
      <MdPlaylistPlay
        size={dimensions.DEFAULT_ICON_SIZE}
        color={colors.MENU_ICON_COLOR}
      />
    ),
    title: "Add to queue",
  },
  {
    id: nanoid(10),
    icon: (
      <MdWatchLater
        size={dimensions.DEFAULT_ICON_SIZE}
        color={colors.MENU_ICON_COLOR}
      />
    ),
    title: "Save to watch later",
  },
  {
    id: nanoid(10),
    icon: (
      <MdPlaylistAdd
        size={dimensions.DEFAULT_ICON_SIZE}
        color={colors.MENU_ICON_COLOR}
      />
    ),
    title: "Save to playlist",
  },
  {
    id: nanoid(10),
    icon: (
      <MdNotInterested
        size={dimensions.DEFAULT_ICON_SIZE}
        color={colors.MENU_ICON_COLOR}
      />
    ),
    title: "Not interested",
  },
  {
    id: nanoid(10),
    icon: (
      <MdRemoveCircleOutline
        size={dimensions.DEFAULT_ICON_SIZE}
        color={colors.MENU_ICON_COLOR}
      />
    ),
    title: "Don' t recommend channel",
  },
  {
    id: nanoid(10),
    icon: (
      <MdFlag
        size={dimensions.DEFAULT_ICON_SIZE}
        color={colors.MENU_ICON_COLOR}
      />
    ),
    title: "Report",
  },
];
export default { db_mock_data, chipBarData, dropdownMenu };
