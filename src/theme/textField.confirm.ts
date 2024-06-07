import { Components, Theme } from '@mui/material';

export const MuiTextFieldConfig: Components<Theme>['MuiTextField'] = {
  styleOverrides: {
    root: () => ({
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderWidth: '2px',
          borderRadius: '0'
        },
        '&:hover fieldset': {
          borderWidth: '2px'
        },
        '&.Mui-focused fieldset': {
          borderWidth: '2px'
        }
      }
    })
  }
};
