import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import Button from "@mui/material-next/Button";
import { BiCog, BiExclude, BiShowAlt } from "react-icons/bi";
import { QuestionCard } from "../components/QuestionCard";
import { useState } from "react";
import { IQuestion } from "../types/Form";
import { InputBase, Tab, Tabs, Tooltip } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function FormEditor() {
  const template: IQuestion = {
    id: Math.floor(Math.random() * 1000),
    title: "Pertanyaan tanpa judul",
    type: "text",
    required: false,
    options: [],
  };
  const [questions, setQuestions] = useState<IQuestion[]>([template]);
  const [formTitle, setFormTitle] = useState("Formulir tanpa judul");
  const [tab, setTab] = useState(0);

  const handleAddQuestion = (index: number) => {
    const newQuestions = [...questions];
    newQuestions.splice(index + 1, 0, { ...template, id: Math.floor(Math.random() * 1000) });
    setQuestions(newQuestions);
  };
  // console.log(questions);
  const handleChangeQuestion = (index: number, newQuestion: IQuestion) => {
    const newListQuestions = [...questions];
    newListQuestions[index] = newQuestion;
    setQuestions(newListQuestions);
  };
  const handleDeleteQuestion = (index: number) => {
    const newListQuestions = [...questions];
    newListQuestions.splice(index, 1);
    setQuestions(newListQuestions);
  };
  const handleTab = (e: any, value: number) => {
    setTab(value);
  };
  console.log(tab);
  return (
    <Box sx={{ background: "linear-gradient(to right, #2193b0, #6dd5ed)" }} minHeight={"100vh"}>
      <AppBar position="fixed" elevation={0} color={"secondary"} sx={{ borderBottom: "1px solid lightgrey" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <BiExclude size={25} color={blue[500]} />
            <Box sx={{ ml: 3, flexGrow: 1, display: "flex", justifyContent: "start" }}>
              <InputBase
                fullWidth
                sx={{
                  display: { md: "flex" },
                  fontWeight: 500,
                  textDecoration: "none",
                  ":focus": {
                    outline: "none",
                  },
                }}
                onChange={(e) => setFormTitle(e.target.value)}
                value={formTitle}
              />
            </Box>
            {/* <Box sx={{ flexGrow: 0, display: "flex" }}> */}

            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Tooltip title={"Pengaturan"}>
                <IconButton>
                  <BiCog />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Preview"}>
                <IconButton>
                  <BiShowAlt />
                </IconButton>
              </Tooltip>
              <Button variant={"contained"} disableElevation>
                Share
              </Button>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="User" src="https://bit.ly/dan-abramov" />
              </IconButton>
            </Stack>
            {/* </Box> */}
          </Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Tabs value={tab} onChange={handleTab} centered>
              <Tab label={"Pertanyaan"} />
              <Tab label={"Responden"} />
              <Tab label={"Analisis"} />
            </Tabs>
          </Box>
        </Container>
      </AppBar>
      <Container maxWidth={"md"}>
        <Stack py={16} spacing={0}>
          {questions.map((q, i) => (
            <QuestionCard
              key={q.id}
              q={q}
              index={i}
              editAction={handleChangeQuestion}
              addAction={handleAddQuestion}
              deleteAction={handleDeleteQuestion}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
