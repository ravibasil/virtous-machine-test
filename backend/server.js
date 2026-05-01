const express = require("express")
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// In memory DB
let items = []

// Create
app.post("/items", (req, res) => {
    const { title, desc } = req.body;
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }
    const item = { id: Date.now(), title, desc }
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
    const itemIndex = items.findIndex(i => i.id === id);
    if (itemIndex === -1) {
        return res.status(404).json({ error: "Item not found" });
    }
    const { title, desc } = req.body;
    items[itemIndex] = { ...items[itemIndex], title, desc };
    res.json(items[itemIndex])
})

// Delete
app.delete("/items/:id", (req, res)=> {
    const id = Number(req.params.id);
    const itemIndex = items.findIndex(i => i.id === id);
    if (itemIndex === -1) {
        return res.status(404).json({ error: "Item not found" });
    }
    items = items.filter(i => i.id !== id)
    
    res.json({ message: "Deleted" })
})

// Export for testing
module.exports = app;

// Run server only if not testing
if(require.main === module){
    app.listen(5000, () => console.log("Server is listening on 5000"))
}