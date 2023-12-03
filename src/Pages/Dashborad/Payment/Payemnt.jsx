/* eslint-disable no-unused-vars */
import React from "react";
import SectoinTitale from "../../../Components/SectoinTitale/SectoinTitale";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ChekOutForm from "./ChekOutForm";
// TODO:  add pulishable key
const stripePromise = loadStripe(
  "pk_test_51OEuuJKc6cWjkGN6RhsqaWZwdwcuSTobn6P9BH7cDb1rGNpI1upoW8sHRQ4ht8qJo5Mwe0ZNoz36ng5bVA1wQVyj00twL0IPBC"
);
const Payemnt = () => {
  return (
    <div>
      <SectoinTitale
        heading="Payment"
        subHeading="please pay to eat"
      ></SectoinTitale>
      <div>
        <Elements stripe={stripePromise}>
          <ChekOutForm></ChekOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payemnt;
