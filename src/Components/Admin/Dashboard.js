import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allOrder } from "../Redux/Action/Order";
import { getAdminProducts, getProducts } from "../Redux/Action/Product";
import { allUser } from "../Redux/Action/User";
import Sidebar from "./Sidebar";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";


const Dashboard = () => {
  const dispatch = useDispatch();

  const { productCount } = useSelector((state) => state.ProductsData);

  const { totalAmount, totalOrder, orders } = useSelector(
    (state) => state.allOrder
  );
  const { users } = useSelector((state) => state.allUserInfo);



  useEffect(() => {
    dispatch(getProducts()); 
    dispatch(allOrder());
    dispatch(allUser());
  }, [dispatch]);

  const user = users.length;

  const state = {
    labels: ["Users", "Products", "Income", "Orders"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#175000", "#003350", "#35014F"],
        data: [user, productCount, totalAmount, totalOrder],
      },
    ],
  };
  return (
    <div class="bg-gray-100 dark:bg-gray-800 h-screen   overflow-hidden ">
      <div class="md:flex items-start justify-between">
        <div class=" md:w-2/12 md:pr-12   ">
          <Sidebar />
        </div>

        <div class="  w-full md:w-10/12 ml-0 mt-mmt2 md:mt-20 md:ml-8 md:space-y-4  ">
          <div class="overflow-auto h-screen ">
            <div
              id="main-content"
              class="h-full w-full bg-gray-50  overflow-y-auto "
            >
              <div class="mt-14 md:mt-4 mb-4 w-full grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-2">
                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div class="p-3 rounded-full bg-mainBaseColor bg-opacity-75">
                    <svg
                      class="h-8 w-8 text-white"
                      viewBox="0 0 28 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>

                  <div class="mx-5">
                    <h4 class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                      {users && users.length}
                    </h4>
                    <div class="text-gray-500"> Users</div>
                  </div>
                </div>
                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div class="p-3 rounded-full bg-mainBaseColor bg-opacity-75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      color="white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>

                  <div class="mx-5">
                    <h4 class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                      {productCount && productCount}
                    </h4>
                    <div class="text-gray-500"> Products</div>
                  </div>
                </div>
                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div class="p-3 rounded-full bg-mainBaseColor bg-opacity-75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      color="white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <div class="mx-5">
                    <h4 class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                      {totalAmount && totalAmount}
                    </h4>
                    <div class="text-gray-500"> Income</div>
                  </div>
                </div>
                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div class="p-3 rounded-full bg-mainBaseColor bg-opacity-75">
                    <svg
                      class="h-8 w-8 text-white"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>

                  <div class="mx-5">
                    <h4 class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                      {totalOrder && totalOrder}
                    </h4>
                    <div class="text-gray-500"> Orders</div>
                  </div>
                </div>
              </div>
              <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 ">
                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  ">
                  <div class="mb-4 flex items-center justify-between">
                    <div>
                      <h3 class="text-xl font-bold text-gray-900 mb-2">
                        Latest Transactions
                      </h3>
                      <span class="text-base font-normal text-gray-500">
                        This is a list of latest transactions
                      </span>
                    </div>
                    <div class="flex-shrink-0">
                      <a
                       
                        class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
                      >
                        View all
                      </a>
                    </div>
                  </div>
                  <div class="flex flex-col mt-8">
                    <div class="overflow-y-auto  rounded-lg">
                      <div class="align-middle inline-block min-w-full max-h-96 ">
                        <div class="shadow overflow-hidden sm:rounded-lg">
                          <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  class="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Transaction id
                                </th>
                                <th
                                  scope="col"
                                  class="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Date & Time
                                </th>
                                <th
                                  scope="col"
                                  class="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Amount
                                </th>
                              </tr>
                            </thead>
                            <tbody class="bg-white">
                              {orders &&
                                orders.map((order) => (
                                  <tr>
                                    <td class="p-3 whitespace-nowrap text-xs font-normal text-gray-900">
                                      {order.paymentInfo.id}
                                      <span class="font-semibold bg-green-100 text-green-700 rounded-full x-2">
                                        {order.paymentInfo.status}
                                      </span>
                                    </td>
                                    <td class="p-3 whitespace-nowrap text-sm font-normal text-gray-500">
                                      {String(order.createdAt).substr(0, 10)}
                                    </td>
                                    <td class="p-3 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      TK. {order.totalPrice}
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p- 2xl:col-span-2 max-h-96">
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center justify-start flex-1 text-green-500 text-base font-bold">
                      <Doughnut
                        className="max-h-80"
                        data={state}
                        options={{
                          title: {
                            display: true,
                            text: "Average Rainfall per month",
                            fontSize: 20,
                          },
                          legend: {
                            display: true,
                            position: "right",
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <footer class="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-">
                <ul class="flex items-center flex-wrap mb-6 md:mb-0">
                  <li>
                    <a
                      href=""
                      class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                    >
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                    >
                      Licensing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-sm font-normal text-gray-500 hover:underline"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div class="flex sm:justify-center space-x-6">
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </footer>
              <p class="text-center text-sm text-gray-500 my-10">
                &copy; 2019-2021{" "}
                <a
                 
                  class="hover:underline"
                  target="_blank"
                >
                 E-shop
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
