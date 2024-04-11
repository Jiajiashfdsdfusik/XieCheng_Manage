import Login from './pages/login';
import Manage from './pages/manage';
import { createBrowserRouter } from 'react-router-dom';
 
const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/manage',
        element: <Manage />
    }
])
 
export default router