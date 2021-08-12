import { UpperCard, LowerCard } from "./Card";
import { Input, Button } from '../InputField/InputField'

import "./Bottom4.scss";
import "./Bottom4Media.scss";

export const Bottom4 = () => {
  return (
    <section id="bottom4" className="bottom4">
      <section className="wrapper">
        <h2 className="bottom4__title">Latest News</h2>
        <section className="bottom4__news bottom4__news--upper">
          <UpperCard
            image="smart-phone-card.png"
            imageAlt="Smart Phone"
            date="01 Jan, 2015"
            title="Typesetting industry"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
          />
          <UpperCard
            image="latest-news2.png"
            imageAlt="macbook"
            date="01 Jan, 2015"
            title="Typesetting industry"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
          />
          <UpperCard
            image="latest-news3.png"
            imageAlt="iphone"
            date="01 Jan, 2015"
            title="Typesetting industry"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
          />
        </section>

        <h2 className="bottom4__title">Featured Products</h2>
        <section className="bottom4__news bottom4__news--lower">
        <LowerCard
          image="beats__171717.png"
          title="Beats Solo 2 On Ear Headphones - Black"
          star='4'
          price='499'
        />
        <LowerCard
          image="H_tvTry.png"
          title="H-Squared tvTray"
          star='3'
          price='499'
        />
        <LowerCard
          image="Netatmo_Rain_Gauge.png"
          title="Netatmo Rain Gauge"
          star='5'
          price='499'
        />
        </section>
        <section className="bottom4__search">
              <Input field={{_uid: 'Search_', label: 'Search_' }} type='text' placeholder='Search query...'></Input>
              <Button className='bottom4__btn' value='Search'/>
            </section>
      </section>
    </section>
  );
};
