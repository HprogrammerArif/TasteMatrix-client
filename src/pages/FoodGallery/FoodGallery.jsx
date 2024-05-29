import { useState } from "react";
import Cover from "../../components/Cover/Cover";
import TopIntro from "../../components/Intro/TopIntro";
import Modal from "./Modal";
import useAllFood from "../../hooks/useAllFood";

const FoodGallery = () => {
  const [foods] = useAllFood()
  console.log(foods);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="mb-12">
        <Cover
          img="https://i.ibb.co/88r2D5z/photo-1511688878353-3a2f5be94cd7-q-80-w-1374-auto-format-fit-crop-ixlib-rb-4-0.jpg"
          title="FOOD GALLERY"
          subTitle="Would you like to see?"
        ></Cover>

        <TopIntro
          subHeading="Our Top Feedback"
          heading="Provide Your Feedback By Clicking Add Button"
          description="Our Top Foods is your gateway to extraordinary culinary experiences.
      We believe that you deserve nothing but the best, which is why we
      meticulously curate our selection to offer you exceptional flavors"
        ></TopIntro>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 px-4">
        {foods.map((food) => (
          <div key={food._id}>
            {/* <GalaryCard food={food}></GalaryCard> */}

            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
              <div
                className={`relative w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md`}
                style={{ backgroundImage: `url(${food.food_image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-300">
                  <p className="text-lg font-bold">Name: {food.made_by}</p>
                  {/* You can add more content here if needed */}
                  <p className="text-sm">
                    {" "}
                    <b>Feedback: </b>{" "}
                    {food.description && food.description.length > 30
                      ? `${food.description.slice(0, 30)}...`
                      : food.description}
                  </p>
                </div>

                <div>
                  <button
                    className="absolute bottom-4 right-4 bg-gradient-to-l from-violet-700 to-green-800  text-white font-bold py-2 px-4 rounded"
                    onClick={openModal}
                  >
                    Add
                  </button>
                  <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;

{
  /* <div x-data="{ isOpen: true }" class="relative flex justify-center">
    <button @click="isOpen = true" class="px-6 py-2 mx-auto tracking-wide text-white bg-blue-600 rounded-md ">
        Open Modal
    </button>

    <div x-show="isOpen" 
        x-transition:enter="transition duration-300 ease-out"
        x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
        x-transition:leave="transition duration-150 ease-in"
        x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
        x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        class="fixed inset-0 z-10 overflow-y-auto" 
        aria-labelledby="modal-title" role="dialog" aria-modal="true"
    >
        <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

                <div class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                    <h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                        Invite your team
                    </h3>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Your new project has been created. Invite your
                        team to collaborate on this project.
                    </p>

                    <form class="mt-4" action="#">
                        <label for="emails-list" class="text-sm text-gray-700 dark:text-gray-200">
                            Email address
                        </label>

                        <label class="block mt-3" for="email">
                            <input type="email" name="email" id="email" placeholder="user@email.xyz" value="devdhaif@gmail.com" class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <label class="block mt-3" for="email">
                            <input type="email" name="email" id="email" placeholder="user@email.xyz" class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <label class="block mt-3" for="email">
                            <input type="email" name="email" id="email" placeholder="user@email.xyz" class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <button type="button" class="mt-2 flex items-center rounded py-1.5 px-2 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none dark:text-blue-400 dark:hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>

                            <span class="mx-2">Add another</span>
                        </button>


                        <div class="mt-4 sm:flex sm:items-center sm:-mx-2">
                            <button type="button" @click="isOpen = false" class="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                Cancel
                            </button>

                            <button type="button" class="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                Send invites
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
</div> */
}
