// import Loadable from './loadable'
import Loadable from 'react-loadable'
import {Loading} from '../components'



const Home = Loadable({
    loader: () => import('./Home'),
    loading : Loading
})

const Vaccinations = Loadable({
    loader: () => import('./Vaccinations'),
    loading : Loading
})

const Recommondations = Loadable({
    loader: ()=> import('./Recommondations'),
    loading: Loading
})

const Quiz = Loadable({
    loader: ()=> import('./Quiz'),
    loading: Loading
})

const Travel = Loadable({
    loader: ()=> import('./Travel'),
    loading: Loading
})

const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading : Loading
})

export{
    Home,
    Vaccinations,
    Recommondations,
    Quiz,
    Travel,
    NotFound
}