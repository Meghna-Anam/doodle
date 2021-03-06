import { AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  toolbar: {
    margin: '0 auto',
  },
  h5: {
    color: 'white',
  },
}))

const Navbar: React.FC = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.h5}>
          Country and Weather Info
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
