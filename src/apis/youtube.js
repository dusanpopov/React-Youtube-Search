import axios from "axios";


const API_KEY = "AIzaSyBPknu9EECIdzqvCJUqCU8nWf3DorJ7hZo";

export default axios.create({

    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {

        part: "snippet",
        maxResults: 15,
        key: API_KEY

    }
    
});