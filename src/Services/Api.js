import axios from 'axios';
const KEY ="AIzaSyCKcGwHQt0GzTbi_LFcoouXonCS4zeqauI";

export const baseParams ={
    part:"snippet",
    maxResults:10,
    key:KEY,
};
export default axios.create({
         baseURL: "https://www.googleapis.com/youtube/v3",
});