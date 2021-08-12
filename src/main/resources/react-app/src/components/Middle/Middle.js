import { Article } from "./Article";
import "./Middle.scss";
import "./MiddleMedia.scss";

export const Middle = () => {
  return (
    <section id="middle" className="middle">
      <section className="wrapper middle__wrapper--flex">
        <Article
          title="Iphone 6"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          price={399}
          image="iPhone6s.png"
          image_alt="iphone 6s"
          offsetParentClassName="middle__article--bgcolorPink"
          imageClass='middle__image--iphone'
        ></Article>
        <Article
          title="Oculus Rift"
          price={349}
          image="Oculus-Rift-profile_grande.png"
          image_alt="Oculus Rift profile grande"
          offsetParentClassName="middle__article--plain"
          imageClass='middle__image--vr'
          className='middle__content--middle'
        ></Article>
        <Article
          title="GoPro Hero 6"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          price={299}
          image="GoPro.png"
          image_alt="Go Pro"
          offsetParentClassName="middle__article--bgcolorGray"
          imageClass='middle__image--gopro'
          className='middle__content--last'
        ></Article>
      </section>
    </section>
  );
};
