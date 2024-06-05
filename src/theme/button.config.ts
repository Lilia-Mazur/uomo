import { Components, Theme } from '@mui/material';

export const MuiButtonConfig: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 0,
      boxShadow: 'none',
      textTransform: 'uppercase',
      fontSize: 14,
      lineHeight: 2,
      padding: theme.spacing(2, 6),
      '&:hover, &:active': {
        boxShadow: 'none'
      }
    }),
    containedPrimary: ({ theme: { palette } }) => ({
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
      '&:hover': {
        backgroundColor: palette.action.hover
      }
    })
  }
};
