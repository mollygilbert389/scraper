var PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });