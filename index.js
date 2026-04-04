import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
    res.send("Hello World after action setup and workflow setup working I LOVE CI/CD");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});