import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between items-center py-5">
            <Link className="text-blue-400 text-2xl font-medium" to="/">ReduxApp</Link>
            <div>
                <ul className="flex gap-5">
                    <li><Link to="/add" className="border-b-2 border-primary">Add Posts</Link></li>
                    <li><Link to="/list" className="border-b-2 border-primary">Post List</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;