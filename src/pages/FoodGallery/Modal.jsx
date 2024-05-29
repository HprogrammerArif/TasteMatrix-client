import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Modal = ({ isOpen, onClose }) => {
  const { user } = useAuth();

  const handleFeedback = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Send It!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Feedback!",
          text: "Your feedback has been send.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div
      className={`fixed inset-0 z-10 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className={`relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle
            ${
              isOpen
                ? "transition duration-300 ease-out translate-y-0 opacity-100 sm:scale-100"
                : "transition duration-150 ease-in translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            }
          `}
        >
          <h3
            className="text-4xl text-center bg-gradient-to-r from-green-700 to-violet-800 bg-clip-text text-transparent font-bold"
            id="modal-title"
          >
            Provide Your Feedback
          </h3>
          <p className="mt-2 text-sm text-center text-gray-500">
            Your Feedback will be taken action. Your name will be secure.
          </p>
          <form className="mt-4" action="#">
            <label htmlFor="emails-list" className="text-sm text-gray-700">
              User Name:
            </label>
            <label className="block mt-3">
              <input
                type="text"
                name="email"
                id="email"
                value={user?.displayName}
                disabled
                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md "
              />
            </label>
            <label className="block mt-3">
              Image Url:
              <input
                type="url"
                name="image"
                id="email"
                placeholder="image url"
                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              />
            </label>
            <label className="block mt-3">
              Feedback:
              <textarea
                placeholder="Provide your valuable feedback"
                name=""
                id=""
                cols="6"
                rows="4"
                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              ></textarea>
            </label>

            <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full px-4 py-2  font-medium    text-white bg-gradient-to-l from-red-700 to-green-800 border  rounded-md sm:w-1/2 sm:mx-2 "
              >
                Cancel
              </button>
              <button
                onClick={handleFeedback}
                type="button"
                className=" py-2  w-[70%] text-white bg-gradient-to-l from-red-700 to-green-800 px-2 rounded-md"
              >
                Send Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
