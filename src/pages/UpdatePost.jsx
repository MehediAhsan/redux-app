import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import updatePostData from '../redux/thunk/updatePostData';

const UpdatePost = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const userId = form.userId.value;
        const title = form.title.value;
        const body = form.body.value;
        const post = {
            title: title,
            body: body,
            userId: userId
        }
        dispatch(updatePostData(post,id))
        navigate('/post-list')
    }

    const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div className="py-14">
      <div className="w-10/12 md:w-4/12 mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-medium">UserId</label>
            <input
              type="number"
              name="userId"
              value={post?.userId}
              required
              className="w-full mt-2 px-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={post?.title}
              required
              className="w-full mt-2 px-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Body</label>
            <textarea
            name="body"
            defaultValue={post?.body}
              required
              className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            ></textarea>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
