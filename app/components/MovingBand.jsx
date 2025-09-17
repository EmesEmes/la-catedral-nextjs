import Marquee from "react-fast-marquee";

const MovingBand = () => {
  return (
    <div className="">
      <Marquee className="bg-white text-black border-y-8 border-black p-8">
        <div className="flex space-x-40 text-3xl last:mr-40 h-24">
          
            <div className="flex">
              <img src="/images/sponsors/royal.png" alt="" className="h-24"/>
            <img src="/images/sponsors/royal2.png" alt="" className="h-24"/>
            </div>
       

            <img src="/images/sponsors/cheyenne.png" alt="" />
            <img src="/images/sponsors/shalo.png" alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default MovingBand;
