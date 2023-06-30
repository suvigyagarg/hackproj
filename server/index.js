const express = require(`express`)

const app = express()

mongoose.connect(process.env.MONGO_URL)