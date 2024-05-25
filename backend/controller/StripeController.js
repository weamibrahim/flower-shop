const { request } = require("../server");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { clearCartItems } = require("./CartController");
const stripePayment  = async (req, res) => {
 

  console.log("body",req.body)
  const items = req.body.cartItems.map((item) => {
  
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.flowerId.name,
          images:[item.flowerId.image],
          metadata: {
            id: item._id,
          }
        },
        unit_amount: item.flowerId.price * 100,
      },
      quantity: item.quantity,
    };
  });
  

console.log(items)
 const session = await stripe.checkout.sessions.create({
   line_items: items,
   mode: "payment",
   success_url: `${process.env.CLIENT_URL}/home`,
   cancel_url: `${process.env.CLIENT_URL}/cart`,
  
   
 })

 res.send({url: session.url})

 await clearCartItems(req.body.userId);
 
};

module.exports = {
  stripePayment,
};
