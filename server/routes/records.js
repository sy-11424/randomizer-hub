import express from "express";
import { openDB } from "../db.js";

const router = express.Router();

// Initialize table
const init = async () => {
  const db = await openDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS records (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT,
      value TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);
};
init();

// Get all records
router.get("/", async (req, res) => {
  const db = await openDB();
  const records = await db.all("SELECT * FROM records ORDER BY created_at DESC");
  res.json(records);
});

// Add a new record
router.post("/", async (req, res) => {
  const { type, value } = req.body;
  if (!type || !value) return res.status(400).json({ error: "Missing type or value" });

  const db = await openDB();
  await db.run("INSERT INTO records (type, value) VALUES (?, ?)", [type, value]);
  res.json({ success: true });
});

// Delete all records
router.delete("/", async (req, res) => {
    const db = await openDB();
    await db.run("DELETE FROM records");
    res.json({ success: true });
  });
  
  export default router;