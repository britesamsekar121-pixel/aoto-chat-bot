app.get("/api/test", (req, res) => {
  res.json({
    message: "API Working"
  });
});