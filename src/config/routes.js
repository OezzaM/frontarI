// Layout
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

// Admin Pages
/* import AdminHome from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn'; */

// Pages
import Home from '../components/Home'; 
import Panel from '../components/Panel'; /*
import Contacto from '../pages/Contacto'; */

// Otras
import Error404 from '../shared/pages/Error404';
import Csgo from '../components/Csgo';
import Cs from '../components/Cs';
import Farcry from '../components/Farcry';


const routes = [
    {
        path: '/admin',
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: '/admin',
                component: Panel,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },
    {
        path: '/',
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/CS-GO',
                component: Csgo,
                exact: true
            },
            {
                path: '/Counter-Strike',
                component: Cs,
                exact: true
            },
            {
                path: '/Farcry',
                component: Farcry,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
]

export default routes;