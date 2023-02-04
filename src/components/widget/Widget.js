import React from 'react'
import './Widget.scss'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const Widget = ({ type }) => {
    let data;
  
    //temporary
    // const amount = 100;
    // const diff = 20;
  
    switch (type) {
      case "room":
        data = {
          title: "Rooms",
        //   isMoney: false,
          link: "See all rooms",
          icon: (
            <GroupSharpIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        };
        break;
      case "member":
        data = {
          title: "Members",
      
          link: "View all members",
          icon: (
            <PersonOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        };
        break;
      case "coremember":
        data = {
          title: "CoreMember",
          
          link: "View all CoreMembers",
          icon: (
            <PeopleAltIcon
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        };
        break;
      case "welfarecenter":
        data = {
          title: "WelfareCenter",
        
          link: "See list of WelfareCenter",
          icon: (
            <VolunteerActivismIcon
              className="icon"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
        };
        break;
      default:
        break;
    }
  
    return (
      <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          {/* <span className="counter">
            {data.isMoney && "$"} {amount}
          </span> */}
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          {/* <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
          </div> */}
          {data.icon}
        </div>
      </div>
    );
  };

export default Widget
