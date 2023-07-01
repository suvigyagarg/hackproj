const express = require(`express`)
const mongoose = require(`mongoose`)
const dotenv = require(`dotenv`)
const authRoutes = require(`./routes/authRoutes`)
const donationRoutes = require(`./routes/donationRoutes`)
const donationCenterRoutes = require(`./routes/donationCenterRoutes`)

dotenv.config()

const app = express();

app.use(express.json())


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log(`MongoDB Connected`)).catch(err => console.log(err))

app.use(`/api/auth`, authRoutes)
app.use(`/api/donation`, donationRoutes)
app.use(`/api/donationCenter`, donationCenterRoutes)

app.listen(5000, () => console.log(`Server is running on port 5000`))



