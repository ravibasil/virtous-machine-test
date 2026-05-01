const express = require("express")
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// In memory DB
let items = []

// Create
app.post("/items", (req, res) => {
    const item = { id: Date.now(), ...req.body }
    items.push(item)
    res.status(201).json(item)
})

// Read 
app.get("/items", (req, res) => {
    res.json(items)
})

// Update
app.put("/items/:id", (req, res) => {
    const id = Number(req.params.id);
    items = items.map(i => i.id === id ? { ...i, ...req.body }: i)
    res.json({ message: "Updated" })
})

// Delete
app.delete("/items/:id", (req, res)=> {
    const id = Number(req.params.id);
    items = items.filter(i => i.id !== id)
    
    res.json({ message: "Deleted" })
})

app.listen(5000, () => console.log("Server is listening on 5000"))
