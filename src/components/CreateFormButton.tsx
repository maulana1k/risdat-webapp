import React from "react";
import { Box, Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export function CreateFormButton() {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 200,
        borderRadius: 5,
        transitionProperty: "all",
        transitionDuration: ".2s",
        transitionTimingFunction: "ease",
        ":hover": { transform: "scale(1.05)", boxShadow: 5 },
      }}
      elevation={2}
      onClick={() => navigate("/form/1242312")}
    >
      <CardActionArea>
        <CardContent>
          <Stack spacing={0} height={80} justifyContent={"center"}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} color={blue[700]}>
              <Typography>
                <BiPlus size={50} />
              </Typography>
            </Box>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              color={blue[700]}
              align={"center"}
              fontWeight={600}
            >
              Buat Formulir
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
