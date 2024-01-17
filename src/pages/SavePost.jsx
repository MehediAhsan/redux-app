import { useDispatch, useSelector } from 'react-redux';
import { HiDocumentMinus } from "react-icons/hi2";
import { unsavePost } from '../redux/actions/postAction';

const SavePost = () => {
    const posts = useSelector((state) => state.savePosts);
    const dispatch = useDispatch();

    const handleUnSavePost = (id) => {
        dispatch(unsavePost(id))
    }

    return (
        <section className="py-16">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                {
                    posts.length === 0 ? <div className='text-yellow-500'>No Save Post Available...</div> : <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts?.map((item, idx) => (
                            <li key={idx} className="border rounded-lg flex flex-col justify-between">
                                <div className="flex items-start justify-between p-4">
                                    <div className="space-y-2">
                                        {item.icon}
                                        <h4 className="text-blue-400 font-semibold">{item.title.slice(0, 20)}</h4>
                                        <p className="text-gray-300 text-sm">{item.body.slice(0.100)}...</p>
                                    </div>
                                </div>
                                <div className="py-3 px-4 border-t text-right flex justify-end">
                                    <button onClick={() => handleUnSavePost(item.id)} className="cursor-pointer flex items-center rounded-md duration-100 p-2 text-red-400">
                                    <HiDocumentMinus />
                                        <span className="text-sm text-red-400 font-medium pr-1">UnSaved</span>
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                }
            </div>
        </section>
    );
};

export default SavePost;