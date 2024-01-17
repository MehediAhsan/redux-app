import { useDispatch } from 'react-redux';
import addPostData from '../redux/thunk/AddPostData';
import { useNavigate } from 'react-router-dom';
const AddPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

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
        console.log(post);
        dispatch(addPostData(post))
        form.reset();
        navigate('/post-list')
    }
  return (
    <div className="py-14">
      <div className="w-10/12 md:w-4/12 mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-medium">UserId</label>
            <input
              type="number"
              name="userId"
              required
              className="w-full mt-2 px-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
              placeholder='User Id'
            />
          </div>
          <div>
            <label className="font-medium">Title</label>
            <input
              type="text"
              name="title"
              required
              className="w-full mt-2 px-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
              placeholder='Post Title'
            />
          </div>
          <div>
            <label className="font-medium">Body</label>
            <textarea
            name="body"
              required
              className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
              placeholder='Post Details...'
            ></textarea>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-600 rounded-lg duration-150">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
