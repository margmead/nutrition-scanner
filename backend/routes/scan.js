import {Router} from "express";
import multer from "multer";

const router =Router();
const upload = multer({ storage: multer.memoryStorage()});

// post/api/scan
router.post("/", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({error:"No image uploaded"});
        }

        // mock ocr result
          const mockResult = {
      name: "Chocolate Chip Biscuit",
      servingSize: "25g",
      energyKj: 480,
      energyKcal: 115,
      fat: 5.6,
      satFat: 3.1,
      sugar: 9.8,
      sodium: 120,
      rating: "D",
      comments: [
        "High in sugar – consider smaller portions.",
        "Saturated fat is on the high side.",
        "Okay as an occasional treat, not everyday."
      ]
    };

    // bd for later
     return res.json(mockResult);
  } catch (err) {
    console.error("Scan error:", err);
    res.status(500).json({ error: "Failed to scan label" });
    }
});

export default router;