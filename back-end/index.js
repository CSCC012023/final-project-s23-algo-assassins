"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_router_1 = require("./routers/user_router");
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
exports.app = (0, express_1.default)();
exports.app.use(body_parser_1.default.json());
// Serve static files
exports.app.use(express_1.default.static("static"));
// Allow CORS for all origins
const corsOptions = {
    origin: "*",
    credentials: true,
};
exports.app.use((0, cors_1.default)(corsOptions));
// Connect to the database MongoDB Atlas
let dburl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.ha35gkz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose_1.default.connect(dburl)
    .then(() => {
    console.log('Connected to the database ');
})
    .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
});
// Allows for sessions
exports.app.use((0, express_session_1.default)({
    secret: process.env.SECRET_KEY || "default",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));
// Routes
exports.app.use("/api/users", user_router_1.userRouter);
const port = process.env.PORT;
exports.app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
