import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import img from "../Images/profile.jpg";
import EditProfile from "../../../src/Components/Header/EditProfile";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { userContext } from "../../App";
import toast from "react-hot-toast";

const About = async () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [user, setUser] = useState({});
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  try {
    const res = await fetch("/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
  } catch (err) {
    console.log(err);
  }

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container " style={{ marginTop: "40px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mt-6">
          <div className="col-md-4 ">
            <img className="pr" src={img} alt="" />
          </div>
          <div className="col-md-6">
            <div className="">
              <button
                type="button"
                onClick={openModal}
                className="px-4 py-2 text-sm font-medium text-dark bg-mainBaseColor rounded-md  hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Edit
              </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0" />
                  </Transition.Child>

                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <EditProfile></EditProfile>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={closeModal}
                        >
                          Got it, thanks!
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
