const mongoose = require("mongoose");

require("dotenv").config();
const connectWithDB = () => {
    mongoose.connect(process.env.DATABASE_URL,)
        .then(console.log("DB connected Successfully"))
        .catch((error) => {
            console.log("DB facing connection issues");
            console.log(error);
            process.exit(1); // abnormal termination
        })
}

module.exports = connectWithDB;