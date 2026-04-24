export const ROOT_URL = process.env.baseURL ? "https://help.lalicat.com/lalicat/" : "https://help.lalicat.com/lalicat/"
export const WP_REST_API = ROOT_URL+"wp-json/lalicat/"
export const POSTS_API_URL = WP_REST_API+"posts/"
export const POST_API_URL = WP_REST_API+"post/"
export const SLUGS_API_URL = WP_REST_API+"slugs"
export const POST_CONTACT_URL = WP_REST_API+"contact"
export const GET_SITEMAP_URL = WP_REST_API+"sitemap"
export const POSTS_PER_PAGE = 12
export const GOOGLE_CAPTCHA_KEY = '6LdeK-4eAAAAANUBE-n8scTbPMTOom13Gt6Yzzkk'
export const GOOGLE_SECRET = '6LdeK-4eAAAAAGJ51DR1lE9ytKDkibXjsYbWKTUX'
export const SIDEBAR_MENU = WP_REST_API+"docs-sidebar"
export const SEARCH_RESULT_URL = WP_REST_API+"search"
export const SUPPORT_INDEX_API = WP_REST_API+"support-index/"
export const GET_REVIEWS = WP_REST_API+"reviews"
export const getAbsoluteURL = (path) => {
    const baseURL = process.env.baseURL ? `https://${process.env.baseURL}` : "http://localhost:3000"
    return baseURL + path
}
export const GET_RELEASES = WP_REST_API+"releases/"