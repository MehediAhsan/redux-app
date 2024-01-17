import { useEffect, useState } from 'react';
import loadPostData from '../redux/thunk/loadPostData';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { savePost } from '../redux/actions/postAction';
import Loading from '../components/Loading';
import ReactPaginate from 'react-paginate';

const Home = () => {
    const { posts, loading } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 6;

    const handleSavePost = (id) => {
        const selectedPost = posts.find(post => post.id === id);
        dispatch(savePost(selectedPost))
    }

    const indexOfLastPost = (currentPage + 1) * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    useEffect(() => {
        if (posts?.length === 0) {
            dispatch(loadPostData())
        }
    }, [])

    return (
        <section className="">
            {
                loading && <Loading></Loading>
            }
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">

                <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        currentPosts?.map((item, idx) => (
                            <li key={idx} className="border rounded-lg flex flex-col justify-between">
                                <div className="flex items-start justify-between p-4">
                                    <div className="space-y-2">
                                        {item.icon}
                                        <h4 className="text-blue-400 font-semibold">{item.title.slice(0, 20)}</h4>
                                        <p className="text-gray-300 text-sm">{item.body.slice(0.100)}...</p>
                                    </div>
                                </div>
                                <div className="py-3 px-4 border-t text-right flex justify-between items-center">
                                    <button onClick={() => handleSavePost(item.id)} className="cursor-pointer flex items-center fill-yellow-400 rounded-md duration-100 p-2">
                                        <svg viewBox="0 -0.5 25 25" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" clipRule="evenodd" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="text-sm text-yellow-400 font-medium pr-1">Save Post</span>
                                    </button>
                                    <Link to={`post/${item.id}`} className="text-blue-400 hover:text-indigo-500 text-sm font-medium">
                                        View Details
                                    </Link>
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(posts.length / postsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        </section>
    );
};

export default Home;