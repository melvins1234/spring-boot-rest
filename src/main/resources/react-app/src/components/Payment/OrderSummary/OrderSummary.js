import { useSelector } from "react-redux";
import { LowerCard } from "../../Bottom4/Card";

export const OrderSummary = () => {
  let cartList = useSelector((state) => state.cart);

  setTimeout(()=> {
    let stars = document.querySelectorAll('.checkout__customer--order-sumary .bottom1__card__star');
    stars.forEach(e=> e.remove())
  }, 20)

  return (
    <aside className="checkout__customer--order-sumary">
      {cartList.map((e) => {
        return (
          <LowerCard
            key={e.id}
            image={e.image}
            title={e.product}
            price={e.quantity * parseFloat(e.discountedPrice)}
          />
        );
      })}
    </aside>
  );
};
