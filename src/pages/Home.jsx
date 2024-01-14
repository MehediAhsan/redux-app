
import { useEffect } from 'react';
import loadPostData from '../redux/thunk/loadPostData';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPostData())
    })
    return (
        <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts?.map((item, idx) => (
                        <li key={idx} className="border rounded-lg">
                            <div className="flex items-start justify-between p-4">
                                <div className="space-y-2">
                                    {item.icon}
                                    <h4 className="text-blue-400 font-semibold">{item.title.slice(0,20)}</h4>
                                    <p className="text-gray-300 text-sm">{item.body.slice(0.100)}...</p>
                                </div>
                            </div>
                            <div className="py-3 px-4 border-t text-right">
                                <Link to={`post/${item.id}`} className="text-blue-400 hover:text-indigo-500 text-sm font-medium">
                                    View Details
                                </Link>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
    );
};

export default Home;