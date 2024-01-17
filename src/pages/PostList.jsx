import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadPostData from './../redux/thunk/loadPostData';
import deletePostData from "../redux/thunk/deletePostData";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const PostList = () => {
    const { posts, loading } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleDeletePost = (postId) => {
        dispatch(deletePostData(postId));
    };

    useEffect(() => {
        if (posts?.length === 0) {
            dispatch(loadPostData())
        }
    }, []);


    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 pb-10">
            {
                loading ? <Loading></Loading> :

                    <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">

                        <table className="w-full table-auto text-sm text-left">
                            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                                <tr>
                                    <th className="py-3 px-6">SN</th>
                                    <th className="py-3 px-6">Title</th>
                                    <th className="py-3 px-6">Body</th>
                                    <th className="py-3 px-6"></th>

                                </tr>
                            </thead>
                            <tbody className="text-gray-200 divide-y">
                                {
                                    posts?.slice(0, 10).map((item, idx) => (
                                        <tr key={idx}>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.title.slice(0, 20)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.body.slice(0, 50)}...</td>
                                            <td className="text-right px-6 whitespace-nowrap">
                                                <Link to={`/posts/${item.id}`} className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                    Edit
                                                </Link>
                                                <button onClick={() => handleDeletePost(item.id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default PostList;