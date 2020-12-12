import User from "../src/models/user"

describe("Creating records", () => {
  it("saves a user", (done) => {
    const joe = new User({ name: "Joe" })

    joe.save().then(() => {
      expect(joe.isNew).toBeTruthy()
      done()
    })
  })
})
