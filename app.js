// Core Module
const path = require('path');

//External Module
const express = require("express");

// local Module
const StoreRouter = require("./routes/store-router");
const { HostRouter } = require("./routes/host-routes");
const rootDir = require("./utils/pathUtil");
const { PageNotFound } = require("./controllers/errors");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(StoreRouter);
app.use("/host", HostRouter);

app.use(express.static(path.join(rootDir, 'public')));

app.use(PageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

