/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";
import UseAxiosHoks from "../../../hooks/UseAxiosHoks";
import UseCart from "../../../hooks/UseCart";
import UseAuth from "../../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const ChekOutForm = () => {
  const stripe = useStripe("");
  const [clientSecret, setClientSecrate] = useState("");
  const [tranjectoin, setTranjectoinId] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();
  const elements = useElements();
  const axiosSecure = UseAxiosHoks();
  const [carts, refetch] = UseCart();
  const { user } = UseAuth();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecrate(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      console.log("peyment error", error);
    } else {
      console.log("peyment method", paymentMethod);
      setError("");
    }

    // confiremd payment
    const { paymentIntent, error: confirmedError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymus",
            name: user?.displayName || "anonymus",
          },
        },
      });

    if (confirmedError) {
      console.log("confirm error");
    } else {
      console.log("peyment inten ", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("tranjectoin id", paymentIntent.id);
        setTranjectoinId(paymentIntent.id);
        // now save this payment in database
        const payment = {
          email: user.email,
          price: totalPrice,
          tranjectoin: paymentIntent.id,
          date: new Date(), //utc date convert . use momvent js to
          CartIds: carts.map((item) => item._id),
          manuIds: carts.map((item) => item.mannId),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        refetch();
        navigate("/dashborad/payementHistory");
      }
    }
  };
  return (
    <form onSubmit={handelSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600"> {error} </p>
      {tranjectoin && (
        <p className="text-green-600">Your tranjectoin id{tranjectoin} </p>
      )}
    </form>
  );
};

export default ChekOutForm;
