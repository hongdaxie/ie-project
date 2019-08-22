import{
    Home,
    Vaccinations,
    // Recommondations,
    AboutUs,
    NotFound
} from '../views'


export const mainRoutes = [
    {
        pathname: "/Home",
        component: Home,
        title : "Home",
        isNav : true,
    },
    {
        pathname: "/Vaccinations",
        component: Vaccinations,
        title : "Vaccinations",
        isNav : true,
    },
    // {
    //     pathname: "/Recommondations",
    //     component: Recommondations,
    //     title : "Recommondations",
    //     isNav : true,
    // },
    {
        pathname: "/AboutUs",
        component: AboutUs,
        title : "AboutUs",
        isNav : true,
    },
    {
        pathname: "/404",
        component: NotFound
    }
]
