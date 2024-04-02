import Background from "../assets/images/car collection bg.jpeg"

function About() {
  return (
      <div 
      style={{ backgroundImage: `url(${ Background })` }}
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
          <div className='flex place-items-center h-screen'>
              <h3 className='p-5 bg-white bg-opacity-50 text-black rounded'>
                This car collection is a curated assembly of automobiles that 
              showcases a variety of makes, models, and eras. This collection can 
              range from classic cars to rare and exotic vehicles, each offering a glimpse 
              into the history and evolution of automotive design and technology. 
              We take pride in their collections, which can serve as a reflection of 
              personal taste, passion for automotive culture, and appreciation for 
              the beauty and craftsmanship of automobiles.
               </h3>
          </div>
      </div>
  )
}

export default About