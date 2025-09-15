const Wishlist = require("../models/Wishlist");
const Package = require("../models/Package"); // Assuming you have a Package model

// Add item to wishlist
exports.addToWishlist = async (req, res) => {
  const { packageId } = req.body;
  const userId = req.user.id; // Assumes user ID is available via authentication middleware

  if (!packageId) {
    return res.status(400).json({ message: "Package ID is required." });
  }

  try {
    // Ensure the package exists in the database before adding to wishlist
    const packageExists = await Package.findById(packageId);
    if (!packageExists) {
      return res.status(404).json({ message: "Package not found." });
    }

    // Find or create a wishlist for the user
    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      wishlist = new Wishlist({ userId, items: [] });
    }

    // Check if the package is already in the wishlist
    const alreadyExists = wishlist.items.some(
      (item) => item.packageId.toString() === packageId
    );

    if (alreadyExists) {
      return res.status(400).json({ message: "Package is already in your wishlist." });
    }

    // Add package to wishlist
    wishlist.items.push({ packageId });
    await wishlist.save();

    res.status(200).json({ message: "Package added to wishlist.", wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fetch wishlist items
exports.getWishlist = async (req, res) => {
  const userId = req.user.id;

  try {
    // Fetch user's wishlist and populate package details
    const wishlist = await Wishlist.findOne({ userId }).populate("items.packageId");

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found." });
    }

    res.status(200).json({ wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching wishlist items.", error: error.message });
  }
};
