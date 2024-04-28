import { Avatar, Box, Card, DialogContent, DialogTitle, Grid, TextField, ThemeProvider, Typography, useTheme } from '@mui/material';
import './App.css';
import Dialog from '@mui/material/Dialog';
import { useTranslation } from 'react-i18next';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import data from "./data.json"
import axios from "axios";
import { useEffect, useState } from 'react';


function Product() {
  let { t } = useTranslation()
  const theme = useTheme();
  let [data, setData] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");

        if (response?.status == 200) {
          console.log(response?.data?.results[0], "results")
          setData(response?.data?.results[0])
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (

    <Dialog open={true} fullWidth={"xl"} sx={{ p: 8 }}>
      <DialogTitle sx={{ p: 3 }}>
        <Typography>
          {t("Adhar details")}
        </Typography>
      </DialogTitle>

      <DialogContent dividers sx={{ p: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card style={{ height: "40%", width: "90%" }}>
              <img loading="lazy" src={data?.picture?.large} style={{ height: "100%", width: "100%" }} />
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card
                  sx={{
                    p: 2.5,
                    background: 'linear-gradient(135deg, #434343 6.56%, #000000 93.57%)',
                  }}

                >
                  <Box
                    pb={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        component="div"
                        variant="h5"
                        sx={{
                          color: `rgba(255, 255, 255, 0.7)`

                        }}

                      >
                        {data?.name?.first}
                      </Typography>

                      <Typography
                        gutterBottom
                        component="div"
                        variant="body"
                        sx={{
                          // color: `rgba(255, 255, 255, 0.7)`
                          color: "white"
                        }}

                      >
                        {t("First Name")}
                      </Typography>
                    </Box>
                    <Avatar
                      variant="rounded"
                      sx={{
                        width: `${theme.spacing(7)}`,
                        height: `${theme.spacing(7)}`,
                        backgroundColor: `white`,
                        color: `#57ca22`
                      }}
                    >
                      <AddCircleOutlineIcon />
                    </Avatar>
                  </Box>

                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card
                  sx={{
                    p: 2.5,
                    color: "#223354",
                    background: `linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)`
                  }}
                >
                  <Box
                    pb={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        component="div"
                        variant="h5"
                        sx={{
                          color: `rgba(255, 255, 255, 0.7)`
                        }}
                      >
                        {data?.name?.last}
                      </Typography>
                      <Typography
                        gutterBottom
                        component="div"
                        variant="body"
                        sx={{
                          // color: `rgba(255, 255, 255, 0.7)`
                          color: "white"
                        }}

                      >
                        {t("last Name")}
                      </Typography>

                    </Box>
                    <Avatar
                      variant="rounded"
                      sx={{
                        width: `${theme.spacing(7)}`,
                        height: `${theme.spacing(7)}`,
                        background: `white`,
                        color: `#FFA319`
                      }}
                    >
                      <AddCircleOutlineIcon />
                    </Avatar>
                  </Box>

                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card
                  sx={{
                    p: 2.5,
                    color: "#223354",
                    background: `linear-gradient(to bottom, #00b09c, #96c95d)`
                  }}>
                  <Box
                    display="flex"
                    alignItems="center"
                    pb={2}
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        component="div"
                        variant="h5"
                        sx={{
                          color: `rgba(255, 255, 255, 0.7)`
                       
                        }}
                      >
                        {data?.gender}
                      </Typography>
                      <Typography
                        gutterBottom
                        component="div"
                        variant="body"
                        sx={{
                          color: "white"
                         
                        }}

                      >
                        {t("Gender")}
                      </Typography>
                    </Box>
                    <Box>
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: `${theme.spacing(7)}`,
                          height: `${theme.spacing(7)}`,
                          background: `white`,
                          color: `#FFA319`
                        }}>
                        <AddCircleOutlineIcon />
                      </Avatar>
                    </Box>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card
                  sx={{
                    p: 2.5,
                    color: "#223354",
                    background: `linear-gradient(to bottom, #4d3664, #bab5f6)`
                  }}>
                  <Box
                    display="flex"
                    alignItems="center"
                    pb={2}
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        component="div"
                        variant="h5"
                        sx={{
                          color: `rgba(255, 255, 255, 0.7)`
                         
                        }}
                      >
                        {data?.cell}
                      </Typography>
                      <Typography
                        gutterBottom
                        component="div"
                        variant="body"
                        sx={{
                          color: "white"
                          
                        }}

                      >
                        {t("Cell No.")}
                      </Typography>
                    </Box>
                    <Box>
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: `${theme.spacing(7)}`,
                          height: `${theme.spacing(7)}`,
                          background: `white`,
                          color: `#FFA319`
                        }}>
                        <AddCircleOutlineIcon />
                      </Avatar>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>

    </Dialog>

  );
}

export default Product;
