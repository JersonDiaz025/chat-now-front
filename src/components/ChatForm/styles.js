import { styled, Box } from "@mui/material";

export const StyledChatForm = styled('form')(({ theme }) => ({
  display: 'flex',
  //background: theme.mode.colorHeader,
  width: '100%',
  padding: '5px',
  borderRadius: '12px',

  //borderBottomLeftRadius: '12px',
  //borderBottomRightRadius: '12px',
  //border: 'none',
  //position: 'absolute',
  //bottom: 0,
  border: theme.mode.border,

  '& input': {
    width: '100%',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: theme.mode.textColor,
    paddingLeft: '10px'
    //textTransform: 'uppercase',

  },

  '& input::placeholder': {
    color: theme.mode.textColor,
    //paddingLeft: '10px'
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
    background: '#25c2a0',
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
