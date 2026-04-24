import axios from 'axios';
import {
    POSTS_API_URL,
    POST_API_URL,
    POSTS_PER_PAGE,
    SLUGS_API_URL,
    POST_CONTACT_URL,
    GET_SITEMAP_URL,
    SEARCH_RESULT_URL,
    SIDEBAR_MENU,
    SUPPORT_INDEX_API,
    GET_REVIEWS,
    GET_RELEASES
} from './constants';

export const getAllSlugs = async () => {
  try {
    const { data } = await axios.get(SLUGS_API_URL)
    return data
  }catch(error){
    console.log(error)
  }
}

export const getRecentPosts = async (lang = 'en', pageNumber = 1) => {
    const POSTS_PER_PAGE=4
    try {
        if(lang !== 'en'){
            const { data } = await axios.get(POSTS_API_URL+POSTS_PER_PAGE+'/'+pageNumber+'/'+lang)
            return data
        }
        const { data } = await axios.get(POSTS_API_URL+POSTS_PER_PAGE+'/'+pageNumber)
        return data
    }catch(error){
        console.log(error)
    }
}

export const getCurrentPagePosts = async (lang = 'en', pageNumber = 1) => {
  try {
      if(lang !== 'en'){
          const { data } = await axios.get(POSTS_API_URL+POSTS_PER_PAGE+'/'+pageNumber+'/'+lang)
          return data
      }
      const { data } = await axios.get(POSTS_API_URL+POSTS_PER_PAGE+'/'+pageNumber)
      return data
  }catch(error){
    console.log(error)
  }
}

export const getSinglePostOrPage = async (slug, lang='en') => {
  try {
      if(lang !== 'en'){
          const {data} = await axios.get(POST_API_URL+slug+'/'+lang)
          return data
      }

      const { data } = await axios.get(POST_API_URL+slug)
      return data

  }catch(error){
    console.log(error)
  }
}

export const postContactMsg = async (title, email, message) => {
   try {
     const {data} = await axios.post(POST_CONTACT_URL, {title:title, email:email, message:message})
     return data
   }catch(error){
     return error
   }
}

export const getReviews = async () => {
    try {
        const {data} = await axios.get(GET_REVIEWS)
        return data
    }catch (error){
        console.log(error)
    }
}

export const getSitemap = async (lang) => {
   try {
     if(lang === 'en'){
         const {data} = await axios.get(GET_SITEMAP_URL)
         return data
     }else{
         const {data} = await axios.get(GET_SITEMAP_URL+'/'+lang)
         return data
     }
   }catch(error){
     console.log(error)
   }
}

export const SearchReq = async (searchTerm) => {
    try {
        const {data} = await axios.post(SEARCH_RESULT_URL, {search: search})
        return data
    }catch(error){
        console.log(error)
    }
}

export const getDocsSidebar = async (lang = 'en') => {
    try {
        if(lang !== 'en'){
            const {data} = await axios.get(SIDEBAR_MENU+'/'+lang)
            return data
        }

        const {data} = await axios.get(SIDEBAR_MENU)
        return data

    }catch(error){
        console.log(error)
    }
}

export const getSupportIndex = async(slug, lang='en') => {
    try{
        if(lang !== 'en'){
            const {data} = await axios.get(SUPPORT_INDEX_API+slug+'/'+lang)
            return data
        }
        const {data} = await axios.get(SUPPORT_INDEX_API+slug)
        return data
    }catch(error){
        console.log(error)
    }
}

export const getReleases = async (pageNumber = 1) => {
    try{
        const {data} = await axios.get(GET_RELEASES+POSTS_PER_PAGE+'/'+pageNumber)
            return data
    }catch(error){
        console.log(error)
    }
}