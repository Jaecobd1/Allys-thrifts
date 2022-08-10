import MyDocument from "../pages/_document"
import { sanityClient, urlFor } from '../utils/sanity'
import { Production } from '../utils/typings'


interface Props {
    production: [Production];
}


function Hero(production) {
    return (
        <div>
            {/* Image */}
            <div>
              
                    <>
                    {/* <img
                        className="w-full"
                        src={urlFor(production.heroImg).url()!
                        } alt="" /> */}
                        </>
                    
                
            </div>

            {/* Text */}
            <div className="p-5">
                <h2 className="md:text-2xl sm: text-xl">
                    See our newest collections
                </h2>
            </div>
        </div>
    )
}

export default Hero
