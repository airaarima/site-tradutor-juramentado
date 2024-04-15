export const getImgPath = (path) => {
    return new URL(`/assets/img/${path}`, import.meta.url).href
}