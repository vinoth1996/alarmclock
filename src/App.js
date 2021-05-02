import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from "@material-ui/core";
import SetTimer from "./components/SetTimer";
import Hours from "./components/Hours";
import Minutes from "./components/Minutes";
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch({ type: 'HOUR' });
      dispatch({ type: 'MINUTES' });
    }, 5000);
  })

  return (
    <div className="App">
      <Grid container spacing={3} className="Timer">
        <Grid item xs={12}>
          <SetTimer />
        </Grid>
        <Grid className="hrMin">
          <Grid item xs={6}>
            <Hours />
          </Grid>
          <Grid item xs={6}>
            <Minutes />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
