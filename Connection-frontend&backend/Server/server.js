import express from "express";
const app = express();

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke1",
    },
    {
      id: 2,
      title: "A joke2",
    },
    {
      id: 3,
      title: "A joke3",
    },
    {
      id: 4,
      title: "A joke4",
    },
    {
      id: 5,
      title: "A joke5",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`sever is listnin at port ${port}`);
});
