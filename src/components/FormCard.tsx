import { Avatar, AvatarGroup, Box, Card, CardActionArea, CardContent, Chip, Stack, Typography } from "@mui/material";
import { BiCalendar, BiGroup, BiTime } from "react-icons/bi";
import { blue } from "@mui/material/colors";

export function FormCard() {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: 5,
        transitionProperty: "all",
        transitionTimingFunction: "ease",
        ":hover": { boxShadow: 0 },
      }}
      // elevation={2}
      variant={"outlined"}
    >
      <CardActionArea>
        {/* <CardMedia
          component="img"
          color={"blue"}
          height="200"
          // image="https://i0.wp.com/terralogiq.com/wp-content/uploads/2022/05/Google-Form-Approval-illustration.png?resize=768%2C521&ssl=1"
          // alt="green iguana"
        /> */}
        <Box height={150} width={"100%"} bgcolor={blue[100]}></Box>
        <CardContent>
          <Typography gutterBottom variant="h6" fontSize={16} fontWeight={600}>
            Survei Awal Periode
          </Typography>
          <Stack spacing={1}>
            <Stack
              spacing={2}
              alignItems={"center"}
              justifyContent={"space-between"}
              direction={"row"}
              color={"text.secondary"}
            >
              <Stack direction={"row"} spacing={1}>
                <BiCalendar size={18} />
                <Typography variant="body2">23 Maret </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <BiGroup size={18} />
                <Typography variant="body2">462 </Typography>
              </Stack>
              <Chip label={"Ditutup"} sx={{ ml: 2 }} size={"small"} />
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"} color={"text.secondary"}>
              <Stack direction={"row"} spacing={1}>
                <BiTime size={18} />
                <Typography gutterBottom variant="body2">
                  Dibuka 16.40
                </Typography>
              </Stack>
              <AvatarGroup>
                <Avatar sx={{ width: 22, height: 22 }} />
                <Avatar sx={{ width: 22, height: 22 }} />
                <Avatar sx={{ width: 22, height: 22 }} />
              </AvatarGroup>
              {/* <IconButton size={"small"}>
            <BiDotsHorizontalRounded />
          </IconButton> */}
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
      {/* <CardActions></CardActions> */}
    </Card>
  );
}
