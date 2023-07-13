

import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';


const Main = () => {
    
console.log('Hiiii');

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;