import mongoose from "mongoose"

mongoose.connect(import.meta.env.SNOWPACK_PUBLIC_MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection
  .once("open", () => console.log("[DB]: Connected"))
  .on("error", (error) => console.warn("Warning: ", error))

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done()
  })
})
