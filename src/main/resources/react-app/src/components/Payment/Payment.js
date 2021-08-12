import { OrderSummary } from "./OrderSummary/OrderSummary";
import { CustomerInformation } from "./CustomerInformation/CustomerInformation";
import "./Payment.scss";
export const Payment = () => {
  return (
    <section className="checkout__customer">
      <div className="wrapper">
        <CustomerInformation />
        <OrderSummary />
      </div>
    </section>
  );
};
