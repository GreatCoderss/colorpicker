
import {makeStyles} from '@material-ui/core'

export default makeStyles ((theme)=>({
  App:{
  textAlign:'center'
  },
  AppLogo:{
    height: '40vmin',
    pointerEvents: none,
  },
  AppHeader:{
    backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: calc(10px + 2vmin),
  color: 'white',
  },
  AppLink:{
    color:'#61dafb'
  }
}))

