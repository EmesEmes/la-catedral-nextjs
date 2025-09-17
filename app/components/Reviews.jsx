import SectionTitle from "./SectionTitle";
import { reviews } from "../constants";

const Reviews = () => {
  return (
    <section className="p-2 lg:p-10">
      <SectionTitle
        title="Lo que dicen nuestros clientes"
        subtitle="Algunos palabras de amables nuestros clientes"
      />
      <div className="flex flex-col gap-y-6 lg:relative lg:h-[80vh] w-screen">
        <img src="/images/reviews/review-1.webp" alt="review 1" className="w-full m-0 lg:w-[600px] shadow-xl lg:absolute lg:top-0 lg:left-0"/>
        <img src="/images/reviews/review-2.webp" alt="review 2" className="w-full m-0 lg:w-[600px] shadow-xl lg:absolute lg:top-0 lg:right-0"/>
        <img src="/images/reviews/review-4.webp" alt="review 5" className="w-full m-0 lg:w-[600px] shadow-xl lg:absolute lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:left-1/2"/>
        <img src="/images/reviews/review-3.webp" alt="review 3" className="w-full m-0 lg:w-[600px] shadow-xl lg:absolute lg:bottom-0 lg:left-0"/>
        <img src="/images/reviews/review-5.webp" alt="review 4" className="w-full m-0 lg:w-[600px] shadow-xl lg:absolute lg:bottom-0 lg:right-0"/>
      </div>
    </section>
  );
};

export default Reviews;
