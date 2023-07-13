
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h2 className='border-8'>JobHunter</h2>
            <nav>

                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>


            </nav>
            <button>Start Applying</button>

        </div>
    );
};

export default Header;