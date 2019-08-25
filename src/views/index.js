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

const AboutUs = Loadable({
    loader: ()=> import('./AboutUs'),
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
    AboutUs,
    NotFound
}