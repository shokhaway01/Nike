import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import Button from "../Components/Button";
import Shoe from "../Components/Shoe";
import { shoes, statistics } from "../constants";



const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-slate-gray">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover sylish nike Arrivals, quality comfort and innovation for your
          active life.
        </p>
        <Button label="Show now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold ">{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center bg-cover bg-center bg-hero z-10">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative max-sm:p-6"
        />

        <div className="flex sm:gap-6 max-sm:-bottom -[25%] gap-4 absolute -bottom-[10%] sm:left-[10%] max-sm:px-4">
          {shoes.map((shoe, index) => (
            <div className="cursor-pointer" key={index}>
              <Shoe imgUrl={shoe} changeBigShoeImage={(shoe) => {setbigShoeImg(shoe)}} bigShoeImg={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
