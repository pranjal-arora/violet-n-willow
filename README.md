
# Violet-n-Willow


Since most people prefer to shop online due to the paucity of time, business owners can easily make more revenue. To cater this, we came up with an e-commerce dashboard as our **Software Engineering Project** for **ODDSEM 2022-23**. With the help of this website, for clothing brand ***violet-n-willow***, customers can select and buy desired products anytime with a hassle-free transaction.

## Features:-

- Sign Up/ Sign In
- Forget/ Reset password - Using Sendgrid email verification
- **User Side**
  - Update Profile Details
  - Products segregated according to categories for Women, Men and Kids
  - Add to cart, Set quantity
  - Remove from cart
  - 3 types of Payment Options:- E-Money, COD, PayTM payment gateway, Stripe payment gateway
  - 'My Orders' section under profile is updated once order is successful.
- **Admin Side**
  - Dynamically update the dashboard for stock left in inventory
  - Cancel any particular order
  - Track any particular order 
  - Receive confirmations on successful orders


## Layout:-
**Hero Section:**

![Request](https://github.com/pranjal-arora/violet-n-willow/blob/master/layout/herosection.png?raw=true)

**Sign Up/ Sign In:**

![Request](https://github.com/pranjal-arora/violet-n-willow/blob/master/layout/signup.png?raw=true)

**Products:**

![Request](https://github.com/pranjal-arora/violet-n-willow/blob/master/layout/categories.png?raw=true)

**Checkout:**

![Request](https://github.com/pranjal-arora/violet-n-willow/blob/master/layout/checkout.png?raw=true)

**My Orders:**

![Request](https://github.com/pranjal-arora/violet-n-willow/blob/master/layout/myorders.jpg?raw=true)

**Forget Password:**

![Request](https://github.com/pranjal-arora/violet-n-willow/blob/master/layout/passwordreset.png?raw=true)


## Error Handling added, after mentor discussions:-
- Error Page on accessing any protected route.
- For Checkout, always need to be signed in.
- Payment Options available only when valid billing address is entered

## Third Party API's used:-
- ***Stripe Payment Gateway-*** to process the customer's credit card information by sending the data to the gateway's web server, which then makes the sale and sends the confirmation back to the website.
- ***SendGrid Email Verification-*** to validate and verify user's Email. The SendGrid UI creates the Email Validation API Key. 
