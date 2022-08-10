import { Production } from '../utils/typings'
import { motion, AnimatePresence } from "framer-motion"
import { sanityClient } from '../utils/sanity';

const bannerVariant = {
    animate: {
        
        transition: {
            yoyo: Infinity,
        }
        
    }
}


function Banner(production) {
    console.log(production)
    return (
        <>
            <div className="h-20 w-full bg-secondary flex items-center mx-auto overflow-scroll">
                <motion.div
                    animate={{
                        x: [1800, 200],

                    }}
                    transition={{
                        yoyo: Infinity,
                        duration: 20,
                        ease: 'linear'
                    }}
                >
                    <motion.span
                        
                    >{production.bannerText}</motion.span>
                    </motion.div>
                <br />
                </div>
            </>
    )
}



export default Banner
