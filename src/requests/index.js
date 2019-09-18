import axios from "axios"

const service = axios.create({
    baseURL: "http://api.age50vaccine.ml"
    // baseURL: "http://localhost:8080"
})

// const googleSearchService = axios.create({
//     baseURL: "https://www.googleapis.com/customsearch"
// })

//get hospitals by suburb
export const getHospitalsBySuburb = (suburb) =>{
    return service.get(`/hospital/findBySuburb/${suburb}`)
}

// //searchImageURL
// export const getHospitalImageURL = (hospitalName) =>{
//     return googleSearchService.get(`v1?key=YourKey&cx=010857273807497535145:avarjzi-g-i&q=${hospitalName}&num=1&searchType=image`)
// }


export const getSuburbList = () => {
    return service.get(`/hospital/findAllSuburb`)
}

// export const findHospitalById = (id) => {
//     return service.get(`/hospital/${id}`)
// }