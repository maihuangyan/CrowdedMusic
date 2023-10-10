/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

export default function themeTypography(theme) {
  return {
    fontFamily: theme?.customization?.fontFamily,
    h6: {
      fontWeight: 500,
      color: theme.heading,
      fontSize: "0.75rem",
    },
    h5: {
      fontSize: "0.875rem",
      color: theme.heading,
      fontWeight: 500,
    },
    h4: {
      fontSize: "1rem",
      color: theme.heading,
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25rem",
      color: theme.heading,
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      color: theme.heading,
      fontWeight: 700,
    },
    h1: {
      fontSize: "2.125rem",
      color: theme.heading,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: theme.textDark,
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      color: theme.darkTextSecondary,
    },
    caption: {
      fontSize: "0.75rem",
      color: theme.darkTextSecondary,
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334em",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334em",
      color: theme.textDark,
    },
    button: {
      textTransform: "capitalize",
    },
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      "& > label": {
        top: 23,
        left: 0,
        color: theme.grey500,
        '&[data-shrink="false"]': {
          top: 5,
        },
      },
      "& > div > input": {
        padding: "30.5px 14px 11.5px !important",
      },
      "& legend": {
        display: "none",
      },
      "& fieldset": {
        top: 0,
      },
    },
    mainContent: {
      backgroundColor: theme.background,
      width: "100%",
      minHeight: "calc(100vh - 67px)",
      flexGrow: 1,
      marginTop: "67px",
    },
    menuCaption: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: theme.heading,
      padding: "6px",
      textTransform: "capitalize",
      marginTop: "10px",
    },
    subMenuCaption: {
      fontSize: "0.6875rem",
      fontWeight: 500,
      color: theme.darkTextSecondary,
      textTransform: "capitalize",
    },
    commonAvatar: {
      cursor: "pointer",
      borderRadius: "8px",
    },
    smallAvatar: {
      width: "22px",
      height: "22px",
      fontSize: "1rem",
    },
    mediumAvatar: {
      width: "34px",
      height: "34px",
      fontSize: "1.2rem",
    },
    largeAvatar: {
      width: "44px",
      height: "44px",
      fontSize: "1.5rem",
    },
    settingsInfo: {
      fontSize: "1rem",
      color: theme.colors.gold,
      padding: "10px 0"
    },
    settingsInfo1: {
      fontSize: "0.875rem",
      color: theme.heading,
      padding: "0 10px",
    },
    positionLeft: {
      position: "absolute",
      left: "18px",
      bottom: "-18px"
    },
    positionRight: {
      position: "absolute",
      right: "18px",
      bottom: "-18px"
    },
    positionLeft1: {
      position: "absolute",
      left: "-20px",
      bottom: "-5px"
    },
    positionRight1: {
      position: "absolute",
      right: "-18px",
      bottom: "-5px"
    },
  };
}
