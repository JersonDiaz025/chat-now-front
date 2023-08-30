import { styled, Box } from "@mui/material";

export const StyledChatForm = styled('form')(({ theme }) => ({

  display: 'flex',
  //background: '#fff',
  width: '100%',
  padding: '13px',
  //borderRadius: '1.2em',
  //border: 'none',
  //position: 'absolute',
  //bottom: 0,
  '& input': {
    width: '100%',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: theme.mode.textColor,
    //textTransform: 'uppercase',

  },

  '& input::placeholder': {
    color: theme.mode.textColor,
  },
}));

export const StyledButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '1',
  alignItems: 'flex-end',

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },

  '& button': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.2em',
    width:  '3.4em',
    height: '3.4em',
    border: 'none',
    borderRadius:'1.9em',
    background: '#33BF54',
    //boxShadow:'rgba(32, 112, 198, 0.7) 0 0 10px',
    aspectRatio: '1/1',
    transition: '.3s ease-in-out all',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      padding: '0.7em',
    },
  },

  '& svg': {
    fill: '#fff',
    transition: '.3s ease-in-out all',
  },

  '& button:hover, a:hover': {
    background: '',
    boxShadow: 'rgba(32, 112, 198, 0.7) 0 0 10px',
    opacity: 0.8,
  },

  '& a:hover svg': {
    fill: '#fff',
  },
}));
