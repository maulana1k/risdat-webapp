import React from "react";
import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { BiListUl, BiSortAZ } from "react-icons/bi";

import { CreateFormButton } from "../components/CreateFormButton";
import { FormCard } from "../components/FormCard";
import ResponsiveAppBar from "../components/AppBar";

export default function Dashboard() {
  return (
    <>
      <main>
        <ResponsiveAppBar />
        <Box width={"100%"} height={"300px"} bgcolor={blue[700]}></Box>
        <Container>
          <Box
            mt={-22}
            // maxWidth={"md"}
            sx={{ maxWidth: { sm: "sm", md: "md", lg: "lg" } }}
            pb={10}
          >
            <Stack spacing={6}>
              <Stack spacing={2}>
                <Typography fontWeight={500} color={"white"} fontSize={18}>
                  Mulai formulir baru
                </Typography>
                <CreateFormButton />
              </Stack>
              <Stack spacing={0}>
                <Stack mb={2} direction={"row"} justifyContent={"space-between"}>
                  <Typography fontWeight={500} fontSize={20}>
                    Semua Formulir
                  </Typography>
                  <Stack direction={"row"}>
                    <IconButton>
                      <BiSortAZ />
                    </IconButton>
                    <IconButton>
                      <BiListUl />
                    </IconButton>
                  </Stack>
                </Stack>
                <Grid container spacing={2} mt={-3} ml={-3}>
                  {Array(10)
                    .fill(1)
                    .map((i, v) => (
                      <Grid key={i + v} item sm={6} md={3} lg={3}>
                        <FormCard />
                      </Grid>
                    ))}
                </Grid>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </main>
    </>
  );
}
