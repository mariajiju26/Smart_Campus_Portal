const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); 

// 1. Fixed MongoDB Connection for Deployment
// Uses MONGO_URI from Render Environment Variables
const dbURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/lost_found_db';

mongoose.connect(dbURI)
    .then(() => console.log("✅ Connected to MongoDB Database!"))
    .catch(err => console.error("❌ Database connection error:", err));

// 2. Data Schema
const itemSchema = new mongoose.Schema({
    type: { type: String, required: true },
    reporterName: String,
    reporterEmail: String,
    name: { type: String, required: true },
    category: String,
    location: String,
    date: String,
    description: String,
    image: String,
    user: String,
    status: { type: String, default: 'Pending' }
});

const Item = mongoose.model('Item', itemSchema);

// 3. Routes

// GET: Fetch all items
app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch items" });
    }
});

// POST: Save new report
app.post('/api/items', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json({ message: "Saved to MongoDB!" });
    } catch (err) {
        res.status(500).json({ error: "Failed to save item" });
    }
});

// PATCH: Update status
app.patch('/api/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (item) {
            item.status = req.body.status;
            await item.save();
            res.json({ message: "Status updated!" });
        } else {
            res.status(404).send("Item not found");
        }
    } catch (err) {
        res.status(500).json({ error: "Update failed" });
    }
});

// 4. Start Server
// Use process.env.PORT for Render or 3000 for local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});