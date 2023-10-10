/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { isEmpty } from "utils/common";

const { Badge, Avatar } = require("@mui/material");

const ClientAvatar = ({ name, avatar, number, status, size, sx }) => {

  let msx = {}
  if (sx) {
    msx = sx
  }
  if (size) {
    msx.width = size
    msx.height = size
  }

  const [avatarData, setAvatarData] = useState("");

  useEffect(() => {
    if (avatar) {
      setAvatarData(avatar);
    }
  }, [avatar]);

  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name) {
    if (isEmpty(name)) {
      name = "Unknown"
    }

    const nameArray = name.split(' ')
    let displayName = `${name[0].toUpperCase()}`
    if (nameArray.length > 1) {
      if (!isEmpty(nameArray[0][0]) && !isEmpty(nameArray[1][0])) {
        displayName = `${nameArray[0][0].toUpperCase()}${nameArray[1][0].toUpperCase()}`
      }
      else if (!isEmpty(nameArray[0][0])) {
        displayName = `${nameArray[0][0].toUpperCase()}`
      }
      else if (!isEmpty(nameArray[1][0])) {
        displayName = `${nameArray[1][0].toUpperCase()}`
      }
    }
    
    return {
      sx: {
        ...msx,
        bgcolor: stringToColor(name),
      },
      children: displayName,
    };
  }

  return (
    status === undefined ? (
      number === undefined ? (
        <Avatar {...stringAvatar(name)} alt={name} src={avatar} />
      ) : (
        <Badge color="primary" badgeContent={number} overlap="circular">
          <Avatar {...stringAvatar(name)} alt={name} src={avatar} />
        </Badge>
      )
    ) : (
      number === undefined ? (
        <Badge
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          color={status ? "success" : "warning"}
          badgeContent=""
          variant="dot"
          sx={{
            "& .MuiBadge-dot": {
              margin: "3px",
              height: "5px",
              minWidth: "5px",
            },
          }}
        >
          <Avatar {...stringAvatar(name)} alt={name} src={avatar} />
        </Badge>
      ) : (
        <Badge color="primary" badgeContent={number} overlap="circular">
          <Badge
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            color={status ? "success" : "warning"}
            badgeContent=""
            variant="dot"
            sx={{
              "& .MuiBadge-dot": {
                margin: "3px",
                height: "5px",
                minWidth: "5px",
              },
            }}
          >
            <Avatar {...stringAvatar(name)} alt={name} src={avatar} />
          </Badge>
        </Badge>
      )
    )
  );
};

export default ClientAvatar;
