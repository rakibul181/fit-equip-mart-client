import Menu from '../header/Menu';
import { Outlet } from 'react-router-dom';

const MainLayout = ( ) => {
    return (
        <>
        <Menu/>
        <Outlet/>
        </>
    );
};

export default MainLayout;