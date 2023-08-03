import app from "./app.js";

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
