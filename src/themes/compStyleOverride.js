export default function componentStyleOverrides(theme) {
  const bgColor = theme.colors?.background;
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: "20px",
          "&.MuiButton-containedSecondary": {
            backgroundColor: theme.colors?.darkBackground,
            color: theme.colors?.darkTextPrimary,
            border: "solid 1px #585858",
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.MuiIconButton-root": {
            ".MuiTypography-root": {
              color: theme.colors?.darkLevel1,
            },
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          background: theme.paper,
        },
        rounded: {
          borderRadius: `20px`,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.colors?.textDark,
          padding: "24px",
        },
        title: {
          fontSize: "1.125rem",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          paddingTop: "10px",
          paddingBottom: "10px",
          "&.Mui-selected": {
            color: theme.darkTextSecondary,
            backgroundColor: "inherit",
            "&:hover": {
              backgroundColor: "inherit",
              color: theme.darkTextSecondary,
            },
          },
          "&:hover": {
            backgroundColor: "inherit",
            color: theme.textDark,
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          minWidth: "36px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.textDark,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: "30px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.colors?.grey900,
          },
          "&:hover $notchedOutline": {
            borderColor: theme.colors?.grey700,
          },
          "&.MuiInputBase-multiline": {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: bgColor,
          padding: "15.5px 14px",
          borderRadius: "27px",
          "&.MuiInputBase-inputSizeSmall": {
            padding: "10px 14px",
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: "30px",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: theme.colors?.grey300,
          },
        },
        mark: {
          backgroundColor: theme.paper,
          width: "4px",
        },
        valueLabel: {
          color: theme?.colors?.primaryLight,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 0.5,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.colors?.primaryLight,
          background: theme.colors?.darkPaper,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-deletable .MuiChip-deleteIcon": {
            color: "inherit",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.colors?.primaryDark,
          background: theme.colors?.grey700,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: theme.colors?.primaryLight,
          "&:hover": {
            color: theme.colors?.primaryMain,
          },
        },
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-page": {
            border: "solid 1px #202020",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: theme.colors?.primaryMain,
            color: theme.colors?.grey900,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          "& .MuiTypography-body1": {
            color: "#ffffff",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          "& .MuiPaper-root": {
            borderRadius: "5px",
          },
        },
      },
    },
  };
}
