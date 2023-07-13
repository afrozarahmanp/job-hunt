

import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';


const Main = () => {
    
console.log('Hiiii');

    return (
        <div className='w-5/6 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;