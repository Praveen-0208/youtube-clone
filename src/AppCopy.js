import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { MdSave, MdDelete, MdMenu } from "react-icons/md";
import { useState } from "react";
import { green, orange } from "@material-ui/core/colors";
import "fontsource-roboto";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #EBB14B, #EB6B4B )",
    marginBottom: 15,
    border: 0,
    borderRadius: 15,
    color: "white",
    passing: "0 30px",
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      // marginBottom: 15,
    },
  },
});

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Styled button</Button>;
};

const CheckBoxExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<MdDelete />}
          checkedIcon={<MdSave />}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing checkbox"
    />
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MdMenu />
                </IconButton>
                <Typography variant="h6">MUI Theming</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="body1">
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />
            <TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="Enter email"
              placeholder="praveen@gmail.com"
            />
            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>

            <CheckBoxExample />
            <ButtonGroup variant="contained">
              <Button color="primary" startIcon={<MdSave />}>
                Save
              </Button>
              <Button color="secondary" startIcon={<MdDelete />}>
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
