import { loadStripe } from "@stripe/stripe-js";

export async function checkout({ items }) {
  let stripePromise = null;
  let lineItems = [];
  items.forEach((element) => (lineItems = element));
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
    }
    return stripePromise;
  };

  const stripe = await getStripe();
  // console.log(lineItems);
  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: "/thank-you",
    cancelUrl: "/error",
    // successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    // cancelUrl: window.location.origin,
  });
}
