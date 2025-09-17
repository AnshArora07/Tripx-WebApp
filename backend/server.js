const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routing = require("./routes/routing");
const wishlistRoutes = require("./routes/wishlist"); // Import wishlist routes
const connectWithDB = require("./config/database");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

// Middleware for handling CORS
app.use(cors({
  origin: ['https://tripx-home.onrender.com', 'http://localhost:3000'], // Replace with your frontend origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware for JSON parsing
app.use(express.json());

// Routing setup
app.use("/api/v1", routing);
app.use("/api/v1/wishlist", wishlistRoutes); // Wishlist routes setup

// Connect to the database
connectWithDB();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/payment', async (req, res) => {
  try {
    const { name, price } = req.body; // Retrieve package details from the request
    const product = await stripe.products.create({
      name, // Use the selected package name
    });

    const packagePrice = await stripe.prices.create({
      product: product.id,
      unit_amount: price * 100, 
      currency: 'inr',
    });

    const session = await stripe.checkout.sessions.create({
      // payment_method_types: ['card', 'upi', 'netbanking'],
      line_items: [
        {
          price: packagePrice.id,
          quantity: 1,
        }
      ],
      mode: 'payment',
      success_url: 'https://tripx-webapp-client.onrender.com',
      cancel_url: 'https://tripx-webapp-client.onrender.com/booking',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating payment session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
