import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

import { useEffect, useState } from "react";
import {
  BiAlignLeft,
  BiCheckboxChecked,
  BiCopy,
  BiDotsVerticalRounded,
  BiPlus,
  BiRadioCircleMarked,
  BiSliderAlt,
  BiTrash,
  BiX,
} from "react-icons/bi";
import { styled } from "@mui/material/styles";
import { IQuestion } from "../types/Form";
import { InputBase, Tooltip } from "@mui/material";

type CardPropsType = {
  q: IQuestion;
  index: number;
  editAction: (i: number, q: IQuestion) => void;
  addAction: (i: number) => void;
  deleteAction: (i: number) => void;
};

export function QuestionCard(props: CardPropsType): JSX.Element {
  const [title, setTitle] = useState(props.q.title);
  const [type, setType] = useState(props.q.type);
  const [required, setRequired] = useState(false);
  const [options, setOptions] = useState(["Pilihan 1"]);
  useEffect(() => {
    props.editAction(props.index, { id: props.q.id, title, type, required, options });
  }, [title, type, required, options]);

  const addOption = () => {
    const newOptions = [...options];
    newOptions.push("Pilihan " + (options.length + 1));
    setOptions(newOptions);
  };
  const changeOption = (index: number, opt: string) => {
    const newOptions = [...options];
    newOptions[index] = opt;
    setOptions(newOptions);
  };
  const deleteOption = (index: number) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };
  return (
    <>
      <Box>
        <Card sx={{ minWidth: 275, background: "white", borderRadius: 5, p: 1 }} elevation={0} variant={"elevation"}>
          <CardContent>
            <Stack direction={"row"} spacing={3}>
              <Stack flexGrow={1}>
                <TextField
                  variant={"outlined"}
                  hiddenLabel
                  size={"small"}
                  placeholder={"Judul pertanyaan"}
                  multiline
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{ "& fieldset": { border: "none" } }}
                />
              </Stack>
              <Stack width={"30%"}>
                <QuestionTypeMenu />
              </Stack>
            </Stack>
            <Box mt={2}>
              {type == "text" && <TextField variant={"standard"} disabled placeholder={"Teks jawaban"} />}
              {type == "radio" && (
                <Stack spacing={1}>
                  {options.map((opt, i) => (
                    <Stack key={i} direction={"row"} alignItems={"center"} maxWidth={"100%"} {...props}>
                      <Radio disabled />
                      <InputBase
                        fullWidth
                        placeholder={"Opsi"}
                        value={opt}
                        onChange={(e) => changeOption(i, e.target.value)}
                      />
                      {options.length > 1 && (
                        <IconButton onClick={() => deleteOption(i)}>
                          <BiX />
                        </IconButton>
                      )}
                    </Stack>
                  ))}
                  <Button variant={"text"} onClick={addOption}>
                    Tambah opsi
                  </Button>
                </Stack>
              )}
              {type == "checkbox" && (
                <Stack spacing={1}>
                  {options.map((opt, i) => (
                    <Stack key={i} direction={"row"} alignItems={"center"} maxWidth={"100%"} {...props}>
                      <Checkbox disabled />
                      <InputBase fullWidth placeholder={"Opsi"} value={opt} />
                      {options.length > 1 && (
                        <IconButton onClick={() => deleteOption(i)}>
                          <BiX />
                        </IconButton>
                      )}
                    </Stack>
                  ))}
                  <Button variant={"text"} onClick={addOption}>
                    Tambah opsi
                  </Button>
                </Stack>
              )}
              {type == "scale" && <Rating name="size-medium" defaultValue={2} max={10} />}
            </Box>
          </CardContent>

          <CardActions sx={{ justifyContent: "end" }}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Tooltip title={"Wajib diisi"}>
                <IOSSwitch sx={{ m: 0 }} checked={required} onClick={() => setRequired(!required)} />
              </Tooltip>
              <Tooltip title={"Duplikat"}>
                <IconButton>
                  <BiCopy />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Hapus"}>
                <IconButton onClick={() => props.deleteAction(props.index)}>
                  <BiTrash />
                </IconButton>
              </Tooltip>
              <IconButton>
                <BiDotsVerticalRounded />
              </IconButton>
            </Stack>
          </CardActions>
        </Card>
      </Box>
      <Box
        mt={-1}
        height={20}
        alignItems={"center"}
        py={-5}
        sx={{
          "&:hover *": {
            display: "flex",
          },
        }}
      >
        <Stack display={"none"}>
          <Divider>
            <Button
              size={"small"}
              variant={"contained"}
              color={"secondary"}
              sx={{ background: "white" }}
              startIcon={<BiPlus />}
              onClick={() => props.addAction(props.index)}
            >
              Tambah
            </Button>
          </Divider>
        </Stack>
      </Box>
    </>
  );

  function QuestionTypeMenu() {
    return (
      <Select
        id="demo-simple-select"
        size={"small"}
        value={type}
        onChange={(e) => setType(e.target.value)}
        sx={{ "& fieldset": { border: "none" } }}
      >
        <MenuItem value={"text"}>
          <Stack direction={"row"} spacing={2}>
            <BiAlignLeft size={20} /> <p>Jawaban Teks</p>
          </Stack>
        </MenuItem>
        <MenuItem value={"radio"}>
          <Stack direction={"row"} spacing={2}>
            <BiRadioCircleMarked size={20} /> <p>Pilihan</p> Ganda
          </Stack>
        </MenuItem>
        <MenuItem value={"checkbox"}>
          <Stack direction={"row"} spacing={2}>
            <BiCheckboxChecked size={20} /> <p>Checkbox</p>
          </Stack>
        </MenuItem>
        <MenuItem value={"scale"}>
          <Stack direction={"row"} spacing={2}>
            <BiSliderAlt size={20} /> <p>Skala</p>
          </Stack>
        </MenuItem>
      </Select>
    );
  }
}
export const IOSSwitch = styled((props: any) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "100ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
