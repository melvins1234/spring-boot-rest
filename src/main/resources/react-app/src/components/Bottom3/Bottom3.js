import {Card} from "./Card";
import "./Bottom3.scss";
import "./Bottom3Media.scss";
export const Bottom3 = () => {
  return (
    <section id="bottom3" className="bottom3">
      <section className="wrapper">
        <Card
          image="delivery.png"
          imageAlt="Deliver"
          title="Free Shipping"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur"
        />
        <Card
          image="refund.png"
          imageAlt="Refund"
          title="100% Refund"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur"
        />
        <Card
          image="support.png"
          imageAlt="Customer Service"
          title="Support 24/7"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur"
        />
      </section>
    </section>
  );
};
