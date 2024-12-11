import * as React from "react";
import { Grid, TextField, Button } from "@mui/material";
import Input from "../components/Input";
import Accordion from "../components/Accordion";
import { getData } from "../storage/models";

export default () => {
  const [accounts, setAccounts] = React.useState(getData());

  return (
    <>
      <Grid
        container
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <Grid item>
          <Input setAccounts={setAccounts} />
        </Grid>
        <Grid item>
          <Accordion accounts={accounts} setAccounts={setAccounts} />
        </Grid>
      </Grid>
    </>
  );
};
