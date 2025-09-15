// wishlistRoutes.js
const express = require('express');
const router = express.Router();
const WishlistItem = require('../models/wishlistSchema');
const authMiddleware = require('../middleware/authMiddleware'); // Custom middleware to authenticate user

// Get all wishlist items for the logged-in user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userEmail = req.user.email; // Get email from the authenticated user
    const wishlistItems = await WishlistItem.find({ userEmail });

    res.status(200).json(wishlistItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching wishlist items.' });
  }
});

module.exports = router;
