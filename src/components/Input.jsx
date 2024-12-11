import * as React from "react";
import { Grid, TextField, Button, Alert } from "@mui/material";
import { addAccount, getData } from "../storage/models";

export default ({ setAccounts }) => {
  const [text, setText] = React.useState("");
  const [error, setError] = React.useState("");

  const onAddNewAccount = () => {
    let userId;
    setError("");

    if (text === "") return setError("Please paste a twitter link or user id");

    if (text.startsWith("https://x.com/")) {
      userId = text.split("https://x.com/")[1];
    } else if (text.startsWith("https://twitter.com/")) {
      userId = text.split("https://twitter.com/")[1];
    } else if (text.startsWith("https://www.twitter.com/")) {
      userId = text.split("https://www.twitter.com/")[1];
    } else if (text.startsWith("https://www.x.com/")) {
      userId = text.split("https://www.x.com/")[1];
    } else if (text.startsWith("@")) {
      userId = text.split("@")[1];
    } else {
      userId = text;
    }

    const tweets = [
      {
        text: "Tweet mock URL",
        url: "mock url",
        keywords: [
          {
            keyword: "mock1",
            relatedTokens: [
              "related token 1",
              "related token 2",
              "related token 3",
            ],
          },
        ],
      },
    ];

    addAccount({ userId, tweets });
    setAccounts(getData());
    setText("");
  };

  // Render
  return (
    <Grid>
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid item xs={9}>
          <TextField
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            helperText="Paste Twitter link or user id"
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              },
              "& .MuiFormHelperText-root": {
                color: "white",
              },
            }}
          />
        </Grid>
        <Grid item size={2} sx={{ margin: "0.5rem" }}>
          <Button variant="contained" onClick={onAddNewAccount}>
            Add New Account
          </Button>
          <Button variant="contained" color="success">
            Refresh Data
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{ marginLeft: "25%", marginRight: "25%", marginBottom: "1rem" }}
      >
        {error && (
          <Alert variant="filled" severity="error">
            Test
          </Alert>
        )}
      </Grid>
    </Grid>
  );
};
