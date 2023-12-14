const { request } = require("../server");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const charge = async (req, res) => {
  

  try {
    const token = await stripe.tokens.create({
        card: {
          number:req.body.cardNumber,
          exp_month:req.body.expMonth,
          exp_year: req.body.expYear,
          cvc:req.body.cvv
        }
    });
    console.log(req.body)
    await stripe.charges.create({
        amount: req.body.amount ,
        currency: "usd",
        description: "An example charge",
        source: token.id
    });
    console.log(token.id)
    res.status(200).json({ message: "Your order is about to be delivered" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  charge
};
