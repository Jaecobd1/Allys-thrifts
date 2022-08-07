import config from "../utils/config";
import { createClient } from "next-sanity"


const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_ID,
    dataset: config.dataset,
    useCdn: true,
    apiVersion: "2022-03-25",
    
});


export default client