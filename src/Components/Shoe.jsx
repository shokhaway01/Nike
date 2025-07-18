import React from 'react'

const Shoe = ( {imgUrl, changeBigShoeImage, bigShoeImg} ) => {
    
    let handleClick = () =>{
        if (bigShoeImg !== imgUrl.bigShoe) {
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
    return (
    <div className={`border-2 
    rounded-xl

    ${
        bigShoeImg === imgUrl.bigShoe
        ? 'border-coral-red shadow-lg shadow-coral-red transition-all ease-in-out'
        : 'border-transparent'
    }
    cursor-pointer max-sm:flex-1
    }`}
    onClick={handleClick}>
        
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgUrl.thumbnail} alt="shoe collection" width={127} height={103} className='object-contain'/>
        </div>

    </div>
  )
}

export default Shoe