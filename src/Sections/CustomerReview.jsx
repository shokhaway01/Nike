import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../constants";

const CustomerReview = () => {
  return (
    <section id="" className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bald">What always

        <span className="text-coral-red hover:text-[58px] transition-all ease-in-out"> Shokhaway </span>
        Says?
      </h3>

      <p className="max-w-lg info-text m-auto mt-4 text-center">
        Hear genuine stories from our satisfied customers sharing their experiences with @shokhaway
      </p>


      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map( (review) => (
          <ReviewCard 
            key={review.customerName} 
            imgURL={review.imgURL}  
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}/>
        ) )}
      </div>
    </section>
  )
}



export default CustomerReview;