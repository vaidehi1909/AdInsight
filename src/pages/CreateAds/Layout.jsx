import React, { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const handleToggleItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const onNextClick = () => {
    if (selectedItems.length > 0) {
      navigate(`/ad/new/${selectedItems.join("_")}`);
    }
  };

  // Create a custom theme with the desired checkbox color
  const theme = createTheme({
    components: {
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: "lightgray",
          },
        },
      },
    },
  });

  return (
    <Card variant="outlined" sx={{ margin: "0px 10px" }}>
      <CardHeader title={<Typography variant="h6">Create Ads</Typography>} />
      <CardContent>
        <Grid container spacing={8}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <ThemeProvider theme={theme}>
                  <FormControlLabel
                    sx={{ color: "lightgray" }}
                    control={
                      <Checkbox
                        checked={selectedItems.includes("text")}
                        onChange={() => handleToggleItem("text")}
                      />
                    }
                    label=""
                  />
                </ThemeProvider>
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/text-ad.png"
                  alt="text-ad"
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center", marginTop: "10px" }}
                >
                  Create
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Text Ad
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "start" }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <ThemeProvider theme={theme}>
                  <FormControlLabel
                    sx={{ color: "lightgray" }}
                    control={
                      <Checkbox
                        checked={selectedItems.includes("media")}
                        onChange={() => handleToggleItem("media")}
                      />
                    }
                    label=""
                  />
                </ThemeProvider>
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/media-ad.png"
                  alt="media-ad"
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center", marginTop: "10px" }}
                >
                  Create
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Media Ad
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", paddingTop: "70px" }}>
        <Button
          variant="contained"
          size="large"
          onClick={onNextClick}
          disabled={selectedItems.length === 0}
        >
          Next
        </Button>
      </CardActions>
    </Card>
  );
};

export default Layout;
