import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const AddTeacher = () => {
  const { handleSubmit } = useForm();
  const [teacherInfo, setTeacherInfo] = useState([]);
  const [teacher, setTeacher] = useState({});
  const [singleTeacher, setSingleTeachr] = useState([]);

  const handleValue = (e) => {
    const newUser = { ...teacher };
    newUser[e.target.name] = e.target.value;
    setTeacher(newUser);
  };

  const getTeacherInformation = async () => {
    try {
      const res = await fetch("/get_allTeacher_info", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setTeacherInfo(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getATeacherInformation = async (_id) => {
    try {
      const res = await fetch(`/get_a_Teacher_info/${_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setSingleTeachr(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTeacherInformation();
    getATeacherInformation();
  }, []);

  const deleteTeacherInfo = async (id) => {
    try {
      const res = await fetch(`/delete_aTeacher_info/${id}`, {
        method: "DELETE",
      });

      const data = await res.text();
      if (data) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            const remainCourse = teacherInfo.filter(
              (course) => course._id !== id
            );
            setTeacherInfo(remainCourse);
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (e) => {
    const { name, email, designation, phone } = teacher;
    console.log(teacher);

    const res = await fetch("/addteacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        designation,
        phone,
      }),
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      toast.error("Email already used!", {
        position: toast.POSITION.TOP_CENTER,
        duration: 2000,
      });
    } else {
      toast.success("Teacher added successfully", {
        position: toast.POSITION.TOP_CENTER,
        duration: 4000,
      });
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5   md:mx-auto ">
        <div className="flex flex-col text-start w-full md:mx-auto ">
          <h1 className="sm:text-3xl md:text-xl font-medium title-font mb-2 text-gray-900">
            Teacher Information
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-2/2 md:w-3/3 mx-auto  shadow "
        >
          <div className="flex flex-wrap mx-4">
            <div className="p-2 md:w-1/6 w-full">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onBlur={handleValue}
                  required
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border-1 border-mainBaseColor f focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 md:w-1/6 w-full">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  onBlur={handleValue}
                  required
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border-1 border-mainBaseColor f focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 md:w-1/6 w-full">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Phone
                </label>
                <input
                  type="text"
                  onBlur={handleValue}
                  required
                  id="name"
                  name="phone"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border-1 border-mainBaseColor f focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 md:w-1/6 w-full">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Designation
                </label>
                <select
                  id="country"
                  name="designation"
                  autoComplete="country-name"
                  onBlur={handleValue}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border-1 border-mainBaseColor f focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="Senior">Senior</option>
                  <option value="Expert">Expert</option>
                  <option value="Mid Level">Mid Level</option>
                </select>
              </div>
            </div>
            <div className="pt-2 ps-2  md:w-1/6 w-full">
              <div className="relative">
                <label for="Image" className="leading-7 text-sm text-gray-600">
                  Image
                </label>
                <input
                  type="file"
                  id="file"
                  //  onBlur={handleValue}

                  name="file"
                  className="w-full bg-gray-100 bg-opacity-50 rounded  focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-  leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-4 w-full md:w-1/6">
              <button className="flex ml-auto text-white bg-mainBaseColor border-0 py-2 px-8 focus:outline-none  rounded text-lg">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />

      <div className="flex flex-col  h-96">
        <div className="mt-4 sm:overflow-x-auto   sm:mx-6 lg:mx-8 mx-12 ">
          <div className="py- align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden  border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teacherInfo.map((teacherInfo) => (
                    <tr key={teacherInfo.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {teacherInfo.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {teacherInfo.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {teacherInfo.phone}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {teacherInfo.designation}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className=" py-4 whitespace-nowrap text-left text-lg font-medium text-red-500">
                        <button
                          className=" zmdi zmdi-delete"
                          onClick={() => deleteTeacherInfo(teacherInfo._id)}
                        />
                      </td>
                      <td className="pe-4 py-4 whitespace-nowrap text-left text-lg font-medium text-mainBaseColor">
                        <button
                          className=""
                          onClick={() =>
                            getATeacherInformation(teacherInfo._id)
                          }
                        >
                          edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTeacher;
