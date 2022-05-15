(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    143: function (e, t, s) {
      "use strict";
      s.r(t);
      var r = s(0),
        c = s.n(r),
        a = s(40),
        n = s.n(a),
        l = (s(91), s(92), s(3)),
        i = s.n(l),
        o = s(7),
        d = s(8),
        j = s(11),
        x = s(4),
        u = s(16),
        b = s.n(u),
        p = function (e, t) {
          return (function () {
            var s = Object(o.a)(
              i.a.mark(function s(r) {
                var c, a, n;
                return i.a.wrap(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            (s.prev = 0),
                            r({ type: "USER_REQUEST" }),
                            (c = {
                              headers: { "Content-Type": "application/json" },
                              withCredentials: !0,
                            }),
                            (s.next = 5),
                            b.a.post(
                              "http://localhost:1234/v1/user/login",
                              { email: e, password: t },
                              c
                            )
                          );
                        case 5:
                          (a = s.sent),
                            (n = a.data),
                            console.log(n),
                            r({ type: "USER_SUCCESS", payload: n }),
                            (s.next = 15);
                          break;
                        case 11:
                          (s.prev = 11),
                            (s.t0 = s.catch(0)),
                            console.log(s.t0),
                            r({
                              type: "USER_FAIL",
                              payload: s.t0.response.data.msg,
                            });
                        case 15:
                        case "end":
                          return s.stop();
                      }
                  },
                  s,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return s.apply(this, arguments);
            };
          })();
        },
        m = function (e, t, s) {
          return (function () {
            var r = Object(o.a)(
              i.a.mark(function r(c) {
                var a, n, l;
                return i.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            c({ type: "USER_REGISTER_REQUEST" }),
                            (a = {
                              headers: { "Content-Type": "application/json" },
                              withCredentials: !0,
                            }),
                            (r.next = 5),
                            b.a.post(
                              "http://localhost:1234/v1/user/register",
                              { name: e, email: t, password: s },
                              a
                            )
                          );
                        case 5:
                          (n = r.sent),
                            (l = n.data),
                            c({ type: "USER_REGISTER_SUCCESS", payload: l }),
                            (r.next = 13);
                          break;
                        case 10:
                          (r.prev = 10),
                            (r.t0 = r.catch(0)),
                            c({
                              type: "USER_REGISTER_FAIL",
                              payload: r.t0.response.data.msg,
                            });
                        case 13:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
        },
        h = function () {
          return (function () {
            var e = Object(o.a)(
              i.a.mark(function e(t) {
                var s, r;
                return i.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: "ALL_USER_REQUEST" }),
                            (e.next = 4),
                            b.a.get("http://localhost:1234/v1/users", {
                              withCredentials: !0,
                            })
                          );
                        case 4:
                          (s = e.sent),
                            (r = s.data),
                            t({ type: "ALL_USER_SUCCESS", payload: r }),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            t({
                              type: "ALL_USER_FAIL",
                              payload: e.t0.response,
                            });
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        f = function (e, t) {
          return (function () {
            var s = Object(o.a)(
              i.a.mark(function s(r) {
                var c, a, n;
                return i.a.wrap(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            (s.prev = 0),
                            r({ type: "UPDATE_USER_REQUEST" }),
                            (c = {
                              headers: { "Content-Type": "application/json" },
                              withCredentials: !0,
                            }),
                            (s.next = 5),
                            b.a.put(
                              "http://localhost:1234/v1/update_user/".concat(e),
                              t,
                              c
                            )
                          );
                        case 5:
                          (a = s.sent),
                            (n = a.data),
                            r({
                              type: "UPDATE_USER_SUCCESS",
                              payload: n.success,
                            }),
                            (s.next = 13);
                          break;
                        case 10:
                          (s.prev = 10),
                            (s.t0 = s.catch(0)),
                            r({
                              type: "UPDATE_USER_FAIL",
                              payload: s.t0.response,
                            });
                        case 13:
                        case "end":
                          return s.stop();
                      }
                  },
                  s,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return s.apply(this, arguments);
            };
          })();
        },
        O = function () {
          return (function () {
            var e = Object(o.a)(
              i.a.mark(function e(t) {
                return i.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            b.a.get("http://localhost:1234/v1/logout", {
                              withCredentials: !0,
                            })
                          );
                        case 3:
                          t({ type: "LOGOUT_SUCCESS" }), (e.next = 9);
                          break;
                        case 6:
                          (e.prev = 6),
                            (e.t0 = e.catch(0)),
                            t({
                              type: "LOGOUT_FAIL",
                              payload: e.t0.response.data.message,
                            });
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 6]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        g = function () {
          return (function () {
            var e = Object(o.a)(
              i.a.mark(function e(t) {
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t({ type: "CLEAR_ERROR" });
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        v = s(10),
        y = s(5),
        w = s(1),
        E = function () {
          var e = Object(r.useState)(""),
            t = Object(y.a)(e, 2),
            s = t[0],
            c = t[1],
            a = Object(d.h)();
          return (
            Object(r.useEffect)(function () {}, []),
            Object(w.jsx)("div", {
              children: Object(w.jsx)("form", {
                onSubmit: function (e) {
                  console.log(s),
                    s.trim() ? a("/v1/products/".concat(s)) : a("/v1/products");
                },
                children: Object(w.jsx)("div", {
                  class:
                    "relative text-lg bg-transparent text-gray-800 md:pl-96",
                  children: Object(w.jsxs)("div", {
                    class: "flex items-center  border-b-2 border-teal-500 py-2",
                    children: [
                      Object(w.jsx)("input", {
                        class:
                          "bg-transparent text-sm border-none mr-3 px-2 leading-tight focus:outline-none",
                        type: "text",
                        placeholder: "Search by name or category",
                        onChange: function (e) {
                          return c(e.target.value);
                        },
                      }),
                      Object(w.jsx)("button", {
                        type: "submit",
                        class: "absolute right-0 top-0 mt-3 mr-4",
                        children: Object(w.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-5 w-5 text-gray-400",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: Object(w.jsx)("path", {
                            "fill-rule": "evenodd",
                            d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                            "clip-rule": "evenodd",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        },
        C = s(152),
        N = s(154),
        S = s(155),
        R = s(64),
        A = function () {
          var e = Object(x.b)(),
            t = Object(x.c)(function (e) {
              return e.cart;
            }).cartItems,
            s = Object(x.c)(function (e) {
              return e.userInfo;
            }),
            c = (s.error, s.isAuthenticated),
            a = s.user,
            n =
              (Object(d.h)(),
              (function () {
                var t = Object(o.a)(
                  i.a.mark(function t() {
                    return i.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            e(O()), v.c.success("Logout successfully");
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })());
          function l() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
              t[s] = arguments[s];
            return t.filter(Boolean).join(" ");
          }
          return (
            Object(r.useEffect)(function () {}, [e]),
            Object(w.jsx)(C.a, {
              as: "nav",
              className: "bg-black fixed top-0 left-0   right-0 z-50",
              children: function (e) {
                var s = e.open;
                return Object(w.jsxs)(w.Fragment, {
                  children: [
                    Object(w.jsx)("div", {
                      className: "max-w-6xl mx-auto px-2 sm:px-6 lg:px-8",
                      children: Object(w.jsxs)("div", {
                        className:
                          "relative flex items-center justify-between h-16",
                        children: [
                          Object(w.jsx)("div", {
                            className:
                              "absolute inset-y-0 left-0 flex items-center sm:hidden",
                            children: Object(w.jsxs)(C.a.Button, {
                              className:
                                "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                              children: [
                                Object(w.jsx)("span", {
                                  className: "sr-only",
                                  children: "Open main menu",
                                }),
                                s
                                  ? Object(w.jsx)(R.b, {
                                      className: "block h-6 w-6",
                                      "aria-hidden": "true",
                                    })
                                  : Object(w.jsx)(R.a, {
                                      className: "block h-6 w-6",
                                      "aria-hidden": "true",
                                    }),
                              ],
                            }),
                          }),
                          Object(w.jsxs)("div", {
                            className:
                              " flex-1 flex pl-12 md:items-center  md:justify-center sm:items-stretch sm:justify-start",
                            children: [
                              Object(w.jsx)("div", {
                                className:
                                  "text-white  flex-shrink-0 flex items-center text-3xl",
                                children: Object(w.jsx)(j.b, {
                                  to: "/home",
                                  children: Object(w.jsx)("h2", {
                                    children: "e-SHOP",
                                  }),
                                }),
                              }),
                              Object(w.jsx)("div", {
                                className: "hidden sm:block sm:ml-6 mx-auto",
                                children: Object(w.jsx)("div", {
                                  className: "flex space-x-4",
                                  children:
                                    c && "admin" === a.role
                                      ? Object(w.jsxs)("div", {
                                          children: [
                                            Object(w.jsx)(j.b, {
                                              to: "/admin_dashboard",
                                              children: Object(w.jsx)("a", {
                                                className:
                                                  " text-white px-3 py-2 rounded-md text-sm font-medium",
                                                children: "Dashboard",
                                              }),
                                            }),
                                            Object(w.jsx)(j.b, {
                                              to: "/v1/products",
                                              children: Object(w.jsx)("a", {
                                                className:
                                                  " text-white px-3 py-2 rounded-md text-sm font-medium",
                                                children: "Products",
                                              }),
                                            }),
                                          ],
                                        })
                                      : Object(w.jsx)(j.b, {
                                          to: "/v1/products",
                                          children: Object(w.jsx)("a", {
                                            className:
                                              " text-white px-3 py-2 rounded-md text-sm font-medium",
                                            children: "Products",
                                          }),
                                        }),
                                }),
                              }),
                            ],
                          }),
                          Object(w.jsxs)("div", {
                            className:
                              "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
                            children: [
                              Object(w.jsx)(j.b, {
                                to: "/v1/cart",
                                children: Object(w.jsxs)("button", {
                                  type: "button",
                                  className: " p-1 rounded-full text-gray-400 ",
                                  children: [
                                    Object(w.jsx)("span", {
                                      class:
                                        "badge  bg-mainBaseColor rounded-full  text-center  text-white text-xs mr-2  -mb- mt-2 ",
                                      children: t.length,
                                    }),
                                    Object(w.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      class: "h-6 w-6 -ml-4 -mt-6",
                                      viewBox: "0 0 20 20",
                                      fill: "#fff",
                                      children: Object(w.jsx)("path", {
                                        d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              c
                                ? Object(w.jsxs)(N.a, {
                                    as: "div",
                                    className: "ml-3 relative",
                                    children: [
                                      Object(w.jsx)("div", {
                                        children: Object(w.jsxs)(N.a.Button, {
                                          className:
                                            "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                          children: [
                                            Object(w.jsx)("span", {
                                              className: "sr-only",
                                              children: "Open user menu",
                                            }),
                                            Object(w.jsx)("img", {
                                              className: "h-8 w-8 rounded-full",
                                              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                              alt: "",
                                            }),
                                          ],
                                        }),
                                      }),
                                      Object(w.jsx)(S.a, {
                                        as: r.Fragment,
                                        enter:
                                          "transition ease-out duration-100",
                                        enterFrom:
                                          "transform opacity-0 scale-95",
                                        enterTo:
                                          "transform opacity-100 scale-100",
                                        leave: "transition ease-in duration-75",
                                        leaveFrom:
                                          "transform opacity-100 scale-100",
                                        leaveTo: "transform opacity-0 scale-95",
                                        children: Object(w.jsxs)(N.a.Items, {
                                          className:
                                            "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
                                          children: [
                                            Object(w.jsx)(N.a.Item, {
                                              children: function (e) {
                                                var t = e.active;
                                                return Object(w.jsx)(j.b, {
                                                  to: "/me",
                                                  children: Object(w.jsx)("a", {
                                                    className: l(
                                                      t ? "bg-gray-100" : "",
                                                      "block px-4 py-2 text-sm text-gray-700"
                                                    ),
                                                    children: "Profile",
                                                  }),
                                                });
                                              },
                                            }),
                                            Object(w.jsx)(N.a.Item, {
                                              children: function (e) {
                                                var t = e.active;
                                                return Object(w.jsx)("button", {
                                                  onClick: function () {
                                                    return n();
                                                  },
                                                  className: l(
                                                    t ? "bg-gray-100" : "",
                                                    "block px-4 py-2 text-sm text-gray-700"
                                                  ),
                                                  children: "Sign out",
                                                });
                                              },
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  })
                                : Object(w.jsxs)("div", {
                                    children: [
                                      Object(w.jsx)(j.b, {
                                        to: "/v1/user/login",
                                        children: Object(w.jsx)("a", {
                                          className:
                                            "bg-mainBaseColor mx-2 text-white px-3 py-2 rounded-md text-sm font-medium",
                                          children: "Sign in",
                                        }),
                                      }),
                                      Object(w.jsx)(j.b, {
                                        to: "/v1/user/register",
                                        children: Object(w.jsx)("a", {
                                          className:
                                            "bg-mainBaseColor text-white px-3 py-2 rounded-md text-sm font-medium",
                                          children: "Sign up",
                                        }),
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(w.jsx)(C.a.Panel, {
                      className: "sm:hidden",
                      children: Object(w.jsx)("div", {
                        className: "px-2 pt-2 pb-3 space-y-1 flex",
                        children: Object(w.jsxs)(C.a.Button, {
                          children: [
                            Object(w.jsx)(j.b, {
                              to: "/admin_dashboard",
                              children: Object(w.jsx)("a", {
                                className:
                                  " text-white px-3 py-2 rounded-md text-sm font-medium",
                                children: "Dashboard",
                              }),
                            }),
                            Object(w.jsx)(j.b, {
                              to: "/v1/products",
                              children: Object(w.jsx)("a", {
                                className:
                                  " text-white px-3 py-2 rounded-md text-sm font-medium",
                                children: "Products",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                });
              },
            })
          );
        },
        k = s(48),
        U = s.n(k),
        T = function (e) {
          var t = e.product;
          return Object(w.jsxs)(
            "div",
            {
              className: "group relative hover:shadow-lg bg-white",
              children: [
                Object(w.jsx)(j.b, {
                  to: "/v1/product/".concat(t._id),
                  children: Object(w.jsx)("div", {
                    className:
                      "w-full h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none",
                    children: Object(w.jsx)("img", {
                      src: t && t.image[0].url,
                      alt: "",
                      className:
                        "w-full h-40 object-center object-cover lg:w-full lg:h-60",
                    }),
                  }),
                }),
                Object(w.jsx)("div", {
                  class: "mt-4 pl-2 mb-2 flex justify-between ",
                  children: Object(w.jsxs)("div", {
                    children: [
                      Object(w.jsx)(j.b, {
                        to: "/v1/product/".concat(t._id),
                        children: Object(w.jsx)("p", {
                          class: "text-md font-sm text-mainBaseColor mb-0",
                          children: t.name,
                        }),
                      }),
                      t.offer
                        ? Object(w.jsxs)("div", {
                            className: "flex",
                            children: [
                              Object(w.jsxs)("p", {
                                class:
                                  "text-lg font-medium text-lebelColor  md:pr-4 ",
                                children: ["TK. ", t.offer],
                              }),
                              Object(w.jsxs)("p", {
                                class:
                                  "text-sm font-medium text-gray-900 mt-1 line-through",
                                children: ["TK. ", t.price],
                              }),
                            ],
                          })
                        : Object(w.jsx)("div", {
                            children: Object(w.jsxs)("p", {
                              class:
                                "text-lg font-medium  text-lebelColor  md:pr-4 ",
                              children: ["TK. ", t.price],
                            }),
                          }),
                      Object(w.jsxs)("div", {
                        className: "flex",
                        children: [
                          Object(w.jsx)("p", {
                            class: "text-sm font-medium text-gray-900 mt-1 ",
                            children: Object(w.jsx)(U.a, {
                              value: t.ratings,
                              edit: !1,
                              isHalf: !0,
                              size: 14,
                              collor: "#ffd700",
                              activeColor: "#ffd700",
                            }),
                          }),
                          Object(w.jsxs)("p", {
                            class: "text-sm md:ml-2 font- text-gray-900 mt-1 ",
                            children: ["(", t.numberOfReview, " review)"],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            },
            t._id
          );
        },
        L = function (e) {
          return (function () {
            var t = Object(o.a)(
              i.a.mark(function t(s) {
                var r, c, a;
                return i.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            s({ type: "NEW_PRODUCT_REQUEST" }),
                            (r = {
                              headers: { "Content-Type": "application/json" },
                              withCredentials: !0,
                            }),
                            (t.next = 5),
                            b.a.post(
                              "http://localhost:1234/v1/product/create",
                              e,
                              r
                            )
                          );
                        case 5:
                          (c = t.sent),
                            (a = c.data),
                            s({ type: "NEW_PRODUCT_SUCCESS", payload: a }),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            s({
                              type: "NEW_PRODUCT_FAIL",
                              payload: t.t0.response,
                            });
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        _ = function (e, t) {
          return (function () {
            var s = Object(o.a)(
              i.a.mark(function s(r) {
                var c, a, n;
                return i.a.wrap(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            console.log(t),
                            (s.prev = 1),
                            r({ type: "UPDATE_PRODUCT_REQUEST" }),
                            (c = {
                              headers: { "Content-Type": "application/json" },
                              withCredentials: !0,
                            }),
                            (s.next = 6),
                            b.a.put(
                              "http://localhost:1234/v1/product/".concat(e),
                              t,
                              c
                            )
                          );
                        case 6:
                          (a = s.sent),
                            (n = a.data),
                            console.log(n),
                            r({
                              type: "UPDATE_PRODUCT_SUCCESS",
                              payload: n.success,
                            }),
                            (s.next = 15);
                          break;
                        case 12:
                          (s.prev = 12),
                            (s.t0 = s.catch(1)),
                            r({
                              type: "UPDATE_PRODUCT_FAIL",
                              payload: s.t0.response,
                            });
                        case 15:
                        case "end":
                          return s.stop();
                      }
                  },
                  s,
                  null,
                  [[1, 12]]
                );
              })
            );
            return function (e) {
              return s.apply(this, arguments);
            };
          })();
        },
        D = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [0, 5e3];
          return (function () {
            var r = Object(o.a)(
              i.a.mark(function r(c) {
                var a, n;
                return i.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            c({ type: "ALL_PRODUCT_REQUEST" }),
                            (r.next = 4),
                            b.a.get(
                              "http://localhost:1234/v1/products?keyword="
                                .concat(e, "&page=")
                                .concat(t, "&price[gte]=")
                                .concat(s[0], "&price[lte]=")
                                .concat(s[1])
                            )
                          );
                        case 4:
                          (a = r.sent),
                            (n = a.data),
                            c({ type: "ALL_PRODUCT_SUCCESS", payload: n }),
                            (r.next = 12);
                          break;
                        case 9:
                          (r.prev = 9),
                            (r.t0 = r.catch(0)),
                            c({
                              type: "ALL_PRODUCT_FAIL",
                              payload: r.t0.response,
                            });
                        case 12:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
        },
        I = function (e) {
          return (function () {
            var t = Object(o.a)(
              i.a.mark(function t(s) {
                var r, c;
                return i.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            s({ type: "PRODUCT_DETAILS_REQUEST" }),
                            (t.next = 4),
                            b.a.get(
                              "http://localhost:1234/v1/product/".concat(e)
                            )
                          );
                        case 4:
                          (r = t.sent),
                            (c = r.data),
                            s({ type: "PRODUCT_DETAILS_SUCCESS", payload: c }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            s({
                              type: "PRODUCT_DETAILS_FAIL",
                              payload: t.t0.response,
                            });
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        P = function (e) {
          return (function () {
            var t = Object(o.a)(
              i.a.mark(function t(s) {
                var r, c;
                return i.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            s({ type: "ALL_REVIEW_REQUEST" }),
                            (t.next = 4),
                            b.a.get(
                              "http://localhost:1234/v1/reviews?id=".concat(e),
                              { withCredentials: !0 }
                            )
                          );
                        case 4:
                          (r = t.sent),
                            (c = r.data),
                            s({ type: "ALL_REVIEW_SUCCESS", payload: c }),
                            (t.next = 13);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            console.log(t.t0),
                            s({
                              type: "ALL_REVIEW_FAIL",
                              payload: t.t0.response,
                            });
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        q = function () {
          return (function () {
            var e = Object(o.a)(
              i.a.mark(function e(t) {
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t({ type: "CLEAR_ERROR" });
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        M = function () {
          return Object(w.jsx)("div", {
            className: "loading",
            children: Object(w.jsx)("div", {}),
          });
        },
        V = s.p + "static/media/img.887d4f33.jpg",
        B = (s.p, s(65)),
        F = (s(120), s(34)),
        z = function () {
          return Object(w.jsx)("div", {
            children: Object(w.jsxs)("footer", {
              class:
                "bg-black md:flex md:items-center md:justify-between shadow  p-4 md:p-6 xl:p-8 ",
              children: [
                Object(w.jsxs)("ul", {
                  class: "flex items-center flex-wrap mb-6 md:mb-0",
                  children: [
                    Object(w.jsx)("li", {
                      children: Object(w.jsx)("p", {
                        href: "#",
                        class:
                          "text-sm font-normal text-mainBaseColor hover:underline mr-4 md:mr-6",
                        children: "Terms and conditions",
                      }),
                    }),
                    Object(w.jsx)("li", {
                      children: Object(w.jsx)("a", {
                        href: "#",
                        class:
                          "text-sm font-normal text-mainBaseColor hover:underline mr-4 md:mr-6",
                        children: "Privacy Policy",
                      }),
                    }),
                    Object(w.jsx)("li", {
                      children: Object(w.jsx)("a", {
                        href: "#",
                        class:
                          "text-sm font-normal text-mainBaseColor hover:underline mr-4 md:mr-6",
                        children: "Licensing",
                      }),
                    }),
                    Object(w.jsx)("li", {
                      children: Object(w.jsx)("a", {
                        href: "#",
                        class:
                          "text-sm font-normal text-mainBaseColor hover:underline mr-4 md:mr-6",
                        children: "Cookie Policy",
                      }),
                    }),
                    Object(w.jsx)("li", {
                      children: Object(w.jsx)("a", {
                        href: "#",
                        class:
                          "text-sm font-normal text-mainBaseColor hover:underline",
                        children: "Contact",
                      }),
                    }),
                  ],
                }),
                Object(w.jsxs)("div", {
                  class: "flex sm:justify-center space-x-6",
                  children: [
                    Object(w.jsx)("a", {
                      href: "#",
                      class: "text-mainBaseColor hover:text-gray-900",
                      children: Object(w.jsx)("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: Object(w.jsx)("path", {
                          "fill-rule": "evenodd",
                          d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                          "clip-rule": "evenodd",
                        }),
                      }),
                    }),
                    Object(w.jsx)("a", {
                      href: "#",
                      class: "text-mainBaseColor hover:text-gray-900",
                      children: Object(w.jsx)("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: Object(w.jsx)("path", {
                          "fill-rule": "evenodd",
                          d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                          "clip-rule": "evenodd",
                        }),
                      }),
                    }),
                    Object(w.jsx)("a", {
                      href: "#",
                      class: "text-mainBaseColor hover:text-gray-900",
                      children: Object(w.jsx)("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: Object(w.jsx)("path", {
                          d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                        }),
                      }),
                    }),
                    Object(w.jsx)("a", {
                      href: "#",
                      class: "text-mainBaseColor hover:text-gray-900",
                      children: Object(w.jsx)("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: Object(w.jsx)("path", {
                          "fill-rule": "evenodd",
                          d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                          "clip-rule": "evenodd",
                        }),
                      }),
                    }),
                    Object(w.jsx)("a", {
                      href: "#",
                      class: "text-mainBaseColor hover:text-gray-900",
                      children: Object(w.jsx)("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: Object(w.jsx)("path", {
                          "fill-rule": "evenodd",
                          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
                          "clip-rule": "evenodd",
                        }),
                      }),
                    }),
                  ],
                }),
                Object(w.jsxs)("p", {
                  class: "text-center text-sm text-mainBaseColor my-10",
                  children: [
                    "\xa9 2022-2023 ",
                    Object(w.jsx)("a", {
                      class: "hover:underline",
                      children: "e-shop",
                    }),
                    ". All rights reserved.",
                  ],
                }),
              ],
            }),
          });
        },
        Q = function () {
          var e = Object(x.b)(),
            t = Object(x.c)(function (e) {
              return e.ProductsData;
            }),
            s = t.loading,
            c = t.error,
            a = t.products;
          Object(r.useEffect)(
            function () {
              e(D());
            },
            [e, c]
          );
          return Object(w.jsxs)(w.Fragment, {
            children: [
              Object(w.jsx)(A, {}),
              Object(w.jsx)("section", {
                class: "text-gray-600 body-font",
                children: Object(w.jsx)("div", {
                  class: "container px-5 pt-24 mx-auto",
                  children: Object(w.jsx)(B.a, {
                    navigation: !0,
                    autoplay: { delay: 2e3, disableOnInteraction: !1 },
                    modules: [F.a],
                    className: "mySwiper",
                    children: Object(w.jsx)(B.b, {
                      children: Object(w.jsx)(w.Fragment, {
                        children: Object(w.jsx)("div", {
                          class: "flex  -m-4",
                          children: Object(w.jsx)("div", {
                            class: "w-full py-4",
                            children: Object(w.jsx)("div", {
                              class: "bg-gray-100  rounded-lg",
                              children: Object(w.jsx)("img", {
                                class:
                                  "h-100 rounded w-full object-cover object-center mb-6",
                                src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREBUQEBAVFRUVGRgVEhgQGBUVFRYVFhUXFhUYFxcYHiggGBonHxUXITYhJSkrLi4uFx80OTYsOCgtLisBCgoKDg0OGxAQGi4mICUuLy0tLS0uLi0tLS0tLy4tLy0tLS0vLS0tLS8tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAUGBwj/xABHEAACAQIEAgYFBwoFAwUAAAABAgADEQQSITEFQQYTIlFhcRQygZGhIzNCUlOSsQcVYnKCk8HR0vAWNEOy4SSD8VRjosLi/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAMCBAUBBv/EADsRAAEDAQQGCQMBBwUAAAAAAAEAAhEDBCExUQUSQYGh8BMUFWFxkbHB0TIzUiJCYnKi0uHxI1NzgpL/2gAMAwEAAhEDEQA/APR4iIISIiCEiIghJUCLReCEMpEQQkREEJERBCREsY6oVpVGXdUYrz1CkjTnBCvypM5H89Yiwytm007AIZlxAFg4UKc1PTS3fYSuE4xXZ0Wo+UEob2RbgrV0uykXzU9hrqLWvBC6yJzXp9f0ZKnWMH+Vzdmmb5aD1Vv2bbqu1tDbfWWMRxeuKmRHLL2bMopsTekCQGChScxve1oIXWROeHE6o6umzjrBVVa2RQ1kORDsOyM1QHMfq25zI4Jind8tSqWPVo1j1YN21JyqoOm1729usELcxEQQkREEJERBCREQQkREEJERBCnpl2Oa+/K3lK3XMNDbTML6352kjm6v9HN4etb37Sfbzrp2rDLttbTwghWQVsbg3+jrtrrfvkJdTNle22mfbv0+PdLUEJERBCREQQkSjGUzStVtdKk7Veb/AAKayg94loU7yk0lXjhDlQqkBstyeQqZCf8A4Vj+xJ8L4u9VwjUwvZLG1zqEoMR76rD9mJGk7MTq6x/8u2blPqtWJjitxEhmlc0l2jZ8z5H4R1WrlxUokc0Zodo2fM+RR1WrlxUpWQzSmaHaNn/I+RR1WrlxU4kc0Zodo2fM+RR1WrlxU7zNpUVKKSN81zr3VP6R/ZmvzRmnO0bPmfIo6rVy4rYNRGdhl+jfnYa7nn/5vKvhxYWF/VzW15nMT3cprs0Zp3tGz5nyKOq1cuKv4kWci1rbCxHwMtXkc0Aw7Rs/5cCjqtXLipRKCSne0LPnwK51apkqREQ7Qs+fAo6tUySIic7Qs+fAo6tUySIkbw7Qs/5cCjq1TJSiRvBaHaNn/LgUdWqZcVO0Xll61hc8pKm9xeWKNdlUSwpb6bmGHK7YZb31vtblbe8llXMBmNtLm2x56SObs2sL3vfn5SXWDMDkFhbTWxt3xqgqACx11Hq6b6/CQkw4sRlGu3hrykIISIiCEiIghWcVXVFzO6qve5CjXbUzVY/i4tlokktorAXH/bB+cbyuosSxAGuV0gNqJsSNRsSvPvDr/unKqQwJFm0s9rVLga2cq7XG/wA5WC+BnnNL1NWsB+6PUrSsn29/whsRrqLfRObsn5PsE6nQtTU37b1ajAWE6Do9QNmqNuxsLai4ZmqFeds7FR4U1M13DuHNVOYkhNy99W0tdGsMzEaZwAqqbIN2HTU0CgKoAAAAA0AA0AA5CZ1NkfqPPPyrWKlERGLsJE0NTiVZUpu1SkBVfq6YFGo5zEtlBPWjkp1tLWD4y9UXp16R7KOPkKlytRsqWHXcyD7jGdE5Q1xzHyujEGc3U486qW66lYBmJ6h9AqNUJ+f7kMmOLVCQOupdq1vkHtq1NB/r99RfjJGk4XLnSDmF0MTQjiNazN1tIBQG1osNCzKP9fvU72lcHxKrVq9StalmClzehUtlWoaR167fMp0kDTcBKlrjmFvYmJwfFGth6NZgAalOnUYLsC6BiBflrMuRIgwpAzekRE4upJKJGBBcKnEpKySiqxKTU9JekNLA0usqkknSmi+s58O4d55e6Sa0uMDFcJAElbaJ5HiekeNx5K0wQDtTpXCgfpHdj5m3hJUMJxPBrmbrKQ0PYIqJvzQ3B0/vaXho55F7gDl/dK6cbAYXrJM1/BOJdfhKOJcBOtRHIvoC4Fhc76kCYvAOP08SgGYdYqr1oGwYjUj9G99ZjcYo4SlUoviWISmP+npZGOHpsn+oVRcocBgBmNhY5dbmVNQhxYQZ48m7d5JhddrA3LojBlvD11qItSmwZGAZWXUEHYg90nEm5TlYvEz8k3kPxElww9gSHFPmX8h+IkuF+oJuaK+07x9gs+2fWPBZsRE01TSIiCElRAi8EIZSIghWMZQDrlN7eGh0mMnDaQIJUsRqOuZqlj3qHJCnytM55GYGk/vg/uj1K0rGP9PekREzlcSInF/lNruqYNFxFSgtTEpTqvQc0yKbAhu0O7fXTSTYzXdq85qLnaoldKnCKY0DVwNTYV8QALm5sA+g12g8JT69f9/X/rnl+P4piKfD+ILTxlarToV6KYbEGqWqMGb5RetU9oDs7adqbTidHE4zG8Q6rF16b4RaIwlOjUFOmXdCxDg6G5U6k897ACWOgdiXDnV/qHkUjpRgBzf8b7l3f5qT69f9/X/rj81J9ev+/r/1zRdMsdiqfBmrJdK/V0jVNO2ZCxQVipW9rXbUbDUHS8s8AoVMJSr4pca+JwRoddSavUNSqropZ/o2C2B0vcEbXvFimdTWnbHp88Cp641ojvXR/mpPr1/39f8ArlfzUn16/wC/r/1zzjoRxDEjD4+niMRVdvRUxFFndyyiph3e6sTcWzLqOYnRYbF1P8Pdd1j9Z6K7dZmbPms3az3vfxkn0i12rrTeB5iVFtQOExs9F1+Fw60qaUkFkRVRBcmyqAqi51OgGpl2cb0D4cOrpYo8QxNeo9FGqU61cVKas6qxOS1wQbgXPfOyiXiDEpzTISJicTPyRFyMzIhKkqQHqKpsw1GjbiW8FiCWyAmolrioNh+iTs/PtL3WIG55q3SjWgws+IiRUlISUiInVFUq1AqlmNgoJJOwA1JngvHuMNxDGmoSQpOWkD9Gnew07zqT4nwnpv5T+KdTgWpqbNXPVjvy7ufK2n7U8x6IcCxWIq9fh07FJk1bS/aIJT62W1yOQE1tHUv0mofAe/PiqlodJDV7V0NSgtBaNIi6DtAgq1+8qQD7Z0NetS+bYgsR6tixt4gDScvwrA1KXUdY5erezsdc17k2H0RY7TeVsDWNZmWpZSF6sKLZXBObN9YHTQWtbeXm7Vx83GV5Tx6mcBxMvRNgSpty6t/WXxFxPSsDiBUpq67EAicF+V/ClK+GxNrq/wAncWtmVs3vIJI/VO3PfdBeJLUodVs1MkEd637JlHSFIFjXx3c87Uyg79RaunlIgzIVlYfFfmX8h+Ik+F+oJHinzL+Q/ESXC/UE3dFfad4+wWbbPrHgs2IiaaqJESUEKhMpEQQkREEKLyMk8jMDSn3h4D1K07H9s+KRETOVtJwf5V2phMEa9uqGLpmrmFx1YBz3HMWvpO8l/B4NKmbrBcKM3I7eYjrOCagA9Y2HalVfoK8K4vURsFxQ4S/oZrYb0ewZaee/yuQNtra/7Mz+lNehTr8Xo4q4autB8KCH7bpTYKVK72Zhvpoe4z24cNpsyLqUcEgEC4t7Lc5Glw6kwpmpcsxOQ2U5beJmi3X1hd/N/wAcXxtu2XklVCGxjw/im7efJcTi8c+A4RSqGh1hpUaKVaZ0suREqXFjoNbjwM4StxGlSocVXAuXwTU6eT1gqVq7KjqmblZmP7I7p7ZQw2ar1ZPMg+y95GrgaWVRSAsWsVYLoe+wlajLWElu3MCYLSbu7DP9W2E2oNYgA7Mu47e/2Xj9ZK+HxTpiaVOln4ZWoUxScurChTLAm4Fmsm3dMrh3SLDVOBNg0rA11wlTMmV7jKrE62t8Z69jeHIrJbUMSpLWJHI208TMc8Ppit1YUWuF2W9iNeU7UYQdVzbwWi43TBjYboMblxpm8G6DiNnyvPvya4zh3VUqWFKDFGghxAVXDEqq58xIyntHkec7uZGJwtFLimpDA2OigeOwlkyvaPuG+d88YCfS+n+0K1VpKwyuoYaGzAEXBuND3EA+yTiIhMSIiC6pCIEweNcUpYWka1eoEUaXOpJ5KqjVibbCSAJMBQJAEleX/lixpOLp0eSUs3tdjf4Is3f5MaiUOEVcRVZgoZ7FLZu0/VgLfmzaD9YziOmfEqWIxBrHrUYgjLUChyv0NFJ6vc766jQzp+iWOpnBnhgUmqyWambaVizMmdvoqGYE91tbWIm/RaW0WtI5vSW0Sapkx7YYjOAYBjAnASuxbi6MtGrWZ6dgGvTJAFwL3O1tZ0OI4mEoBqBLFiqqXzE3cgA66nQ/Ccv0LRVwYrVa/wAkruiVb5VsrlBe+1+V+TDnpOhV1FdA5DKVIpZja50ObXY3sP2vZJH9AIN3euy14Dt8cYXI/lzQDD4QjS2INgPCm1re4D2zR9A2ZcQpvv2W8Qb/AMQD7J3PSMPXZaBwtXKqs4dhmoltAEOUm997lWAtexO2g4FhRRrgJhq1MuSh6xHZKbJYlcwvYG+j9pTrqp7Mr1q7XU3NjnnxSmM1XgkrtoMrTRiPVMrUpldxMW9W5ExKweKfNP5D8RJ8L9QSHFPmn8h+Ik+F+oJuaK+07x9gs+2/WPBZsRE01TSIiCEiIghIiIIUXlTlu2h/R2015w/KTJN37d+869rUTD0j94eAy/ezI53To2X6N/wrZA0tfbW/f4eEjJ1ToO1fTx01OkhM14gq21JncKNusNr2Q6HnMGXcPiGpkleehuLxlneGVA44D4KjVaXMIC2tE5npOBa6sMo2FpaUAigGFwcw3tzGswzjnzB76jQaCwvvpFHHOi5VOnK4BtfulzrVM3GfIX/RsmL9U3bJVfoX7PX+L01t6qiMKxFPdWa3kCe/wmWtJXenVUWzN2h4rc3HuM1tOqVbMDr3y+3EHLBrjS9rAW13iaNekB+qcZi47RBGUCQcxGSnUpvJluXzd5wRkthWTRSbaVb6G+jNf+Mxm/zX7Q/ATDp4llXKNiQfaCCPwl5uI1DuRuDsNxGOtFJ4BMggg54SMbtkXrgpvExBx7sfNMfVBcgIAQxuRudecxJkVsa7izW79ABMeVa7w95cDM9wHAeu1OpNLWwRxlIiIlMSYfFeILh6ZqNryUbFmOw/vumYTPPuknFPSKtlPyaaL4959v4AR1Cl0jo2K1ZLMa742DFbY9NByoH73/5nNdJ8c+NKnN1IS+TKMzjNucx0DeIFx36mY0TSp0mUzrNF62xYLOMG8T8rUYbo9TQlg7hjs/Zuh71/S8Tty11GdwTg1Kh1op571UNN3YgstMkGplIAtcKQd9CQLXmVaXUXT8fxA/A+6P6R52qI0fZWgAUxt44457c9q7XoHSVcC+FVw5JqOtM2YrmJawB1be95uuJcMF0rNdmAumpAUg3I08ZxfRrHihXy3sy5GqWAsKTPZte+w/u87rh5JWth29ak2dL/AFG3/n7Zy0Ne+i4tJ1gJHrxEheatdJtmrAU/pn0gHLCQqcDxANPq9jTAUC5PZGi6nU7W1myAnOs5o1g42O/lznQqwIBGx1Ew6FTXbBxCTXZqmRgUtI1EzC0uRGlJlc9xYWpOD/eolzhfqCZPH6N6LMO4X94mPwwdgTX0YIpuHf7BJtTtZwPcsyIiaSqpERBCREQQkREEKjCGqb9ka+enlKPIzB0m4isIyHq5aNkALN/wqs17aAWFtOfiZSImcTKuAQkRE4upE4jiGIx2aqKfX2/6kUyKdwHFQ9Ta66r1WoOxNhcnSbzArXIoNULh81XrgBobZwl9NtFtt8Y51GBMjkTzuShUkxC6IYo9y/dT+Ug9YkWIX2KoPvAnAcOxPEbIa4r+sAQtMAsFWjTJJynLmYVKgvprY5VuV2lJsUaFFs1Y1AXD5ly57MArMuS6A6m3K+7AAlrhUwL+Pju2d6g1zT+yunichTxGL9FqFuuFYdVbKjEi9IXyg07EZ73te3O0DG4sMhK1yoJFW1NiNat9BlDGyUiBlBHym9yt1dCcxyJU+l7iuviUU31/HT4HaViUxIiYnFMctCk1RtbeqPrMdh/fK86ASYC6ASYGK0vS7iuReoQ9ph2/Be7zP4ec4u8uYqu1Ry7m7E3J8ZaWa9KmKbYXpbLQFFmr5+PNyreVvIvblCxitSrnja/h3k6Ae0zLpKBqxsFBLHlbcnylnDpc+A+LEfy+JlrjtULSFPnU3/VG/vNvjG0qZe4NG1U7dam2ai6odgnecBzn3LB4VxAiuKrDs4hzSN+QyHIPeEE9o4O9xRxI3dFFTzAyt8QfdPnnFVyKLlN6Faky+eUt+P4T3XoNiRVwRA2R7p+o6h1Pvzy0Xf6xjw8l5Z1OdHtebzOsf+5cHcQFlcYwlsy920cAxdx1bbrt5TYY9cyK/wCy3s2nOVr0qoZdNZ5S0s6taCBhs8Dfww8QpUj01KDj7rqolrD1g6hhz+B5iXZYF4lVTdcVgcc/y9TyH4iYPC/UEzeOf5ep5D/cJhcL9QTY0d9s+PsFVr4hZsRE0ElIiIISIiCEiIghReRknkZgaU+8PAepWnY/t70msxteo+YYY26u5ZtDnqLqKK3BGpFmblew7VymzmGvDVUWpPUp92RiVHkj5kHsEoNIF/8AhWHArJpVA6h1NwwDKe8EXEnLOCw/V01phiwXQFrA2uSBoALDb2S9OGJuXQVz+LxL5mIxeUKzAjq2OUB7b5eVwJFsQ9remgMqkv8AJkA9Wp6xrFe/XT4zZ43B3t1VOlctd86rqCCSdtSTaYNXDYq5tTw2xvddTcMCPLUDxuZZaWkbN+r8JRBHJVhMa1gPTQSpIb5M9rttl+jpoVF/C8kmKY5qfpoLntjsEFaeS45fosb+PlMivga2YLTp4fqy5LZkGi65CAN2F9b98guDxAUEUsMGuc1l+gUAFjbe5bwtDWacv5f6fNcg9/FKj1GqO64u1NVclRTN17jmtcle7nGIxhz9YMUFp5l7OQkaoGy3y3sQCQe+3lKthcTsKeHsc2bs6EE93P2zOwmDHVgVqVLNu2VVy5rZdLju0v3SJLRl/L8YrsE8lZ0RIVagVSzEBQCWJ0AA1JJ5CVwnqc5npdw3E1bPQyuqj5snK1+ZF9GO29tpvaGOR2yjMDa4FRHpkgb2zgXtpttcTJEYxzqbpC7TqljtZhvXi7cVKsVeiVZTZg1wQe4gjQyQ45TGmVvhOt/KQlJslPIvWsLs4AzhBcKt+4m/u8Z5ljMJUpm+Yle+w+PdN+z0umph8RPemO025jtV0ncPchdCvGaXO/tEzcFiKdU5VqIDsOs01PMDY+XlOI6x+8e0CSFVvqiMNlcmt0+w4+nwvQ0p9W/VsCR9Yakk6kkb+6853ilfrKhqcht4Bd/4n2yXCeI1FpHOLixFPmRpYa91+XhMDib5aVubafxP4S3ZaRphz3Dw91lab0iy19HTpuuxdjjdGIHefLBazhnbp4sHcmmwt39u/wCM9Y/Ixjr0+qP1Co/Wpm6j7jH3TyjolWPW11Avdb/dYD/7Ts/ycYw0MUC2gDrcdym6v8GlOodV8+C1LJRNWwBsYtcN4cXDiAvalS4en3js/rDUTQ42lmX4idBi+ycw5fwmpxqWZgNicy/qntD4kj2TN0zRlrag2XHff8+ayLFUvLd6xeB4vK2Rtm08m/5m/nKYxkpIXe55gLuT4SqcerFRooNhfQnXnqd5j0auq2HK5Wo6zpat3xz/AC9TyH+4TC4X6gmoxfFKzqVY9k76IBv75t+F+oJ6HRbw+k4jP2CzLUwscAcvdZsRE01WSIiCEiQoYhKgzU3V170IYe8ScEJERBCx8biBTXMwNrgaWvr5kTHTidImxYpfQdarICTsAzABj5Exx35k2BOo2BPPuCsfgZyijLe1lNrva1MgHS9SyIQvjUpMumpE83papq2gCP2R6nnDyWlZPt7/AGC7e0Tl+G8QakQtiU2yW1Gl+woJytbXKCVYC6WNwenpuGAZSCCAQRqCDqCD3SkHA3hWpVZW0rKEzq6qSxjMRkXMBc3CgXsCWIAueQ1/8y/IVaQYFWFwdwfeJ1C1T8dC4c1WS1u1a5tl6s1b3y3HZVtLXuLc7y2/SJBhxXK6XAOrFQCocNcLcizLy59wJm0GCp5CmXQm5uSSW0sxa982g1vfQd0ehJlCZdAbjU3Dc2zXvm1Ot76mA7+f7+majeo8NxgrUlqAWvy1/iAfHUA66gHSZUhSpBAFUWA5DxNz7bm9/GTgV1Jj46gXplVIvdWW+2ZGDgHwJUA+BmREAYMhdIlYGR6lSmzU8gpsX1ZWLMUamAtvo2cm5sdBprpm1HCgsxsACSTyAFyZKc1034j1dEUQe1V3/UG/vNh742jTNao2mNvAbfLFLe4U2lxXG8Wxhr1nqn6R0Hco0Ue4CYhWVievDQ0ADALDJJMlQFMdw90q+GQ+sot3nkOcuAS1jX7IUbsbezn/AH4yTWyYUXu1RKsAhhoLA7DuHL4TT8erXqKn1VufNv8AgD3zcDQzlMXXzO795JHly+Fo20GGAKvZhLyVLofXtij+krD3DN/CdVw98uJzcmBB9u3xtON6MtbF0mtpcjw7Ssv8Z2eNe3aXcXI8wNJj1/q3L3WhahFl72uPoD6yvc+H4nrsPTqHdkGb9YaN8QZCrRapTHVgM6XUgm2hN1N+4azSdBMfnw7ofoMGH6ji4+IebB+NU6D5k7Z2YA2UjzjHsZXo6r8Dju/wsKvSdQtT2MGBMeBvHArH/wAPVXOZ8pPidvIAG0yKfRpubqPIE/ymPienAXlST9dv+RNVX/KIvLEUv+2A34XlPs2yDEE7z7GFMPtTsI8h8FbrifA+roO5e+UA6LbmB3mR4X6gnOnpYcSuQVmYMbEEZAba7EDunRcL9QS5Z6dKm0ikIE8VWtdOsxw6XEiR4SfdZsREsKqklKSkELyWniCD1it2l3YNfL+iatILVp+JZSO+dVwXpWR2MUdNPlDYFQdmfL2Wp/8AuLa1xmA1I03F+C1cOQzjMLgI4YnUnQLWPapsfqvdWNlvrNUHt2s1hq2YC2WxytUCfRIJtUTbW+moNMFzDC9NUpUbWzWx7xjz3HZkSF69E5boVxMkHDPoVBNMfVCkK9O/cpKlf0XFhZZ1UttIIkLztak6k8sdiFZxNFXGV1DDuYAj3GarHcFXLeiMpXVUBst/0Psm31WwN9QRNxVW40mqrYSqTpUceRMzrZYXV360iIi/enUbQ2m2CFzZIA12tfQZTl+cJUbqbKzgW7NSi4BsZ0HR+ubNTbcHMLaDNmZagXwzKWHhUUSx+Zze9zc6nzJYn4u33j3ydPhTqbqzA7XBINja/wDtX3CUm6HqA/WPI8707rjclu4mo9Dq/av94ynodX7V/vGT7Kf+Q4o663IrcSU03odX7V/vGPQ6v2r/AHjO9lP/ACHFHXW5HgtvE1HoVX7V/vGPQqv2r/eM52U/8hxXeutyPBbeJqPQ6v2r/eMqMHV+1f7xh2U/8hxR11uR4LbRNQcFV+1f7xj0Kr9q/wB4w7Kf+Q4o663I8Ft55l0qrVHxLvURkF8lPOCBlXax2N9Tp3ztfQqv2r/eMq2BqkWNVyPEmW7JY32d5dIN0bR7H0Sa9dtVsXjyK8zzSqmd43RpCblF9wj/AAyn1F9wmrrqlqrhQZhZ81UtyXQf3756P/hlPqL7hIr0WpDakg8lEmyqG4hKqUi8QCvPMU4ynTfT3zkcdhylwNiDY/znt9XojSa2aihttdQZFuh2HIt6PSt3FFI/CQq1NcypUqeoIXhHD6vV1aZHJ0J94vPQsY6kHQA2O+k7D/A+G/8AS0f3a/ymU3Rmmd6aHzUSrVpl5BC2bBpBtmY5jmkyQbvL4XnuDxNY0AKTkDLlfqyVvkuAD5aSTYGow7WZr/WLH8Z6HS6OKosqKBvYKAJP8xctPdF9A7MLT7csxgupGYxuvgQvNhwg/Ut7Jk0cAdiDO/8AzF5e6PzB4D3TnV3ZhT7es3+0fMLmOGYdVIsi3uNbajbaegcL9QTU0uBAG9h7pvMLSyi0dSplggrG0nbW2uq17QRAi+/aT7q/K3lIjVnJERBChXoq6sjqGVgVYNqCDoQZ5hxah1FaopN+rJcluYphTc97Nh6ljyukREV/pnnP2WlotxFUgZe4E7pPmrnA6ppYilvo6r55KvozM3fenVpn9kT06InaH0qWlgBWbH4+5SIiOWWkREEJERBCREQQkREEJaViIIVIiIISIiCEiIghViUiCFWUiIISIiCEiIghIiIISIiCEiIghIiIIX//2Q==",
                                alt: "content",
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              Object(w.jsx)("section", {
                className: "pt-4 pb-2 bg-gray-100",
                children: s
                  ? Object(w.jsx)(M, {})
                  : Object(w.jsx)("div", {
                      className: " container",
                      children: Object(w.jsxs)("div", {
                        className:
                          "max-w-1/5 mx-auto py-1 px-4 sm:py-24 sm:px-6 lg:max-w-1/5 lg:px-8",
                        children: [
                          Object(w.jsx)("h2", {
                            className:
                              "text-2xl font-md tracking-tight text-gray-900",
                            children: "Featured Products",
                          }),
                          Object(w.jsx)("div", {
                            className:
                              "bg- mt-4 grid grid-cols-2 gap-y-10 gap-x- sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-2",
                            children:
                              a &&
                              a.map(function (e) {
                                return Object(w.jsx)(T, { product: e });
                              }),
                          }),
                        ],
                      }),
                    }),
              }),
              Object(w.jsx)(z, {}),
            ],
          });
        },
        W = (s(121), s(6)),
        H = s(2),
        Y = s(25),
        K = function () {
          var e = Object(x.b)(),
            t = Object(d.h)(),
            s = Object(Y.a)().handleSubmit,
            c = Object(d.g)(),
            a = Object(r.useState)({}),
            n = Object(y.a)(a, 2),
            l = n[0],
            u = n[1],
            b = Object(x.c)(function (e) {
              return e.userInfo;
            }),
            m = b.error,
            h = b.isAuthenticated,
            f = b.loading,
            O = function (e) {
              u(
                Object(H.a)(
                  Object(H.a)({}, l),
                  {},
                  Object(W.a)({}, e.target.name, e.target.value)
                )
              );
            },
            E = (function () {
              var t = Object(o.a)(
                i.a.mark(function t(s) {
                  var r, c;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (r = l.email), (c = l.password), e(p(r, c));
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            C = (c.state || { from: { pathname: "/" } }).from;
          return (
            Object(r.useEffect)(
              function () {
                m && (v.b.error(m), e(g())),
                  h && (v.b.success("log in successfully"), t(C));
              },
              [m, e, h, t, C]
            ),
            Object(w.jsxs)(w.Fragment, {
              children: [
                Object(w.jsx)(A, {}),
                Object(w.jsxs)("section", {
                  class: "text-gray-600 body-font ",
                  children: [
                    Object(w.jsx)("div", {
                      class:
                        "container px-5 py-24 mx-auto flex flex-wrap items-center",
                      children: Object(w.jsx)("div", {
                        class:
                          " md:w-2/6 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-10",
                        children: Object(w.jsxs)("form", {
                          onSubmit: s(E),
                          children: [
                            Object(w.jsx)("h2", {
                              class:
                                "text-gray-900 text-lg font-medium title-font mb-2",
                              children: "Log in",
                            }),
                            Object(w.jsxs)("div", {
                              class: "relative mb-4",
                              children: [
                                Object(w.jsx)("label", {
                                  for: "email",
                                  class: "leading-7 text-sm text-gray-600",
                                  children: "Email",
                                }),
                                Object(w.jsx)("input", {
                                  type: "email",
                                  id: "email",
                                  onChange: O,
                                  name: "email",
                                  class:
                                    "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                                }),
                              ],
                            }),
                            Object(w.jsxs)("div", {
                              class: "relative mb-4",
                              children: [
                                Object(w.jsx)("label", {
                                  for: "password",
                                  class: "leading-7 text-sm text-gray-600",
                                  children: "Password",
                                }),
                                Object(w.jsx)("input", {
                                  type: "password",
                                  onChange: O,
                                  id: "password",
                                  name: "password",
                                  class:
                                    "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                                }),
                              ],
                            }),
                            Object(w.jsxs)("button", {
                              class:
                                "text-white bg-mainBaseColor border-0 py-2 px-8 focus:outline-none  rounded text-md",
                              children: [
                                "Login ",
                                f
                                  ? Object(w.jsx)("div", {
                                      class:
                                        "fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center",
                                      children: Object(w.jsx)("div", {
                                        class:
                                          "animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900",
                                      }),
                                    })
                                  : "",
                              ],
                            }),
                            Object(w.jsxs)("p", {
                              class: "text-xs text-gray-500 mt-3",
                              children: [
                                "Don't have an account?",
                                Object(w.jsx)(j.b, {
                                  to: "/v1/user/register",
                                  className: "underline text-md font-bold",
                                  children: "Sign up",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    Object(w.jsx)(v.a, {}),
                  ],
                }),
              ],
            })
          );
        },
        G = function () {
          var e = Object(x.b)(),
            t = Object(d.h)(),
            s = Object(Y.a)().handleSubmit,
            c = Object(r.useState)({ name: "", email: "", password: "" }),
            a = Object(y.a)(c, 2),
            n = a[0],
            l = a[1],
            u = Object(x.c)(function (e) {
              return e.userInfo;
            }),
            b = u.error,
            p = u.isAuthenticated,
            h = function (e) {
              l(
                Object(H.a)(
                  Object(H.a)({}, n),
                  {},
                  Object(W.a)({}, e.target.name, e.target.value)
                )
              );
            },
            f = (function () {
              var t = Object(o.a)(
                i.a.mark(function t(s) {
                  var r, c, a;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (r = n.name),
                            (c = n.email),
                            (a = n.password),
                            e(m(r, c, a));
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return (
            Object(r.useEffect)(
              function () {
                b && (v.b.error(b), e(q())),
                  p &&
                    (v.b.success("Registration successfully"),
                    (window.location.href = "/v1/user/login"));
              },
              [b, e, p, t]
            ),
            Object(w.jsxs)(w.Fragment, {
              children: [
                Object(w.jsx)(A, {}),
                Object(w.jsxs)("section", {
                  class: "text-gray-600 body-font",
                  children: [
                    Object(w.jsx)("div", {
                      class:
                        "container px-5 py-20 mx-auto flex flex-wrap items-center",
                      children: Object(w.jsx)("div", {
                        class:
                          " md:w-2/6 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-10",
                        children: Object(w.jsxs)("form", {
                          onSubmit: s(f),
                          children: [
                            Object(w.jsx)("h2", {
                              class:
                                "text-gray-900 text-lg font-medium title-font mb-2",
                              children: "Sign Up",
                            }),
                            Object(w.jsxs)("div", {
                              class: "relative mb-4",
                              children: [
                                Object(w.jsx)("label", {
                                  for: "full-name",
                                  class: "leading-7 text-sm text-gray-600",
                                  children: "Full Name",
                                }),
                                Object(w.jsx)("input", {
                                  type: "text",
                                  id: "full-name",
                                  onChange: h,
                                  value: n.name,
                                  name: "name",
                                  class:
                                    "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                                }),
                              ],
                            }),
                            Object(w.jsxs)("div", {
                              class: "relative mb-4",
                              children: [
                                Object(w.jsx)("label", {
                                  for: "email",
                                  class: "leading-7 text-sm text-gray-600",
                                  children: "Email",
                                }),
                                Object(w.jsx)("input", {
                                  type: "email",
                                  id: "email",
                                  onChange: h,
                                  value: n.email,
                                  name: "email",
                                  class:
                                    "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                                }),
                              ],
                            }),
                            Object(w.jsxs)("div", {
                              class: "relative mb-4",
                              children: [
                                Object(w.jsx)("label", {
                                  for: "password",
                                  class: "leading-7 text-sm text-gray-600",
                                  children: "Password",
                                }),
                                Object(w.jsx)("input", {
                                  type: "password",
                                  onChange: h,
                                  value: n.password,
                                  id: "password",
                                  name: "password",
                                  class:
                                    "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                                }),
                              ],
                            }),
                            Object(w.jsx)("button", {
                              class:
                                "text-white bg-mainBaseColor border-0 py-2 px-8 focus:outline-none  rounded text-md",
                              children: "Sign up",
                            }),
                            Object(w.jsxs)("p", {
                              class: "text-xs text-gray-500 mt-3",
                              children: [
                                "Already have an account?",
                                Object(w.jsx)(j.b, {
                                  to: "/v1/user/login",
                                  className: "underline text-md font-bold",
                                  children: "Log in",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    Object(w.jsx)(v.a, {}),
                  ],
                }),
              ],
            })
          );
        },
        X = (function () {
          var e = Object(o.a)(
            i.a.mark(function e() {
              return i.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Object(w.jsx)("div", {
                          children: Object(w.jsx)("h1", {
                            children: "Logout successfuly",
                          }),
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        J = X,
        Z = function (e, t) {
          return (function () {
            var s = Object(o.a)(
              i.a.mark(function s(r, c) {
                var a, n;
                return i.a.wrap(function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return (
                          (s.next = 2),
                          b.a.get("http://localhost:1234/v1/product/".concat(e))
                        );
                      case 2:
                        (a = s.sent),
                          (n = a.data),
                          r({
                            type: "ADD_TO_CART",
                            payload: {
                              product: n.product._id,
                              name: n.product.name,
                              price: n.product.price,
                              quantity: t,
                              stock: n.product.stock,
                              image: n.product.image[0].url,
                            },
                          }),
                          localStorage.setItem(
                            "cartItems",
                            JSON.stringify(c().cart.cartItems)
                          );
                      case 6:
                      case "end":
                        return s.stop();
                    }
                }, s);
              })
            );
            return function (e, t) {
              return s.apply(this, arguments);
            };
          })();
        },
        $ = function (e) {
          var t = e.isAuthenticated,
            s = Object(d.i)().id,
            c = Object(x.b)(),
            a = Object(x.c)(function (e) {
              return e.ProductDetails.product;
            }),
            n = a.loading,
            l = a.product;
          console.log(l);
          var j = Object(r.useState)(1),
            u = Object(y.a)(j, 2),
            p = u[0],
            m = u[1],
            h = Object(r.useState)(0),
            f = Object(y.a)(h, 2),
            O = f[0],
            g = f[1],
            E = Object(r.useState)(""),
            C = Object(y.a)(E, 2),
            N = C[0],
            S = C[1],
            R = function () {
              console.log(O, N),
                c(
                  (function (e) {
                    return (function () {
                      var t = Object(o.a)(
                        i.a.mark(function t(s) {
                          var r, c, a;
                          return i.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      s({ type: "NEW_REVIEW_REQUEST" }),
                                      (r = {
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        withCredentials: !0,
                                      }),
                                      (t.next = 5),
                                      b.a.put(
                                        "http://localhost:1234/v1/create/review",
                                        e,
                                        r
                                      )
                                    );
                                  case 5:
                                    (c = t.sent),
                                      (a = c.data),
                                      console.log(a),
                                      s({
                                        type: "NEW_REVIEW_SUCCESS",
                                        payload: a.review,
                                      }),
                                      (t.next = 14);
                                    break;
                                  case 11:
                                    (t.prev = 11),
                                      (t.t0 = t.catch(0)),
                                      s({
                                        type: "NEW_REVIEW_FAIL",
                                        payload: t.t0.response,
                                      });
                                  case 14:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 11]]
                          );
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })();
                  })({ rating: O, comment: N, productId: s })
                ),
                v.b.success("review added");
            };
          return (
            Object(r.useEffect)(
              function () {
                c(I(s));
              },
              [c, s]
            ),
            Object(w.jsxs)(w.Fragment, {
              children: [
                Object(w.jsx)(A, {}),
                Object(w.jsxs)("section", {
                  className: "text-gray-600 body-font overflow-hidden",
                  children: [
                    n
                      ? Object(w.jsx)(M, {})
                      : Object(w.jsx)("div", {
                          className:
                            "container px-5 pt-8 mx-auto border-b border-white pb-8 mt-20 ",
                          children: Object(w.jsxs)("div", {
                            className: "lg:w-4/5 mx-auto flex flex-wrap ",
                            children: [
                              Object(w.jsx)("img", {
                                alt: "ecommerce",
                                className:
                                  "lg:w-96 w-64 lg:h-full h-64 object-cover object-center rounded",
                                src: l && l.image[0].url,
                              }),
                              Object(w.jsxs)("div", {
                                className:
                                  "lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0",
                                children: [
                                  Object(w.jsx)("h2", {
                                    className:
                                      "text-sm title-font text-gray-500 tracking-widest",
                                    children: l && l.category,
                                  }),
                                  Object(w.jsx)("h1", {
                                    className:
                                      "text-gray-900 text-3xl title-font font-medium mb-1",
                                    children: l && l.name,
                                  }),
                                  Object(w.jsx)("div", {
                                    className: "flex mb-4",
                                    children: Object(w.jsxs)("span", {
                                      className: "flex items-center ",
                                      children: [
                                        Object(w.jsx)(U.a, {
                                          value: l && l.ratings,
                                          edit: !1,
                                          size: 24,
                                          collor: "#ffd700",
                                          activeColor: "#ffd700",
                                        }),
                                        Object(w.jsxs)("span", {
                                          className:
                                            "ms-4 border-l-2 pl-4 border-gray-900",
                                          children: [
                                            " ",
                                            l && l.numberOfReview,
                                          ],
                                        }),
                                        Object(w.jsxs)("span", {
                                          className:
                                            "text-gray-600 ml-1 border-r-2 pr-4 border-gray-900",
                                          children: [" ", "Reviews"],
                                        }),
                                        t &&
                                          Object(w.jsxs)("div", {
                                            children: [
                                              " ",
                                              Object(w.jsx)("button", {
                                                type: "button",
                                                class:
                                                  " text-dark ml-2 bg-gray-50  hover:bg-gray-200  p-1 rounded-md   font- cursor-pointer",
                                                "data-bs-toggle": "modal",
                                                "data-bs-target":
                                                  "#exampleModal",
                                                children: "write review",
                                              }),
                                              Object(w.jsx)("div", {
                                                class:
                                                  "modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto",
                                                id: "exampleModal",
                                                tabindex: "-1",
                                                "aria-labelledby":
                                                  "exampleModalLabel",
                                                "aria-hidden": "true",
                                                children: Object(w.jsx)("div", {
                                                  class:
                                                    " modal-dialog relative w-auto pointer-events-none ",
                                                  children: Object(w.jsxs)(
                                                    "div",
                                                    {
                                                      class:
                                                        "p-4 pt-8 modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current ",
                                                      children: [
                                                        Object(w.jsxs)("div", {
                                                          class:
                                                            "border-b modal- flex flex-shrink-0 items-center justify-between   rounded-t-md",
                                                          children: [
                                                            Object(w.jsx)(
                                                              "h5",
                                                              {
                                                                class:
                                                                  "font-semibold text-lg pl- ",
                                                                id: "exampleModalLabel",
                                                                children:
                                                                  "Your opinion matters to us !",
                                                              }
                                                            ),
                                                            Object(w.jsx)(
                                                              "button",
                                                              {
                                                                type: "button",
                                                                class:
                                                                  "btn-close box-content w-4 h-4 p-1 text-red-600 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline",
                                                                "data-bs-dismiss":
                                                                  "modal",
                                                                "aria-label":
                                                                  "Close",
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                        Object(w.jsxs)("div", {
                                                          className: " px-12",
                                                          children: [
                                                            Object(w.jsx)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "mx- py-4",
                                                                children:
                                                                  Object(
                                                                    w.jsxs
                                                                  )("select", {
                                                                    className:
                                                                      "w-full  rounded-xl border  text-base outline-none text-gray-700 py-2 px-1 leading-8 ",
                                                                    required:
                                                                      !0,
                                                                    name: "rating",
                                                                    id: "integration_city_id",
                                                                    onChange:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return g(
                                                                          e
                                                                            .target
                                                                            .value
                                                                        );
                                                                      },
                                                                    children: [
                                                                      Object(
                                                                        w.jsx
                                                                      )(
                                                                        "option",
                                                                        {
                                                                          value:
                                                                            "",
                                                                          children:
                                                                            "---Rating---",
                                                                        }
                                                                      ),
                                                                      Object(
                                                                        w.jsx
                                                                      )(
                                                                        "option",
                                                                        {
                                                                          value:
                                                                            "1",
                                                                          children:
                                                                            "1",
                                                                        }
                                                                      ),
                                                                      Object(
                                                                        w.jsx
                                                                      )(
                                                                        "option",
                                                                        {
                                                                          value:
                                                                            "2",
                                                                          children:
                                                                            "2",
                                                                        }
                                                                      ),
                                                                      Object(
                                                                        w.jsx
                                                                      )(
                                                                        "option",
                                                                        {
                                                                          value:
                                                                            "3",
                                                                          children:
                                                                            "3",
                                                                        }
                                                                      ),
                                                                      Object(
                                                                        w.jsx
                                                                      )(
                                                                        "option",
                                                                        {
                                                                          value:
                                                                            "4",
                                                                          children:
                                                                            "4",
                                                                        }
                                                                      ),
                                                                      Object(
                                                                        w.jsx
                                                                      )(
                                                                        "option",
                                                                        {
                                                                          value:
                                                                            "5",
                                                                          children:
                                                                            "5",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }),
                                                              }
                                                            ),
                                                            Object(w.jsx)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "md:flex flex-row md:space-x-4 w-full text-xs uppercase ",
                                                                children:
                                                                  Object(w.jsx)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "mb-3 space-y-4 w-full text-xs ",
                                                                      children:
                                                                        Object(
                                                                          w.jsx
                                                                        )(
                                                                          "textarea",
                                                                          {
                                                                            className:
                                                                              "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                                                            required:
                                                                              "required",
                                                                            type: "text",
                                                                            name: "comment",
                                                                            placeholder:
                                                                              "Leave a review",
                                                                            onChange:
                                                                              function (
                                                                                e
                                                                              ) {
                                                                                return S(
                                                                                  e
                                                                                    .target
                                                                                    .value
                                                                                );
                                                                              },
                                                                            value:
                                                                              N,
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                              }
                                                            ),
                                                            Object(w.jsx)(
                                                              "div",
                                                              {
                                                                class:
                                                                  " flex flex-shrink-0 flex-wrap items-center justify-end pb-8  ",
                                                                children:
                                                                  Object(w.jsx)(
                                                                    "button",
                                                                    {
                                                                      onClick:
                                                                        function () {
                                                                          return R();
                                                                        },
                                                                      type: "submit",
                                                                      class:
                                                                        "px-6\r py-2.5\r bg-mainBaseColor\r text-white\r font-medium\r text-xs\r leading-tight\r uppercase\r rounded\r shadow-md\r transition\r duration-150\r ease-in-out\r ml-1",
                                                                      children:
                                                                        "Rate Now",
                                                                    }
                                                                  ),
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  }),
                                  Object(w.jsx)("p", {
                                    className: "leading-tight text-justify",
                                    children: l && l.description,
                                  }),
                                  Object(w.jsxs)("div", {
                                    className:
                                      "flex mt-6 items-center   border-gray-100 mb-5",
                                    children: [
                                      Object(w.jsx)("div", {
                                        className: "flex ",
                                        children:
                                          l && l.stock < 1
                                            ? Object(w.jsx)("p", {
                                                className:
                                                  "bg-red-100 p-1 px-2 text-red-900 font-medium",
                                                children: "Stock Out",
                                              })
                                            : Object(w.jsxs)("p", {
                                                className:
                                                  "bg-green-200 p-1 px-2 text-green-900 font-medium",
                                                children: [
                                                  l && l.stock,
                                                  " In Stock",
                                                ],
                                              }),
                                      }),
                                      l && l.stock < 1
                                        ? ""
                                        : Object(w.jsx)("div", {
                                            className: "px-10 ",
                                            children: Object(w.jsxs)("div", {
                                              children: [
                                                Object(w.jsx)("button", {
                                                  onClick: function () {
                                                    1 >= p || m(p - 1);
                                                  },
                                                  className:
                                                    "bg-mainBaseColor px-2 font-bold text-lg text-white",
                                                  children: "-",
                                                }),
                                                Object(w.jsx)("input", {
                                                  className: "w-10 ps-2  ",
                                                  value: p,
                                                  readOnly: !0,
                                                  type: "number",
                                                }),
                                                Object(w.jsx)("button", {
                                                  onClick: function () {
                                                    (null === l || void 0 === l
                                                      ? void 0
                                                      : l.stock) <= p ||
                                                      m(p + 1);
                                                  },
                                                  className:
                                                    "bg-mainBaseColor px-2 font-bold text-lg text-white",
                                                  children: "+",
                                                }),
                                              ],
                                            }),
                                          }),
                                    ],
                                  }),
                                  Object(w.jsxs)("div", {
                                    className: "flex ",
                                    children: [
                                      Object(w.jsxs)("span", {
                                        className:
                                          "title-font font-medium text-2xl text-gray-900",
                                        children: ["TK.", l && l.price],
                                      }),
                                      l && l.stock < 1
                                        ? ""
                                        : Object(w.jsx)("button", {
                                            className:
                                              "flex ml-auto text-white bg-mainBaseColor border-0 py-2 px-6 focus:outline-none rounded",
                                            onClick: function () {
                                              return (
                                                c(Z(s, p)),
                                                void v.b.success(
                                                  "Item added to cart"
                                                )
                                              );
                                            },
                                            children: "Add to cart",
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                    Object(w.jsx)("div", {
                      class:
                        "py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center container",
                      children: Object(w.jsxs)("div", {
                        class:
                          "flex flex-col justify-start items-start w-full space-y-3",
                        children: [
                          Object(w.jsx)("div", {
                            class: "flex justify-start items-start",
                            children: Object(w.jsx)("p", {
                              class:
                                " pb-4 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-white ",
                              children: "Reviews",
                            }),
                          }),
                          l && l.reviews && l.reviews.length > 0
                            ? l.reviews &&
                              l.reviews.map(function (e) {
                                return Object(w.jsxs)("div", {
                                  class:
                                    "w-full flex justify-start items-start flex-col bg-gray-50 dark:bg-gray-800 py-2 px-4",
                                  children: [
                                    Object(w.jsxs)("div", {
                                      class:
                                        "flex flex-col md:flex-row justify-between w-full",
                                      children: [
                                        Object(w.jsx)("div", {
                                          class:
                                            "flex flex-row justify-between items-start",
                                          children: Object(w.jsxs)("div", {
                                            class:
                                              " flex justify-start items-center flex-row space-x-2",
                                            children: [
                                              Object(w.jsx)("div", {
                                                children: Object(w.jsx)("img", {
                                                  src: "https://i.ibb.co/QcqyrVG/Mask-Group.png",
                                                  alt: "girl-avatar",
                                                  className: "h-8",
                                                }),
                                              }),
                                              Object(w.jsxs)("div", {
                                                class:
                                                  "flex flex-col justify-start items-start space-y-2",
                                                children: [
                                                  Object(w.jsx)("p", {
                                                    class:
                                                      "text-base font-medium leading-none text-gray-800 dark:text-white",
                                                    children: e.name,
                                                  }),
                                                  Object(w.jsx)("p", {
                                                    class:
                                                      "text-sm leading-none text-gray-600 dark:text-white",
                                                    children: Object(w.jsx)(
                                                      U.a,
                                                      {
                                                        value: e.rating,
                                                        edit: !1,
                                                        isHalf: !0,
                                                        size: 14,
                                                        collor: "#ffd700",
                                                        activeColor: "#ffd700",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        Object(w.jsxs)("div", {
                                          class: "r mt-2 md:mt-0",
                                          children: [
                                            " ",
                                            String(e.reviewCreatedAt).substr(
                                              0,
                                              10
                                            ),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(w.jsx)("div", {
                                      id: "menu",
                                      class: "md:block",
                                      children: Object(w.jsx)("p", {
                                        class:
                                          "mt-1 text-base leading-normal text-gray-600 dark:text-white w-full md:w-9/12 xl:w-5/6",
                                        children: e.comment,
                                      }),
                                    }),
                                  ],
                                });
                              })
                            : Object(w.jsx)("div", {
                                class:
                                  " w-full flex justify-start items-start flex-col  dark:bg-gray-800 py-2 px-4",
                                children: Object(w.jsx)("div", {
                                  class:
                                    "flex flex-col md:flex-row justify-between w-full",
                                  children: Object(w.jsx)("div", {
                                    class:
                                      "flex flex-row justify-between items-start",
                                    children: Object(w.jsx)("div", {
                                      class:
                                        " flex justify-start items-center flex-row space-x-2",
                                      children: Object(w.jsx)("div", {
                                        class:
                                          "flex flex-col justify-start items-start space-y-2",
                                        children: Object(w.jsx)("p", {
                                          class:
                                            "text-base font-medium leading-none text-gray-800 dark:text-white",
                                          children:
                                            "No review for this product",
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                        ],
                      }),
                    }),
                    Object(w.jsx)(v.a, {}),
                  ],
                }),
              ],
            })
          );
        },
        ee = s(80),
        te = s.n(ee),
        se = s(153),
        re = function () {
          var e = Object(d.i)().keyword,
            t = Object(r.useState)(1),
            s = Object(y.a)(t, 2),
            c = s[0],
            a = s[1],
            n = Object(r.useState)([0, 5e3]),
            l = Object(y.a)(n, 2),
            i = l[0],
            o = l[1],
            j = Object(x.b)(),
            u = Object(x.c)(function (e) {
              return e.ProductsData;
            }),
            b = u.productPerPage,
            p = u.productCount,
            m = u.loading,
            h = u.products;
          return (
            Object(r.useEffect)(
              function () {
                j(D(e, c, i));
              },
              [j, e, c, i]
            ),
            Object(w.jsxs)(w.Fragment, {
              children: [
                Object(w.jsx)(A, {}),
                Object(w.jsx)("section", {
                  className: "pt-20 pb-2 bg-gray-100",
                  children: Object(w.jsxs)("div", {
                    className: " container ",
                    children: [
                      Object(w.jsx)("div", {
                        className:
                          "bg- w-80 mt-2 grid grid-cols-1 gap-y-10 gap-x- sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-2",
                        children: Object(w.jsx)("div", {
                          className: "group relative hover:shadow-lg bg-white",
                          children: Object(w.jsx)("div", {
                            class: "mt-12 mb-2 px-8 ",
                            children: Object(w.jsx)("div", {
                              children: Object(w.jsx)(se.a, {
                                value: i,
                                onChange: function (e, t) {
                                  o(t);
                                },
                                valueLabelDisplay: "",
                                "arial-labelledby": "range-slider",
                                min: 0,
                                max: 5e3,
                              }),
                            }),
                          }),
                        }),
                      }),
                      Object(w.jsxs)("div", {
                        children: [
                          Object(w.jsxs)("div", {
                            className:
                              "\r mx-auto py-1 px-4 sm:py-24 sm:px-6 lg:max-w-1/5 lg:px-8",
                            children: [
                              Object(w.jsx)("h2", {
                                className:
                                  "text-2xl font-md tracking-tight text-gray-900",
                                children: "All Products",
                              }),
                              m
                                ? Object(w.jsx)("div", {
                                    class:
                                      "fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center",
                                    children: Object(w.jsx)("div", {
                                      class:
                                        "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900",
                                    }),
                                  })
                                : Object(w.jsx)("div", {
                                    className:
                                      "bg- mt-2 grid grid-cols-2 gap-y-10 gap-x-0 sm:grid-cols-2 lg:grid-cols-3 ",
                                    children:
                                      h &&
                                      h.map(function (e) {
                                        return Object(w.jsx)(T, { product: e });
                                      }),
                                  }),
                            ],
                          }),
                          Object(w.jsx)("div", {
                            children:
                              b < p &&
                              Object(w.jsx)("div", {
                                className: "flex mt-4 justify-center",
                                children: Object(w.jsx)(te.a, {
                                  activePage: c,
                                  itemClass: "page-item",
                                  linkClass: "page-link",
                                  itemsCountPerPage: b,
                                  totalItemsCount: p,
                                  pageRangeDisplayed: 2,
                                  onChange: function (e) {
                                    a(e);
                                  },
                                }),
                              }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        ce = s(32),
        ae = s(38),
        ne = s.n(ae),
        le = function () {
          var e = Object(x.b)(),
            t = Object(r.useState)(!0),
            s = Object(y.a)(t, 2),
            c = s[0],
            a = s[1],
            n = Object(x.c)(function (e) {
              return e.userInfo;
            }).user,
            l = (function () {
              var t = Object(o.a)(
                i.a.mark(function t() {
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          e(O()), v.b.success("Logout successfully");
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return Object(w.jsxs)("div", {
            children: [
              Object(w.jsx)("nav", {
                class: "bg-white border-b border-gray-200 fixed z-30 w-full ",
                children: Object(w.jsx)("div", {
                  class: "px-3 py-3 lg:px-5 lg:pl-3",
                  children: Object(w.jsxs)("div", {
                    class: "flex items-center justify-between",
                    children: [
                      Object(w.jsxs)("div", {
                        class: "flex items-center justify-start",
                        children: [
                          Object(w.jsx)(j.b, {
                            to: "/home",
                            children: Object(w.jsxs)("a", {
                              class:
                                "text-xl font-bold flex items-center lg:ml-2.5",
                              children: [
                                Object(w.jsx)("img", {
                                  src: "https://demo.themesberg.com/windster/images/logo.svg",
                                  class: "h-6 mr-2",
                                  alt: "Windster Logo",
                                }),
                                Object(w.jsx)("span", {
                                  class: "self-center whitespace-nowrap",
                                  children: "eShop",
                                }),
                              ],
                            }),
                          }),
                          Object(w.jsxs)("form", {
                            action: "#",
                            method: "GET",
                            class: "hidden lg:block lg:pl-32",
                            children: [
                              Object(w.jsx)("label", {
                                for: "topbar-search",
                                class: "sr-only",
                                children: "Search",
                              }),
                              Object(w.jsxs)("div", {
                                class: "mt-1 relative lg:w-64",
                                children: [
                                  Object(w.jsx)("div", {
                                    class:
                                      "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                    children: Object(w.jsx)("svg", {
                                      class: "w-5 h-5 text-gray-500",
                                      fill: "currentColor",
                                      viewBox: "0 0 20 20",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: Object(w.jsx)("path", {
                                        "fill-rule": "evenodd",
                                        d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                                        "clip-rule": "evenodd",
                                      }),
                                    }),
                                  }),
                                  Object(w.jsx)("input", {
                                    type: "text",
                                    name: "email",
                                    id: "topbar-search",
                                    class:
                                      "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5",
                                    placeholder: "Search",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(w.jsx)("div", {
                        class: "flex items-center",
                        children: Object(w.jsxs)("a", {
                          class:
                            "hidden sm:inline-flex ml-5 text-dark bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3",
                          children: [
                            Object(w.jsx)("svg", {
                              class: "svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4",
                              "aria-hidden": "true",
                              focusable: "false",
                              "data-prefix": "fas",
                              "data-icon": "gem",
                              role: "img",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 512 512",
                              children: Object(w.jsx)("path", {
                                fill: "currentColor",
                                d: "M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z",
                              }),
                            }),
                            "Wellcome back admin -",
                            " ",
                            Object(w.jsx)("span", {
                              class: "text-xl underline pb-1 ",
                              children: n && n.name,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              Object(w.jsxs)("div", {
                className:
                  " rounded-r  xl:hidden flex  justify-between w-full py-6 pr-6 items-start md:overflow-y-auto z-50 ",
                children: [
                  Object(w.jsx)("div", {
                    className: " flex justify-between  items-start space-x-3 ",
                  }),
                  Object(w.jsxs)("div", {
                    "aria-label": "toggler",
                    className: "flex justify-center items-center mb-12  z-50",
                    children: [
                      Object(w.jsx)("button", {
                        "aria-label": "open",
                        id: "open",
                        onClick: function () {
                          return a(!0);
                        },
                        className: "".concat(
                          c ? "hidden" : "",
                          " focus:outline-none focus:ring-2"
                        ),
                        children: Object(w.jsxs)("svg", {
                          width: 24,
                          height: 24,
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            Object(w.jsx)("path", {
                              d: "M4 6H20",
                              stroke: "black",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                            Object(w.jsx)("path", {
                              d: "M4 12H20",
                              stroke: "black",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                            Object(w.jsx)("path", {
                              d: "M4 18H20",
                              stroke: "black",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                          ],
                        }),
                      }),
                      Object(w.jsx)("button", {
                        "aria-label": "close",
                        id: "close",
                        onClick: function () {
                          return a(!1);
                        },
                        className: "".concat(
                          c ? "" : "hidden",
                          " focus:outline-none focus:ring-2 "
                        ),
                        children: Object(w.jsxs)("svg", {
                          width: 24,
                          height: 24,
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            Object(w.jsx)("path", {
                              d: "M18 6L6 18",
                              stroke: "black",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                            Object(w.jsx)("path", {
                              d: "M6 6L18 18",
                              stroke: "black",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(w.jsx)("div", {
                id: "Main",
                className: "".concat(
                  c ? "translate-x-0" : "-translate-x-full",
                  "  transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-screen  w-full sm:w-64 bg-gray-50 flex-col -mt-20 md:-mt-0  z-50"
                ),
                children: Object(w.jsx)("div", {
                  className:
                    " flex flex-col justify-start items-center z-50 pl-4 w-full   space-y-3  ",
                  children: Object(w.jsx)("aside", {
                    id: "sidebar",
                    class:
                      "fixed  z-20 h-full top-0 left-0  flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75",
                    "aria-label": "Sidebar",
                    children: Object(w.jsx)("div", {
                      class:
                        "relative flex-1 flex flex-col min-h-0 md:border-r border-gray-200 bg-gray-50 pt-0",
                      children: Object(w.jsx)("div", {
                        class:
                          "   flex-1 flex flex-col pt-14 md:pt-24 pb-4 overflow-y-auto ",
                        children: Object(w.jsxs)("div", {
                          class: "flex-1 px-3   ",
                          children: [
                            Object(w.jsxs)("ul", {
                              class: "space-y-2 pb-2 border-b border-gray-200",
                              children: [
                                Object(w.jsx)(j.b, {
                                  to: "/admin_dashboard",
                                  children: Object(w.jsx)("li", {
                                    children: Object(w.jsxs)("a", {
                                      class:
                                        "text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group",
                                      children: [
                                        Object(w.jsxs)("svg", {
                                          class:
                                            "w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75",
                                          fill: "currentColor",
                                          viewBox: "0 0 20 20",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: [
                                            Object(w.jsx)("path", {
                                              d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z",
                                            }),
                                            Object(w.jsx)("path", {
                                              d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z",
                                            }),
                                          ],
                                        }),
                                        Object(w.jsx)("span", {
                                          class: "ml-3",
                                          children: "Dashboard",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                Object(w.jsx)(j.b, {
                                  to: "/admin/users",
                                  children: Object(w.jsx)("li", {
                                    children: Object(w.jsxs)("a", {
                                      class:
                                        "text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",
                                      children: [
                                        Object(w.jsx)("svg", {
                                          class:
                                            "w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",
                                          fill: "currentColor",
                                          viewBox: "0 0 20 20",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: Object(w.jsx)("path", {
                                            "fill-rule": "evenodd",
                                            d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                                            "clip-rule": "evenodd",
                                          }),
                                        }),
                                        Object(w.jsx)("span", {
                                          class:
                                            "ml-3 flex-1 whitespace-nowrap",
                                          children: "Users",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                Object(w.jsx)(j.b, {
                                  to: "/admin/products",
                                  children: Object(w.jsx)("li", {
                                    children: Object(w.jsxs)("a", {
                                      class:
                                        "text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",
                                      children: [
                                        Object(w.jsx)("svg", {
                                          class:
                                            "w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",
                                          fill: "currentColor",
                                          viewBox: "0 0 20 20",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: Object(w.jsx)("path", {
                                            "fill-rule": "evenodd",
                                            d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
                                            "clip-rule": "evenodd",
                                          }),
                                        }),
                                        Object(w.jsx)("span", {
                                          class:
                                            "ml-3 flex-1 whitespace-nowrap",
                                          children: "Products",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                Object(w.jsx)(j.b, {
                                  to: "/admin/orders",
                                  children: Object(w.jsx)("li", {
                                    children: Object(w.jsxs)("a", {
                                      class:
                                        "text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",
                                      children: [
                                        Object(w.jsx)("svg", {
                                          class:
                                            "w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",
                                          fill: "currentColor",
                                          viewBox: "0 0 20 20",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: Object(w.jsx)("path", {
                                            "fill-rule": "evenodd",
                                            d: "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
                                            "clip-rule": "evenodd",
                                          }),
                                        }),
                                        Object(w.jsx)("span", {
                                          class:
                                            "ml-3 flex-1 whitespace-nowrap",
                                          children: "Orders",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                Object(w.jsx)(j.b, {
                                  to: "/admin/reviews",
                                  children: Object(w.jsx)("li", {
                                    children: Object(w.jsxs)("a", {
                                      class:
                                        "text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",
                                      children: [
                                        Object(w.jsx)("svg", {
                                          class:
                                            "w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",
                                          fill: "currentColor",
                                          viewBox: "0 0 20 20",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: Object(w.jsx)("path", {
                                            "fill-rule": "evenodd",
                                            d: "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
                                            "clip-rule": "evenodd",
                                          }),
                                        }),
                                        Object(w.jsx)("span", {
                                          class:
                                            "ml-3 flex-1 whitespace-nowrap",
                                          children: "Reviews",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(w.jsx)("div", {
                              className:
                                " xl:flex justify-start p-6 items-center  ",
                              children: Object(w.jsx)("div", {
                                className:
                                  "flex flex-col justify-between items-center h-full     px-6  w-full  space-y-32  ",
                                children: Object(w.jsxs)("div", {
                                  className:
                                    " flex justify-between items-center w-full ",
                                  children: [
                                    Object(w.jsxs)("div", {
                                      className:
                                        "flex justify-center items-center  space-x-2",
                                      children: [
                                        Object(w.jsx)("div", {
                                          class: "flex-shrink-0",
                                          children: Object(w.jsx)("a", {
                                            href: "#",
                                            class: "block ",
                                            children: Object(w.jsx)("img", {
                                              alt: "profil",
                                              src: V,
                                              class:
                                                "mx-auto object-cover rounded h-14 w-14 ",
                                            }),
                                          }),
                                        }),
                                        Object(w.jsxs)("div", {
                                          className:
                                            "flex justify-start flex-col items-start",
                                          children: [
                                            Object(w.jsx)("p", {
                                              className:
                                                "cursor-pointer text-sm leading-5 text-gray-900",
                                              children: n && n.name,
                                            }),
                                            Object(w.jsx)("p", {
                                              className:
                                                "cursor-pointer text-xs leading-3 text-gray-700",
                                              children: n && n.email,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(w.jsxs)("svg", {
                                      className: "cursor-pointer",
                                      width: 24,
                                      height: 24,
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: [
                                        Object(w.jsx)("path", {
                                          d: "M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z",
                                          stroke: "white",
                                          strokeWidth: "1.5",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                        Object(w.jsx)("path", {
                                          d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
                                          stroke: "white",
                                          strokeWidth: "1.5",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            Object(w.jsx)("div", {
                              class: "space-y-2",
                              children: Object(w.jsxs)("a", {
                                target: "_blank",
                                class:
                                  "text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2",
                                children: [
                                  Object(w.jsx)("svg", {
                                    class:
                                      "w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: Object(w.jsx)("path", {
                                      "fill-rule": "evenodd",
                                      d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
                                      "clip-rule": "evenodd",
                                    }),
                                  }),
                                  Object(w.jsx)("button", {
                                    onClick: function () {
                                      return l();
                                    },
                                    class: "ml-3",
                                    children: "Logout",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        ie = function () {
          Object(Y.a)().handleSubmit;
          var e = Object(x.b)(),
            t = Object(x.c)(function (e) {
              return e.ProductsData;
            }),
            s = t.loading,
            c = t.error,
            a = t.products;
          console.log(a);
          var n = Object(x.c)(function (e) {
              return e.products;
            }),
            l = n.error,
            d = n.isDeleted,
            u = function (t) {
              ne.a
                .fire({
                  title: "Do you want to delete ?",
                  showDenyButton: !0,
                  confirmButtonText: "Delete",
                  denyButtonText: "Don't Delete",
                })
                .then(function (s) {
                  s.isConfirmed &&
                    e(
                      (function (e) {
                        return (function () {
                          var t = Object(o.a)(
                            i.a.mark(function t(s) {
                              var r, c;
                              return i.a.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.prev = 0),
                                          s({ type: "DELETE_PRODUCT_REQUEST" }),
                                          (t.next = 4),
                                          b.a.delete(
                                            "http://localhost:1234/v1/product/".concat(
                                              e
                                            ),
                                            { withCredentials: !0 }
                                          )
                                        );
                                      case 4:
                                        (r = t.sent),
                                          (c = r.data),
                                          console.log(c),
                                          s({
                                            type: "DELETE_PRODUCT_SUCCESS",
                                            payload: c.success,
                                          }),
                                          (t.next = 13);
                                        break;
                                      case 10:
                                        (t.prev = 10),
                                          (t.t0 = t.catch(0)),
                                          s({
                                            type: "DELETE_PRODUCT_FAIL",
                                            payload: t.t0.response.data.msg,
                                          });
                                      case 13:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                null,
                                [[0, 10]]
                              );
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })();
                      })(t)
                    );
                });
            };
          return (
            Object(r.useEffect)(
              function () {
                c && (ce.a.error(c), e(q())),
                  l && (ce.a.error(l), e(q())),
                  d &&
                    (ce.a.success("Product delete successfully"),
                    e({ type: "DELETE_PRODUCT_RESET" }),
                    window.location.reload()),
                  e(
                    (function () {
                      var e = Object(o.a)(
                        i.a.mark(function e(t) {
                          var s, r;
                          return i.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t({ type: "ADMIN_ALL_PRODUCT_REQUEST" }),
                                      (e.next = 4),
                                      b.a.get(
                                        "http://localhost:1234/v1/admin/all_products"
                                      )
                                    );
                                  case 4:
                                    (s = e.sent),
                                      (r = s.data),
                                      console.log(r),
                                      t({
                                        type: "ADMIN_ALL_PRODUCT_SUCCESS",
                                        payload: r,
                                      }),
                                      (e.next = 13);
                                    break;
                                  case 10:
                                    (e.prev = 10),
                                      (e.t0 = e.catch(0)),
                                      t({
                                        type: "ADMIN_ALL_PRODUCT_FAIL",
                                        payload: e.t0.response,
                                      });
                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 10]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  );
              },
              [e, l, d, c]
            ),
            Object(w.jsx)("main", {
              className:
                "bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden ",
              children: Object(w.jsxs)("div", {
                className: "md:flex products-start justify-between",
                children: [
                  Object(w.jsx)("div", {
                    className: " md:w-2/12    ",
                    children: Object(w.jsx)(le, {}),
                  }),
                  Object(w.jsxs)("div", {
                    className:
                      "  w-full  md:px-6 md:ml-4 mt-mmt2 md:mb-20 md:mt-24 md:space-y-4  ",
                    children: [
                      Object(w.jsx)(j.b, {
                        to: "/admin/add_product",
                        children: Object(w.jsx)("button", { children: "add" }),
                      }),
                      Object(w.jsx)("div", {
                        className:
                          "overflow-auto h-screen  mt-20 py-10 md:mt-0 md:pt-0 md:pb-4 px-1 mb-40",
                        children: Object(w.jsx)("div", {
                          className:
                            " overflow-x-auto  shadow-md sm:rounded-lg",
                          children: Object(w.jsxs)("table", {
                            className:
                              "w-full text-sm text-left text-gray-500 dark:text-gray-400  md:mb-28",
                            children: [
                              Object(w.jsx)("thead", {
                                className:
                                  "text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400",
                                children: Object(w.jsxs)("tr", {
                                  children: [
                                    Object(w.jsx)("th", {
                                      scope: "col",
                                      className: "px-6 py-3",
                                      children: "Product",
                                    }),
                                    Object(w.jsx)("th", {
                                      scope: "col",
                                      className: "px-6 py-3",
                                      children: "Stock",
                                    }),
                                    Object(w.jsx)("th", {
                                      scope: "col",
                                      className: "px-6 py-3",
                                      children: "Price",
                                    }),
                                    Object(w.jsx)("th", {
                                      scope: "col",
                                      className: "px-6 py-3 text-center",
                                      children: "Review",
                                    }),
                                    Object(w.jsx)("th", {
                                      scope: "col",
                                      className: "px-6 py-3 text-center",
                                      children: "Action",
                                    }),
                                  ],
                                }),
                              }),
                              Object(w.jsx)("tbody", {
                                children: s
                                  ? Object(w.jsxs)("div", {
                                      className: "animate-pulse",
                                      children: [
                                        Object(w.jsx)("div", {
                                          className:
                                            "h-4 bg-gray-200 mt-3 mb-6 rounded",
                                        }),
                                        Object(w.jsx)("div", {
                                          className:
                                            "h-4 bg-gray-300 mb-6 rounded",
                                        }),
                                        Object(w.jsx)("div", {
                                          className:
                                            "h-4 bg-gray-200 mb-6 rounded",
                                        }),
                                        Object(w.jsx)("div", {
                                          className:
                                            "h-4 bg-gray-300 mb-6 rounded",
                                        }),
                                        Object(w.jsx)("div", {
                                          className:
                                            "h-4 bg-gray-200 mb-6 rounded",
                                        }),
                                      ],
                                    })
                                  : Object(w.jsx)(w.Fragment, {
                                      children:
                                        a &&
                                        a.map(function (e, t) {
                                          return Object(w.jsxs)(
                                            "tr",
                                            {
                                              className:
                                                "bg-white border-b dark:bg-gray-800 dark:border-gray-700",
                                              children: [
                                                Object(w.jsx)("th", {
                                                  scope: "row",
                                                  className:
                                                    "px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",
                                                  children: Object(w.jsxs)(
                                                    "div",
                                                    {
                                                      children: [
                                                        Object(w.jsx)("div", {
                                                          children: e && e._id,
                                                        }),
                                                        Object(w.jsx)("div", {
                                                          children: e && e.name,
                                                        }),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                Object(w.jsxs)("td", {
                                                  className: "px-6 py-4",
                                                  children: [" ", e && e.stock],
                                                }),
                                                Object(w.jsxs)("td", {
                                                  className: "px-6 py-4",
                                                  children: [" ", e && e.price],
                                                }),
                                                Object(w.jsxs)("td", {
                                                  className: "px-6 py-4",
                                                  children: [
                                                    " ",
                                                    e && e.numberOfReview,
                                                  ],
                                                }),
                                                Object(w.jsxs)("td", {
                                                  className:
                                                    "px- py-4 text-left",
                                                  children: [
                                                    Object(w.jsx)(j.b, {
                                                      to: "/admin/product_update/".concat(
                                                        e._id
                                                      ),
                                                      children: Object(w.jsx)(
                                                        "button",
                                                        {
                                                          className:
                                                            " pr-4 font-sm text-gray-600  hover:underline",
                                                          children: Object(
                                                            w.jsx
                                                          )("svg", {
                                                            xmlns:
                                                              "http://www.w3.org/2000/svg",
                                                            className:
                                                              "h-6 w-6",
                                                            fill: "none",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            stroke:
                                                              "currentColor",
                                                            "stroke-width": "2",
                                                            children: Object(
                                                              w.jsx
                                                            )("path", {
                                                              "stroke-linecap":
                                                                "round",
                                                              "stroke-linejoin":
                                                                "round",
                                                              d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                                            }),
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(w.jsx)("button", {
                                                      onClick: function () {
                                                        return u(e && e._id);
                                                      },
                                                      className:
                                                        "font-sm text-gray-600  hover:underline",
                                                      children: Object(w.jsx)(
                                                        "svg",
                                                        {
                                                          xmlns:
                                                            "http://www.w3.org/2000/svg",
                                                          className: "h-6 w-6",
                                                          fill: "none",
                                                          viewBox: "0 0 24 24",
                                                          stroke:
                                                            "currentColor",
                                                          "stroke-width": "2",
                                                          children: Object(
                                                            w.jsx
                                                          )("path", {
                                                            "stroke-linecap":
                                                              "round",
                                                            "stroke-linejoin":
                                                              "round",
                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            t
                                          );
                                        }),
                                    }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        oe = s(49),
        de = s(82),
        je = s(81),
        xe = s(9),
        ue = Object(oe.combineReducers)({
          ProductsData: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { products: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ALL_PRODUCT_REQUEST":
              case "ADMIN_ALL_PRODUCT_REQUEST":
                return { loading: !0, products: [] };
              case "ALL_PRODUCT_SUCCESS":
              case "ADMIN_ALL_PRODUCT_SUCCESS":
                return {
                  loading: !1,
                  products: t.payload.products,
                  productCount: t.payload.productCount,
                  productPerPage: t.payload.productPerPage,
                };
              case "ALL_PRODUCT_FAIL":
              case "ADMIN_ALL_PRODUCT_FAIL":
                return { loading: !1, error: t.payload };
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          ProductDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { product: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "PRODUCT_DETAILS_REQUEST":
                return Object(H.a)({ loading: !0 }, e);
              case "PRODUCT_DETAILS_SUCCESS":
                return { loading: !1, product: t.payload };
              case "PRODUCT_DETAILS_FAIL":
                return { loading: !1, error: t.payload };
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          userInfo: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { user: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "USER_REGISTER_REQUEST":
              case "USER_REQUEST":
              case "LOAD_USER_REQUEST":
                return { loading: !0, isAuthenticated: !1 };
              case "USER_REGISTER_SUCCESS":
              case "USER_SUCCESS":
              case "LOAD_USER_SUCCESS":
                return { loading: !1, isAuthenticated: !0, user: t.payload };
              case "LOGOUT_SUCCESS":
                return { loading: !1, user: null, isAuthenticated: !1 };
              case "USER_REGISTER_FAIL":
              case "USER_FAIL":
              case "LOAD_USER_FAIL":
                return {
                  loading: !1,
                  isAuthenticated: !1,
                  user: null,
                  error: t.payload,
                };
              case "LOGOUT_FAIL":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, error: t.payload }
                );
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          cart: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { cartItems: [], shippingInfo: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ADD_TO_CART":
                var s = t.payload,
                  r = e.cartItems.find(function (e) {
                    return e.product === s.product;
                  });
                return r
                  ? Object(H.a)(
                      Object(H.a)({}, e),
                      {},
                      {
                        cartItems: e.cartItems.map(function (e) {
                          return e.product === r.product ? s : e;
                        }),
                      }
                    )
                  : Object(H.a)(
                      Object(H.a)({}, e),
                      {},
                      { cartItems: [].concat(Object(xe.a)(e.cartItems), [s]) }
                    );
              case "REMOVE_CART_ITEM":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  {
                    cartItems: e.cartItems.filter(function (e) {
                      return e.product !== t.payload;
                    }),
                  }
                );
              case "SAVE_SHIPPING_INFO":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { shippingInfo: t.payload }
                );
              default:
                return e;
            }
          },
          order: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "CREATE_ORDER_REQUEST":
                return Object(H.a)(Object(H.a)({}, e), {}, { loading: !0 });
              case "CREATE_ORDER_SUCCESS":
                return { loading: !1, order: t.payload };
              case "CREATE_ORDER_FAIL":
                return { loading: !1, error: t.payload };
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          MyOrder: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { orders: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "MY_ORDER_REQUEST":
                return { loading: !0 };
              case "MY_ORDER_SUCCESS":
                return { loading: !1, orders: t.payload };
              case "MY_ORDER_FAIL":
                return { loading: !1, error: t.payload };
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          orderDetail: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { order: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ORDER_DETAIL_REQUEST":
                return { loading: !0 };
              case "ORDER_DETAIL_SUCCESS":
                return { loading: !1, order: t.payload };
              case "ORDER_DETAIL_FAIL":
                return { loading: !1, error: t.payload };
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          allOrder: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { orders: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ALL_ORDER_REQUEST":
                return { loading: !0 };
              case "ALL_ORDER_SUCCESS":
                return {
                  loading: !1,
                  orders: t.payload.orders,
                  totalOrder: t.payload.totalOrder,
                  totalAmount: t.payload.totalAmount,
                };
              case "ALL_ORDER_FAIL":
                return { loading: !1, error: t.payload };
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          orders: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "DELETE_ORDER_REQUEST":
              case "UPDATE_ORDER_REQUEST":
                return Object(H.a)(Object(H.a)({}, e), {}, { loading: !0 });
              case "DELETE_ORDER_SUCCESS":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, isDeleted: t.payload }
                );
              case "UPDATE_ORDER_SUCCESS":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, isUpdated: t.payload }
                );
              case "DELETE_ORDER_FAIL":
              case "UPDATE_ORDER_FAIL":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, error: t.payload }
                );
              case "DELETE_ORDER_RESET":
                return Object(H.a)(Object(H.a)({}, e), {}, { isDeleted: !1 });
              case "UPDATE_ORDER_RESET":
                return Object(H.a)(Object(H.a)({}, e), {}, { isUpdated: !1 });
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          newReview: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "NEW_REVIEW_REQUEST":
                return Object(H.a)({ loading: !0 }, e);
              case "NEW_REVIEW_SUCCESS":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, review: t.payload }
                );
              case "NEW_REVIEW_FAIL":
                return { loading: !1, error: t.payload };
              case "NEW_REVIEW_RESET":
                return Object(H.a)(Object(H.a)({}, e), {}, { review: !1 });
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          addProduct: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { product: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "NEW_PRODUCT_REQUEST":
                return Object(H.a)(Object(H.a)({}, e), {}, { loading: !0 });
              case "NEW_PRODUCT_SUCCESS":
                return {
                  loading: !1,
                  success: t.payload.success,
                  product: t.payload.product,
                };
              case "NEW_PRODUCT_FAIL":
                return { loading: !1, error: t.payload };
              case "NEW_PRODUCT_RESET":
                return Object(H.a)(Object(H.a)({}, e), {}, { success: !1 });
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          products: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "DELETE_PRODUCT_REQUEST":
              case "UPDATE_PRODUCT_REQUEST":
                return Object(H.a)({ loading: !0 }, e);
              case "DELETE_PRODUCT_SUCCESS":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, isDeleted: t.payload }
                );
              case "UPDATE_PRODUCT_SUCCESS":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, isUpdated: t.payload }
                );
              case "DELETE_PRODUCT_FAIL":
              case "UPDATE_PRODUCT_FAIL":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, error: t.payload }
                );
              case "DELETE_PRODUCT_RESET":
                return Object(H.a)(Object(H.a)({}, e), {}, { isDeleted: !1 });
              case "UPDATE_PRODUCT_RESET":
                return Object(H.a)(Object(H.a)({}, e), {}, { isUpdated: !1 });
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          allUserInfo: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { users: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ALL_USER_REQUEST":
                return Object(H.a)(Object(H.a)({}, e), {}, { loading: !0 });
              case "ALL_USER_SUCCESS":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, users: t.payload }
                );
              case "ALL_USER_FAIL":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, error: t.payload }
                );
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          userDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { user: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "USER_DETAIL_REQUEST":
                return Object(H.a)(Object(H.a)({}, e), {}, { loading: !0 });
              case "USER_DETAIL_SUCCESS":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, user: t.payload }
                );
              case "USER_DETAIL_FAIL":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, error: t.payload }
                );
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          updateUser: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "UPDATE_USER_REQUEST":
              case "DELETE_USER_REQUEST":
                return Object(H.a)(Object(H.a)({}, e), {}, { loading: !0 });
              case "UPDATE_USER_SUCCESS":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, isUpdated: t.payload }
                );
              case "DELETE_USER_SUCCESS":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, isDeleted: t.payload }
                );
              case "UPDATE_USER_FAIL":
              case "DELETE_USER_FAIL":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, error: t.payload }
                );
              case "UPDATE_USER_RESET":
                return Object(H.a)(Object(H.a)({}, e), {}, { isUpdated: !1 });
              case "DELETE_USER_RESET":
                return Object(H.a)(Object(H.a)({}, e), {}, { isDeleted: !1 });
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          allReview: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { reviews: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ALL_REVIEW_REQUEST":
                return Object(H.a)(Object(H.a)({}, e), {}, { loading: !0 });
              case "ALL_REVIEW_SUCCESS":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, reviews: t.payload.reviews }
                );
              case "ALL_REVIEW_FAIL":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, error: t.payload }
                );
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          deleteReview: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "DELETE_REVIEW_REQUEST":
                return Object(H.a)(Object(H.a)({}, e), {}, { loading: !0 });
              case "DELETE_REVIEW_SUCCESS":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, isDeleted: t.payload }
                );
              case "DELETE_REVIEW_RESET":
                return Object(H.a)(Object(H.a)({}, e), {}, { isDeleted: !1 });
              case "DELETE_REVIEW_FAIL":
                return Object(H.a)(
                  Object(H.a)({}, e),
                  {},
                  { loading: !1, error: t.payload }
                );
              case "CLEAR_ERROR":
                return Object(H.a)(Object(H.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
        }),
        be = {
          cart: {
            cartItems: localStorage.getItem("cartItems")
              ? JSON.parse(localStorage.getItem("cartItems"))
              : [],
            shippingInfo: localStorage.getItem("shippingInfo")
              ? JSON.parse(localStorage.getItem("shippingInfo"))
              : {},
          },
        },
        pe = [de.a],
        me = Object(oe.createStore)(
          ue,
          be,
          Object(je.composeWithDevTools)(oe.applyMiddleware.apply(void 0, pe))
        ),
        he = function (e) {
          var t = e.user;
          return (
            console.log(t),
            Object(w.jsxs)(w.Fragment, {
              children: [
                Object(w.jsx)(A, {}),
                Object(w.jsx)("section", {
                  class: "text-gray-600 body-font md:mt-8 overflow-hidden",
                  children: Object(w.jsx)("div", {
                    class:
                      "container px-5 py-12 mx-auto border shadow rounded-xl ",
                    children: Object(w.jsxs)("div", {
                      class: "lg:w-4/5 mx-44 flex flex-wrap ",
                      children: [
                        Object(w.jsxs)("div", {
                          class: "lg:w-1/2 w-full lg:pl-10 lg:py- mt-6 lg:mt-0",
                          children: [
                            Object(w.jsx)("img", {
                              alt: "ecommerce",
                              class:
                                "lg:w-54 w-54 lg:h-54 h-54 object-cover object-center rounded-full",
                              src: V,
                            }),
                            Object(w.jsx)("div", {
                              class: "flex md:mt-1 ",
                              children: Object(w.jsx)("button", {
                                class:
                                  "flex mr-auto text-white bg-yellow-500  text-lg  border py-2 px-24 focus:outline-none  rounded",
                                children: "Edit Profile",
                              }),
                            }),
                          ],
                        }),
                        Object(w.jsxs)("div", {
                          class: "lg:w-1/2 w-full lg:pl-10 lg:py- mt-6 lg:mt-0",
                          children: [
                            Object(w.jsx)("h2", {
                              class:
                                "text-lg title-font text-gray-900  font-medium",
                              children: "Name",
                            }),
                            Object(w.jsx)("h2", {
                              class:
                                "text-sm title-font text-gray-500  font-medium",
                              children: t && t.name,
                            }),
                            Object(w.jsx)("h2", {
                              class:
                                "mt-14 text-lg title-font text-gray-900  font-medium",
                              children: "Email",
                            }),
                            Object(w.jsx)("h2", {
                              class:
                                "text-sm title-font text-gray-500  font-medium",
                              children: t && t.email,
                            }),
                            Object(w.jsx)("h2", {
                              class:
                                "mt-14 text-lg title-font text-gray-900  font-medium",
                              children: "Joined on",
                            }),
                            Object(w.jsx)("h2", {
                              class:
                                "text-sm title-font text-gray-500  font-medium",
                              children: String(t && t.createdAt).substr(0, 10),
                            }),
                            Object(w.jsxs)("div", {
                              class: "flex md:mt-20 ",
                              children: [
                                Object(w.jsx)(j.b, {
                                  to: "/my_orders",
                                  children: Object(w.jsx)("button", {
                                    class:
                                      "flex  text-gray-900 border-1 border-yellow-500  py-2 px-6 focus:outline-none hover:bg-yellow-100 rounded",
                                    children: "Order List",
                                  }),
                                }),
                                Object(w.jsx)("button", {
                                  class:
                                    "flex ml-12 text-gray-900  border-1 border-yellow-500 py-2 px-6 focus:outline-none hover:bg-yellow-100 rounded",
                                  children: "Review",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        },
        fe = function () {
          var e = Object(d.h)(),
            t = Object(x.b)(),
            s = Object(x.c)(function (e) {
              return e.cart;
            }).cartItems;
          console.log(s);
          var r = function (e) {
            t(
              (function (e) {
                return (function () {
                  var t = Object(o.a)(
                    i.a.mark(function t(s, r) {
                      return i.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              s({ type: "REMOVE_CART_ITEM", payload: e }),
                                localStorage.setItem(
                                  "cartItems",
                                  JSON.stringify(r().cart.cartItems)
                                );
                            case 2:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e, s) {
                    return t.apply(this, arguments);
                  };
                })();
              })(e)
            );
          };
          return Object(w.jsxs)(w.Fragment, {
            children: [
              Object(w.jsx)(A, {}),
              0 === (null === s || void 0 === s ? void 0 : s.length)
                ? Object(w.jsx)("div", {
                    class:
                      "h-96   flex justify-center content-center flex-wrap mt-24",
                    children: Object(w.jsx)("div", {
                      class:
                        "shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-1/3 m-auto relative",
                      children: Object(w.jsx)("div", {
                        class: "w-full h-full text-center",
                        children: Object(w.jsxs)("div", {
                          class: "flex h-full flex-col justify-between",
                          children: [
                            Object(w.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "40",
                              height: "40",
                              fill: "currentColor",
                              class:
                                "mt-4 w-20 h-20 m-auto text-gray-400 dark:text-white",
                              viewBox: "0 0 2048 1792",
                              children: Object(w.jsx)("path", {
                                d: "M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z",
                              }),
                            }),
                            Object(w.jsx)("p", {
                              class:
                                "text-gray-900 dark:text-white text-2xl mt-4 font-semibold",
                              children: "YOUR BAG FEELS VERY LIGHT",
                            }),
                            Object(w.jsx)("p", {
                              class:
                                "dark:text-gray-50 text-gray-800 text-md font-thin py-2 px-6",
                              children:
                                "THERE IS NOTHING IN YOUR BAG.LET'S ADD SOME ITEMS",
                            }),
                            Object(w.jsx)(j.b, {
                              to: "/v1/products",
                              children: Object(w.jsx)("button", {
                                class:
                                  "dark:text-gray-50 text-gray-800 text-lg font-bold py-2 px-6 bg-green-200",
                                children: "Add Item",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  })
                : Object(w.jsx)(w.Fragment, {
                    children: Object(w.jsx)("div", {
                      class: "h-screen ",
                      children: Object(w.jsx)("div", {
                        class: "py-4",
                        children: Object(w.jsx)("div", {
                          class:
                            "max-w-full mt-14 bg-white mx-auto   rounded-lg md:max-w-5xl",
                          children: Object(w.jsx)("div", {
                            class: "md: ",
                            children: Object(w.jsxs)("div", {
                              class: "w-full p-4 px-5 ",
                              children: [
                                Object(w.jsx)("div", {
                                  class: "md:grid md:grid-cols-3 gap-2  pb-4 ",
                                  children: Object(w.jsxs)("div", {
                                    class: "col-span-3 p-2",
                                    children: [
                                      Object(w.jsx)("h1", {
                                        class: " pb-4 text-xl font-medium ",
                                        children: "Shopping Cart",
                                      }),
                                      s &&
                                        s.map(function (e) {
                                          return Object(w.jsxs)("div", {
                                            class:
                                              "flex justify-between items-center py-2",
                                            children: [
                                              Object(w.jsxs)("div", {
                                                class: "flex items-center",
                                                children: [
                                                  Object(w.jsx)("img", {
                                                    src: e.image,
                                                    width: "60",
                                                    class: "rounded",
                                                  }),
                                                  Object(w.jsxs)("div", {
                                                    class: "flex flex-col ml-3",
                                                    children: [
                                                      " ",
                                                      Object(w.jsx)("span", {
                                                        class:
                                                          "md:text-md font-medium",
                                                        children:
                                                          null === e ||
                                                          void 0 === e
                                                            ? void 0
                                                            : e.name,
                                                      }),
                                                      " ",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              Object(w.jsxs)("div", {
                                                class:
                                                  "flex justify-center items-center",
                                                children: [
                                                  Object(w.jsxs)("div", {
                                                    class: "pr-8 flex ",
                                                    children: [
                                                      " ",
                                                      Object(w.jsx)("button", {
                                                        class:
                                                          "font-medium text-lg",
                                                        onClick: function () {
                                                          return (
                                                            (s = e.product),
                                                            void (
                                                              1 >=
                                                                (r =
                                                                  e.quantity) ||
                                                              t(Z(s, r - 1))
                                                            )
                                                          );
                                                          var s, r;
                                                        },
                                                        children: "-",
                                                      }),
                                                      Object(w.jsx)("input", {
                                                        type: "text",
                                                        class:
                                                          "focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2",
                                                        value: e.quantity,
                                                        readOnly: !0,
                                                      }),
                                                      Object(w.jsx)("button", {
                                                        class:
                                                          "font-medium text-lg",
                                                        onClick: function () {
                                                          return (function (
                                                            e,
                                                            s,
                                                            r
                                                          ) {
                                                            var c = s + 1;
                                                            r <= s
                                                              ? v.b.error(
                                                                  "Don't have more product"
                                                                )
                                                              : t(Z(e, c));
                                                          })(
                                                            e.product,
                                                            e.quantity,
                                                            e.stock
                                                          );
                                                        },
                                                        children: "+",
                                                      }),
                                                    ],
                                                  }),
                                                  Object(w.jsx)("div", {
                                                    class: "pr-8 ",
                                                    children: Object(w.jsxs)(
                                                      "span",
                                                      {
                                                        class: " font-medium",
                                                        children: [
                                                          "$",
                                                          e.price,
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  Object(w.jsx)("div", {
                                                    class: "pr-8 ",
                                                    children: Object(w.jsx)(
                                                      "button",
                                                      {
                                                        class:
                                                          "text-xs font-medium",
                                                        onClick: function () {
                                                          return r(e.product);
                                                        },
                                                        children: Object(w.jsx)(
                                                          "svg",
                                                          {
                                                            xmlns:
                                                              "http://www.w3.org/2000/svg",
                                                            className:
                                                              "h-6 w-6 text-red-600",
                                                            fill: "none",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            stroke:
                                                              "currentColor",
                                                            "stroke-width": "2",
                                                            children: Object(
                                                              w.jsx
                                                            )("path", {
                                                              "stroke-linecap":
                                                                "round",
                                                              "stroke-linejoin":
                                                                "round",
                                                              d: "M6 18L18 6M6 6l12 12",
                                                            }),
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  Object(w.jsxs)("div", {
                                                    children: [
                                                      " ",
                                                      Object(w.jsx)("i", {
                                                        class:
                                                          "fa fa-close text-xs font-medium",
                                                      }),
                                                      " ",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          });
                                        }),
                                      Object(w.jsxs)("div", {
                                        class:
                                          "flex justify-between items-center mt-6 pt-6 border-t",
                                        children: [
                                          Object(w.jsxs)("div", {
                                            class: "flex items-center",
                                            children: [
                                              " ",
                                              Object(w.jsx)("svg", {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                class: "h-6 w-6",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                "stroke-width": "2",
                                                children: Object(w.jsx)(
                                                  "path",
                                                  {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    d: "M10 19l-7-7m0 0l7-7m-7 7h18",
                                                  }
                                                ),
                                              }),
                                              Object(w.jsxs)(j.b, {
                                                to: "/v1/products",
                                                children: [
                                                  Object(w.jsx)("span", {
                                                    class:
                                                      "pl-2 text-md font-medium text-gray-900",
                                                    children: "Shop more",
                                                  }),
                                                  " ",
                                                ],
                                              }),
                                            ],
                                          }),
                                          Object(w.jsxs)("div", {
                                            class:
                                              "flex justify-center items-center mr-8 ",
                                            children: [
                                              " ",
                                              Object(w.jsx)("span", {
                                                class:
                                                  "text-sm font-medium text-gray-600 mr-1",
                                                children: "Subtotal:",
                                              }),
                                              " ",
                                              Object(w.jsxs)("span", {
                                                class:
                                                  "text-lg font-bold text-mainBaseColor ",
                                                children: [
                                                  " ",
                                                  "TK. ".concat(
                                                    s.reduce(function (e, t) {
                                                      return (
                                                        e + t.quantity * t.price
                                                      );
                                                    }, 0)
                                                  ),
                                                ],
                                              }),
                                              " ",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                " ",
                                Object(w.jsx)("button", {
                                  onClick: function () {
                                    e("/shipping");
                                  },
                                  class:
                                    "mr-10 flex ml-auto text-white bg-mainBaseColor border-0 py-2 px-6 focus:outline-none rounded",
                                  children: "Check Out",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
            ],
          });
        },
        Oe = s(50),
        ge = function () {
          var e = Object(x.b)(),
            t = Object(d.h)(),
            s = Object(x.c)(function (e) {
              return e.cart;
            }),
            c = s.shippingInfo;
          console.log(c);
          var a = Object(r.useState)(c.address),
            n = Object(y.a)(a, 2),
            l = n[0],
            j = n[1],
            u = Object(r.useState)(c.address),
            b = Object(y.a)(u, 2),
            p = b[0],
            m = b[1],
            h = Object(r.useState)(c.state),
            f = Object(y.a)(h, 2),
            O = f[0],
            g = f[1],
            E = Object(r.useState)(c.country),
            C = Object(y.a)(E, 2),
            N = C[0],
            S = C[1],
            R = Object(r.useState)(c.phone),
            k = Object(y.a)(R, 2),
            U = k[0],
            T = k[1];
          console.log(l, p, O, N, U);
          var L = function () {
            var s;
            U.length < 11 || U.length > 11
              ? v.b.error("Phone number should be 11 digit")
              : (e(
                  ((s = {
                    address: l,
                    city: p,
                    state: O,
                    country: N,
                    phone: U,
                  }),
                  (function () {
                    var e = Object(o.a)(
                      i.a.mark(function e(t) {
                        return i.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                console.log(s),
                                  t({ type: "SAVE_SHIPPING_INFO", payload: s }),
                                  localStorage.setItem(
                                    "shippingInfo",
                                    JSON.stringify(s)
                                  );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })())
                ),
                t("/v1/user/order/confirm"),
                console.log({
                  address: l,
                  city: p,
                  state: O,
                  country: N,
                  phone: U,
                }));
          };
          return Object(w.jsxs)(w.Fragment, {
            children: [
              Object(w.jsx)(A, {}),
              Object(w.jsx)("div", {
                class: "flex   mt-24",
                children: Object(w.jsx)("div", {
                  class: "m-auto ",
                  children: Object(w.jsx)("div", {
                    children: Object(w.jsxs)("div", {
                      class: " bg-white rounded-lg ",
                      children: [
                        Object(w.jsx)("div", {
                          class: "flex",
                          children: Object(w.jsx)("div", {
                            class: "flex-1 py-5 pl-5 overflow-hidden",
                            children: Object(w.jsx)("h1", {
                              class: "inline text-xl  font-medium leading-none",
                              children: "Shipping Information",
                            }),
                          }),
                        }),
                        Object(w.jsxs)("div", {
                          class: "px-5 pb-4",
                          children: [
                            Object(w.jsx)("input", {
                              type: "text",
                              required: !0,
                              value: l,
                              onChange: function (e) {
                                return j(e.target.value);
                              },
                              placeholder: "Address",
                              class:
                                " text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400",
                            }),
                            Object(w.jsxs)("div", {
                              class: "flex",
                              children: [
                                Object(w.jsx)("div", {
                                  class: "flex-grow w-1/4 pr-2",
                                  children: Object(w.jsx)("input", {
                                    type: "text",
                                    required: !0,
                                    value: p,
                                    onChange: function (e) {
                                      return m(e.target.value);
                                    },
                                    placeholder: "City",
                                    class:
                                      " text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400",
                                  }),
                                }),
                                Object(w.jsx)("div", {
                                  class: "flex-grow",
                                  children: Object(w.jsx)("input", {
                                    max: "11",
                                    type: "number",
                                    required: !0,
                                    value: U,
                                    onChange: function (e) {
                                      return T(e.target.value);
                                    },
                                    placeholder: "Phone no",
                                    class:
                                      " text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400",
                                  }),
                                }),
                              ],
                            }),
                            Object(w.jsxs)("select", {
                              type: "text",
                              value: N,
                              onChange: function (e) {
                                return S(e.target.value);
                              },
                              class:
                                " text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400",
                              children: [
                                Object(w.jsx)("option", {
                                  value: "",
                                  children: "Country",
                                }),
                                Oe.Country &&
                                  Oe.Country.getAllCountries().map(function (
                                    e
                                  ) {
                                    return Object(w.jsxs)(
                                      "option",
                                      {
                                        value: e.isoCode,
                                        children: [" ", e.name],
                                      },
                                      e.isoCode
                                    );
                                  }),
                              ],
                            }),
                            N &&
                              Object(w.jsxs)("select", {
                                type: "text",
                                value: O,
                                onChange: function (e) {
                                  return g(e.target.value);
                                },
                                class:
                                  " text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400",
                                children: [
                                  Object(w.jsx)("option", {
                                    value: "",
                                    children: "State",
                                  }),
                                  Oe.State &&
                                    Oe.State.getStatesOfCountry(N).map(
                                      function (e) {
                                        return Object(w.jsxs)(
                                          "option",
                                          {
                                            value: e.isoCode,
                                            children: [" ", e.name],
                                          },
                                          e.isoCode
                                        );
                                      }
                                    ),
                                ],
                              }),
                          ],
                        }),
                        Object(w.jsx)("div", {
                          class: "flex flex-row-reverse p-3",
                          children: Object(w.jsx)("div", {
                            class: "flex-initial mr-10",
                            children: Object(w.jsx)("button", {
                              onClick: function () {
                                return L();
                              },
                              class:
                                "flex ml-auto text-white bg-mainBaseColor  py-2 px-6 focus:outline-none rounded",
                              disabled: !(l && p && U && O),
                              children: Object(w.jsx)("span", {
                                class: "pl-2 mx-1",
                                children: "Continue",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              Object(w.jsx)(z, {}),
            ],
          });
        },
        ve = function () {
          var e = Object(x.c)(function (e) {
              return e.cart;
            }),
            t = e.shippingInfo,
            s = e.cartItems,
            c = Object(x.c)(function (e) {
              return e.userInfo;
            }).user,
            a = Object(x.c)(function (e) {
              return e.MyOrder;
            }).orders,
            n = Object(d.h)(),
            l = s.reduce(function (e, t) {
              return e + t.quantity * t.price;
            }, 0);
          console.log(a);
          var i = l > 1e3 ? 0 : 5,
            o = Math.round(0.05 * l),
            u = l + o + i,
            b = ""
              .concat(t.address, ", ")
              .concat(t.city, ", ")
              .concat(t.state, ", ")
              .concat(t.country),
            p = new Date(),
            m =
              p.getFullYear() +
              "-" +
              (p.getMonth() + 1) +
              "-" +
              p.getDate() +
              " " +
              (p.getHours() + ":" + p.getMinutes());
          return (
            Object(r.useEffect)(function () {}),
            Object(w.jsxs)(w.Fragment, {
              children: [
                Object(w.jsx)(A, {}),
                Object(w.jsx)("div", {
                  className: "",
                  children: Object(w.jsxs)("div", {
                    className:
                      "mt-20 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto  bg-white",
                    children: [
                      Object(w.jsxs)("div", {
                        className:
                          "flex justify-start item-start space-y-2 flex-col container",
                        children: [
                          Object(w.jsx)("h1", {
                            className:
                              "text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800",
                            children: "Order",
                          }),
                          Object(w.jsx)("p", {
                            className:
                              "text-base font-medium leading-6 text-gray-600",
                            children: m,
                          }),
                        ],
                      }),
                      Object(w.jsxs)("div", {
                        className:
                          "mt-1 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0",
                        children: [
                          Object(w.jsxs)("div", {
                            className:
                              "flex flex-col justify-start items-start w-full space-y-4 my-4 md:space-y- xl:space-y-",
                            children: [
                              Object(w.jsx)("div", {
                                className:
                                  "flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full",
                                children:
                                  s &&
                                  s.map(function (e) {
                                    return Object(w.jsxs)("div", {
                                      className:
                                        "mt- md:mt- flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ",
                                      children: [
                                        Object(w.jsx)("div", {
                                          className:
                                            "pb-3 md:pb- w-full md:w-10",
                                          children: Object(w.jsx)("img", {
                                            className: "md:w-full  md:block",
                                            src: e.image,
                                            alt: "dress",
                                          }),
                                        }),
                                        Object(w.jsxs)("div", {
                                          className:
                                            " md:flex-row flex-col flex justify-between items-start w-full  pb-4 space-y-4 md:space-y-0",
                                          children: [
                                            Object(w.jsx)("div", {
                                              className:
                                                "w-full flex flex-col justify-start items-start space-y-",
                                              children: Object(w.jsx)("h3", {
                                                className:
                                                  "text-medium font- leading-6 text-gray-800",
                                                children: Object(w.jsx)(j.b, {
                                                  to: "/v1/product/".concat(
                                                    e.product
                                                  ),
                                                  children: e.name,
                                                }),
                                              }),
                                            }),
                                            Object(w.jsxs)("div", {
                                              className:
                                                "flex justify-between space-x-8 items-start w-full",
                                              children: [
                                                Object(w.jsxs)("p", {
                                                  className:
                                                    " text-medium leading-6",
                                                  children: [
                                                    e.quantity,
                                                    " x ",
                                                    e.price,
                                                  ],
                                                }),
                                                Object(w.jsxs)("p", {
                                                  className:
                                                    "text-medium  font-semibold leading-6 text-gray-800",
                                                  children: [
                                                    "TK. ",
                                                    e.quantity * e.price,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    });
                                  }),
                              }),
                              Object(w.jsx)("div", {
                                className:
                                  "flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8",
                                children: Object(w.jsxs)("div", {
                                  className:
                                    "flex flex-col px-4 py- md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ",
                                  children: [
                                    Object(w.jsx)("h3", {
                                      className:
                                        "text-xl font-semibold leading-5 text-gray-800",
                                      children: "Customer",
                                    }),
                                    Object(w.jsxs)("div", {
                                      className:
                                        "flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ",
                                      children: [
                                        Object(w.jsx)("div", {
                                          className:
                                            "flex flex-col justify-start items-start flex-shrink-0",
                                          children: Object(w.jsxs)("div", {
                                            className:
                                              "flex justify-center  w-full  md:justify-start items-center space-x-4 py-1 border-b border-gray-200",
                                            children: [
                                              Object(w.jsx)("img", {
                                                className: "h-20",
                                                src: "https://i.ibb.co/5TSg7f6/Rectangle-18.png",
                                                alt: "avatar",
                                              }),
                                              Object(w.jsxs)("div", {
                                                className:
                                                  " flex justify-start items-start flex-col space-y-2",
                                                children: [
                                                  Object(w.jsx)("p", {
                                                    className:
                                                      "text-base font-semibold leading-4 text-left text-gray-800",
                                                    children:
                                                      null === c || void 0 === c
                                                        ? void 0
                                                        : c.name,
                                                  }),
                                                  Object(w.jsx)("p", {
                                                    className:
                                                      "text-sm leading-5 text-gray-600",
                                                    children:
                                                      null === c || void 0 === c
                                                        ? void 0
                                                        : c.email,
                                                  }),
                                                  Object(w.jsx)("p", {
                                                    className:
                                                      "text-sm leading-5 text-gray-600",
                                                    children:
                                                      null === t || void 0 === t
                                                        ? void 0
                                                        : t.phone,
                                                  }),
                                                  Object(w.jsxs)("p", {
                                                    className:
                                                      "text-sm leading-5 text-gray-600",
                                                    children: [
                                                      a && a.length,
                                                      " Previous Orders",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        Object(w.jsx)("div", {
                                          className:
                                            "flex justify-between xl:h-full  items-stretch w-full flex-col  md:mt-0",
                                          children: Object(w.jsx)("div", {
                                            className:
                                              "flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ",
                                            children: Object(w.jsxs)("div", {
                                              className:
                                                "flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8",
                                              children: [
                                                Object(w.jsx)("p", {
                                                  className:
                                                    "text-base font-semibold leading-4 text-center md:text-left text-gray-800",
                                                  children: "Shipping Address",
                                                }),
                                                Object(w.jsx)("p", {
                                                  className:
                                                    "w-48 lg:w-full xl:w-48 text-start md:text-left text-medium leading-5 text-gray-900",
                                                  children: b,
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          Object(w.jsxs)("div", {
                            className:
                              "bg-gray-50 w-full xl:w-96 flex  items-center md:items-start px-4 py-4 md:p- xl:p- flex-col h-80",
                            children: [
                              Object(w.jsx)("h3", {
                                className:
                                  "text-xl font-semibold leading-5 text-gray-800 ",
                                children: "Summary",
                              }),
                              Object(w.jsxs)("div", {
                                className:
                                  "flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-12 pt-10",
                                children: [
                                  Object(w.jsxs)("div", {
                                    className: "flex justify-between  w-full",
                                    children: [
                                      Object(w.jsx)("p", {
                                        className:
                                          "text-base leading-4 text-gray-800",
                                        children: "Subtotal",
                                      }),
                                      Object(w.jsxs)("p", {
                                        className:
                                          "text-base leading-4 text-gray-900",
                                        children: ["TK. ", l],
                                      }),
                                    ],
                                  }),
                                  Object(w.jsxs)("div", {
                                    className:
                                      "flex justify-between items-center w-full",
                                    children: [
                                      Object(w.jsx)("p", {
                                        className:
                                          "text-base leading-4 text-gray-800",
                                        children: "Tax",
                                      }),
                                      Object(w.jsxs)("p", {
                                        className:
                                          "text-base leading-4 text-gray-900",
                                        children: ["TK. ", o],
                                      }),
                                    ],
                                  }),
                                  Object(w.jsxs)("div", {
                                    className:
                                      "flex justify-between items-center w-full",
                                    children: [
                                      Object(w.jsx)("p", {
                                        className:
                                          "text-base leading-4 text-gray-800",
                                        children: "Shipping",
                                      }),
                                      Object(w.jsxs)("p", {
                                        className:
                                          "text-base leading-4 text-gray-900",
                                        children: ["TK. ", i],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(w.jsxs)("div", {
                                className:
                                  "flex justify-between items-center w-full pt-4",
                                children: [
                                  Object(w.jsx)("p", {
                                    className:
                                      "text-base font-semibold leading-4 text-gray-800",
                                    children: "Total",
                                  }),
                                  Object(w.jsxs)("p", {
                                    className:
                                      "text-base font-semibold leading-4 text-mainBaseColor",
                                    children: ["TK. ", u],
                                  }),
                                ],
                              }),
                              Object(w.jsx)("div", {
                                children: Object(w.jsx)("button", {
                                  onClick: function () {
                                    var e = {
                                      subTotal: l,
                                      shippingPrice: i,
                                      tax: o,
                                      total: u,
                                    };
                                    sessionStorage.setItem(
                                      "orderInfo",
                                      JSON.stringify(e)
                                    ),
                                      n("/v1/process/payment");
                                  },
                                  class:
                                    " text-lg p-2 mt-3 w-full rounded bg-mainBaseColor font-semibold leading-5 text-white ",
                                  children: "Payment",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        ye = s(39),
        we = s(83),
        Ee = function (e) {
          return (function () {
            var t = Object(o.a)(
              i.a.mark(function t(s) {
                var r, c, a;
                return i.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            s({ type: "CREATE_ORDER_REQUEST" }),
                            (r = {
                              headers: { "Content-Type": "application/json" },
                              withCredentials: !0,
                            }),
                            (t.next = 5),
                            b.a.post("http://localhost:1234/v1/order/new", e, r)
                          );
                        case 5:
                          (c = t.sent),
                            (a = c.data),
                            s({ type: "CREATE_ORDER_SUCCESS", payload: a }),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            s({
                              type: "CREATE_ORDER_FAIL",
                              payload: t.t0.response.data.message,
                            });
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        Ce = function () {
          return (function () {
            var e = Object(o.a)(
              i.a.mark(function e(t) {
                var s, r;
                return i.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: "ALL_ORDER_REQUEST" }),
                            (e.next = 4),
                            b.a.get("http://localhost:1234/v1/orders", {
                              withCredentials: !0,
                            })
                          );
                        case 4:
                          (s = e.sent),
                            (r = s.data),
                            t({ type: "ALL_ORDER_SUCCESS", payload: r }),
                            (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            console.log(e.t0),
                            t({
                              type: "ALL_ORDER_FAIL",
                              payload: e.t0.response.data.message,
                            });
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        Ne = function (e) {
          return (function () {
            var t = Object(o.a)(
              i.a.mark(function t(s) {
                var r, c;
                return i.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.log(e),
                            (t.prev = 1),
                            s({ type: "ORDER_DETAIL_REQUEST" }),
                            (t.next = 5),
                            b.a.get(
                              "http://localhost:1234/v1/order/".concat(e),
                              { withCredentials: !0 }
                            )
                          );
                        case 5:
                          (r = t.sent),
                            (c = r.data),
                            console.log(c),
                            s({
                              type: "ORDER_DETAIL_SUCCESS",
                              payload: c.order,
                            }),
                            (t.next = 15);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(1)),
                            console.log(t.t0),
                            s({
                              type: "ORDER_DETAIL_FAIL",
                              payload: t.t0.response.data.message,
                            });
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        Se = function () {
          return (function () {
            var e = Object(o.a)(
              i.a.mark(function e(t) {
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t({ type: "CLEAR_ERROR" });
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        Re = function () {
          var e = Object(ye.useStripe)(),
            t = Object(ye.useElements)(),
            s = Object(x.b)(),
            c = Object(r.useState)(!1),
            a = Object(y.a)(c, 2),
            n = a[0],
            l = a[1],
            j = Object(d.h)(),
            u = JSON.parse(sessionStorage.getItem("orderInfo")),
            p = Object(x.c)(function (e) {
              return e.cart;
            }),
            m = p.shippingInfo,
            h = p.cartItems,
            f = Object(x.c)(function (e) {
              return e.userInfo;
            }).user,
            O = Object(x.c)(function (e) {
              return e.order;
            }),
            g = O.error,
            E = O.clearErrors;
          console.log(g);
          var C = { amount: Math.round(u && 100 * u.total) },
            N = {
              shippingInfo: m,
              orderItems: h,
              itemPrice: u && u.subTotal,
              taxPrice: u && u.tax,
              shippingPrice: u && u.shippingPrice,
              totalPrice: u && u.total,
            },
            S = (function () {
              var r = Object(o.a)(
                i.a.mark(function r(c) {
                  var a, n, o, d, x;
                  return i.a.wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              c.preventDefault(),
                              l(!0),
                              (r.prev = 2),
                              (a = {
                                headers: { "Content-Type": "application/json" },
                              }),
                              (r.next = 6),
                              b.a.post("/v1/payment", C, a)
                            );
                          case 6:
                            if (
                              ((n = r.sent),
                              (o = n.data),
                              (d = o.client_secret),
                              e && t)
                            ) {
                              r.next = 11;
                              break;
                            }
                            return r.abrupt("return");
                          case 11:
                            return (
                              (r.next = 13),
                              e.confirmCardPayment(d, {
                                payment_method: {
                                  card: t.getElement(ye.CardElement),
                                  billing_details: {
                                    name: f.name,
                                    email: f.email,
                                    phone: m.phone,
                                    address: {
                                      line1: m.address,
                                      city: m.city,
                                      country: m.country,
                                      state: m.state,
                                    },
                                  },
                                },
                              })
                            );
                          case 13:
                            (x = r.sent).error
                              ? console(x.error)
                              : "succeeded" === x.paymentIntent.status
                              ? ((N.paymentInfo = {
                                  id: x.paymentIntent.id,
                                  status: x.paymentIntent.status,
                                }),
                                l(!1),
                                s(Ee(N)),
                                localStorage.clear(),
                                sessionStorage.clear(),
                                j("/success"),
                                v.b.success("Successfully payment"))
                              : alert(
                                  "There is some issue while processing payment..."
                                ),
                              (r.next = 20);
                            break;
                          case 17:
                            (r.prev = 17), (r.t0 = r.catch(2)), v.b.error(r.t0);
                          case 20:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[2, 17]]
                  );
                })
              );
              return function (e) {
                return r.apply(this, arguments);
              };
            })();
          return (
            Object(r.useEffect)(
              function () {
                g && (v.b.error(g), s(E));
              },
              [s, g, E]
            ),
            Object(w.jsxs)(w.Fragment, {
              children: [
                Object(w.jsx)(A, {}),
                Object(w.jsx)("div", {
                  className: "flex align-center justify-center",
                  children: Object(w.jsxs)("div", {
                    className: "mt-40 mx-24  bg-white rounded w-1/3",
                    children: [
                      Object(w.jsxs)("form", {
                        onSubmit: S,
                        className: "p-8",
                        children: [
                          Object(w.jsx)("span", {
                            className: "text-gray-400",
                            children: "* 4242 4242 4242 4242",
                          }),
                          Object(w.jsx)(ye.CardElement, {}),
                          Object(w.jsx)("button", {
                            disabled: !e || !t,
                            className:
                              "mt-12 w ml-auto text-white bg-mainBaseColor border-0 py-2 px-6 focus:outline-none rounded",
                            children: n
                              ? Object(w.jsx)("div", {
                                  className: "spinner text-white",
                                  id: "spinner",
                                })
                              : Object(w.jsxs)("div", {
                                  children: ["Pay ", u && u.total],
                                }),
                          }),
                        ],
                      }),
                      Object(w.jsx)(v.a, {}),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        Ae = function () {
          var e = Object(r.useState)(""),
            t = Object(y.a)(e, 2),
            s = t[0],
            c = t[1];
          function a() {
            return (a = Object(o.a)(
              i.a.mark(function e() {
                var t, s;
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), b.a.get("/v1/getStripeKey");
                      case 2:
                        (t = e.sent), (s = t.data), c(s.stripeKey);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          return (
            Object(r.useEffect)(function () {
              !(function () {
                a.apply(this, arguments);
              })();
            }, []),
            Object(w.jsxs)(w.Fragment, {
              children: [
                Object(w.jsx)(A, {}),
                s &&
                  Object(w.jsx)(ye.Elements, {
                    stripe: Object(we.a)(s),
                    children: Object(w.jsx)(Re, {}),
                  }),
              ],
            })
          );
        },
        ke = function () {
          var e = (function () {
              var e = {
                isAuthenticated: Object(x.c)(function (e) {
                  return e.userInfo;
                }).isAuthenticated,
              };
              return e && e.isAuthenticated;
            })(),
            t = Object(d.g)();
          return e
            ? Object(w.jsx)(d.b, {})
            : Object(w.jsx)(d.a, {
                to: "/v1/user/login",
                state: { from: t },
                replace: !0,
              });
        },
        Ue = function () {
          return Object(w.jsx)("div", {
            class: "bg-gray-100  mt-40",
            children: Object(w.jsxs)("div", {
              class: "bg-white p-6  md:mx-auto",
              children: [
                Object(w.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  class: "text-green-600 w-16 h-16 mx-auto my-6",
                  children: Object(w.jsx)("path", {
                    fill: "currentColor",
                    d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
                  }),
                }),
                Object(w.jsxs)("div", {
                  class: "text-center",
                  children: [
                    Object(w.jsx)("h3", {
                      class:
                        "md:text-2xl text-base text-gray-900 font-semibold text-center",
                      children: "Payment Done!",
                    }),
                    Object(w.jsx)("p", {
                      class: "text-gray-600 my-2",
                      children:
                        "Thank you for completing your secure online payment.",
                    }),
                    Object(w.jsx)("p", { children: " Have a great day! " }),
                    Object(w.jsx)("div", {
                      class: "py-10 text-center",
                      children: Object(w.jsx)("button", {
                        onClick: (window.location.href = "/home"),
                        class:
                          "px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3",
                        children: "Continue Shopping",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Te = function () {
          var e = Object(x.c)(function (e) {
              return e.MyOrder;
            }),
            t = e.orders,
            s = e.error,
            c = e.loading,
            a = Object(x.b)();
          return (
            console.log(s),
            Object(r.useEffect)(
              function () {
                s && (v.b.error(s), a(Se())),
                  a(
                    (function () {
                      var e = Object(o.a)(
                        i.a.mark(function e(t) {
                          var s, r;
                          return i.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t({ type: "MY_ORDER_REQUEST" }),
                                      (e.next = 4),
                                      b.a.get(
                                        "http://localhost:1234/v1/orders/my",
                                        { withCredentials: !0 }
                                      )
                                    );
                                  case 4:
                                    (s = e.sent),
                                      (r = s.data),
                                      t({
                                        type: "MY_ORDER_SUCCESS",
                                        payload: r.orders,
                                      }),
                                      (e.next = 13);
                                    break;
                                  case 9:
                                    (e.prev = 9),
                                      (e.t0 = e.catch(0)),
                                      console.log(e.t0),
                                      t({
                                        type: "MY_ORDER_FAIL",
                                        payload: e.t0,
                                      });
                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  );
              },
              [a]
            ),
            Object(w.jsxs)(w.Fragment, {
              children: [
                Object(w.jsx)(A, {}),
                Object(w.jsxs)("div", {
                  className: "sm:px-6 w-full  md:mt-0 md:w-full  align-center ",
                  children: [
                    c
                      ? Object(w.jsx)(M, {})
                      : Object(w.jsx)("div", {
                          className:
                            "mt-20  bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10",
                          children: Object(w.jsx)("div", {
                            className: " overflow-x-auto",
                            children: Object(w.jsxs)("table", {
                              className: "w-full whitespace-nowrap",
                              children: [
                                Object(w.jsx)("thead", {
                                  className:
                                    "text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
                                  children: Object(w.jsxs)("tr", {
                                    children: [
                                      Object(w.jsx)("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "# Order id",
                                      }),
                                      Object(w.jsx)("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "Status",
                                      }),
                                      Object(w.jsx)("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "Amount",
                                      }),
                                      Object(w.jsx)("th", {
                                        scope: "col",
                                        className: " py-3",
                                        children: Object(w.jsx)("span", {
                                          className: "",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                Object(w.jsx)("tbody", {
                                  children:
                                    t && t.length > 0
                                      ? t &&
                                        t.map(function (e) {
                                          return Object(w.jsxs)("tr", {
                                            className:
                                              "h-16 border-b border-gray-100 rounded",
                                            children: [
                                              Object(w.jsxs)("td", {
                                                className: !0,
                                                children: [
                                                  Object(w.jsx)("div", {
                                                    className:
                                                      "flex items-center pl-5",
                                                    children: Object(w.jsxs)(
                                                      "p",
                                                      {
                                                        className:
                                                          "text-base font-medium leading-none text-gray-700 mr-2",
                                                        children: ["# ", e._id],
                                                      }
                                                    ),
                                                  }),
                                                  Object(w.jsxs)("p", {
                                                    className:
                                                      "mt-2 pl-5 text-sm font-sm leading-none text-gray-700 mr-2",
                                                    children: [
                                                      "Item - ",
                                                      e.orderItems.length,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              Object(w.jsx)("td", {
                                                className: "pl-5",
                                                children: Object(w.jsx)(
                                                  "span",
                                                  {
                                                    className:
                                                      "Processing" ===
                                                      e.orderStatus
                                                        ? "py-2 px-3 text-md focus:outline-none leading-none text-yellow-500 bg-yellow-100  rounded"
                                                        : "py-2 px-3 text-md focus:outline-none leading-none text-green-500 bg-green-100  rounded",
                                                    children: e.orderStatus,
                                                  }
                                                ),
                                              }),
                                              Object(w.jsx)("td", {
                                                className: "pl-5",
                                                children: Object(w.jsx)("div", {
                                                  className:
                                                    "flex items-center",
                                                  children: Object(w.jsxs)(
                                                    "p",
                                                    {
                                                      className:
                                                        "text-sm leading-none text-gray-600 ml-2",
                                                      children: [
                                                        "$ ",
                                                        e.totalPrice,
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              }),
                                              Object(w.jsx)("td", {
                                                className: "",
                                                children: Object(w.jsx)(j.b, {
                                                  to: "/v1/order/".concat(
                                                    e._id
                                                  ),
                                                  children: Object(w.jsx)(
                                                    "button",
                                                    {
                                                      className:
                                                        "text-sm leading-none text-gray-600 py-2 px-3  rounded hover:bg-gray-200 focus:outline-none",
                                                      children: Object(w.jsxs)(
                                                        "svg",
                                                        {
                                                          xmlns:
                                                            "http://www.w3.org/2000/svg",
                                                          className:
                                                            "icon cursor-pointer icon-tabler icon-tabler-edit",
                                                          width: 20,
                                                          height: 20,
                                                          viewBox: "0 0 24 24",
                                                          strokeWidth: "1.5",
                                                          stroke:
                                                            "currentColor",
                                                          fill: "none",
                                                          strokeLinecap:
                                                            "round",
                                                          strokeLinejoin:
                                                            "round",
                                                          children: [
                                                            Object(w.jsx)(
                                                              "path",
                                                              {
                                                                stroke: "none",
                                                                d: "M0 0h24v24H0z",
                                                              }
                                                            ),
                                                            Object(w.jsx)(
                                                              "path",
                                                              {
                                                                d: "M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3",
                                                              }
                                                            ),
                                                            Object(w.jsx)(
                                                              "path",
                                                              {
                                                                d: "M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3",
                                                              }
                                                            ),
                                                            Object(w.jsx)(
                                                              "line",
                                                              {
                                                                x1: 16,
                                                                y1: 5,
                                                                x2: 19,
                                                                y2: 8,
                                                              }
                                                            ),
                                                          ],
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              }),
                                            ],
                                          });
                                        })
                                      : Object(w.jsx)("div", {
                                          class: "ml-24",
                                          children: Object(w.jsx)("div", {
                                            class:
                                              "m-4 h-10 p-4    bg-white flex justify-center content-center flex-wrap",
                                            children: Object(w.jsx)("p", {
                                              class:
                                                "font-sans text-gray-900 text-2xl ",
                                              children: "Order Not Found",
                                            }),
                                          }),
                                        }),
                                }),
                              ],
                            }),
                          }),
                        }),
                    Object(w.jsx)(v.a, {}),
                  ],
                }),
              ],
            })
          );
        },
        Le = function () {
          var e = Object(d.i)().id,
            t = Object(x.b)(),
            s = Object(x.c)(function (e) {
              return e.orderDetail;
            }),
            c = s.error,
            a = s.loading,
            n = s.order;
          return (
            console.log(n),
            Object(r.useEffect)(
              function () {
                c && (v.b.error(c), t(Se())), t(Ne(e));
              },
              [c, t, e]
            ),
            Object(w.jsxs)(w.Fragment, {
              children: [
                Object(w.jsx)(A, {}),
                a
                  ? Object(w.jsx)(M, {})
                  : Object(w.jsxs)("div", {
                      className: "bg-gray-100 h-screen ",
                      children: [
                        Object(w.jsxs)("p", {
                          className:
                            "pt-24 px-5 text-2xl font-medium leading-none text-gray-700 mr-2",
                          children: ["Order #", n && n._id],
                        }),
                        Object(w.jsxs)("div", {
                          className:
                            " pt-8 flex flex-wrap sm:flex-no-wrap items-center justify-between w-full container",
                          children: [
                            Object(w.jsxs)("div", {
                              className:
                                "w-full py-1 sm:w-1/3 h-44 rounded-t sm:rounded-l sm:rounded-t-none border-r bg-white dark:bg-gray-800",
                              children: [
                                Object(w.jsx)("p", {
                                  className:
                                    "py-2 px-5 text-md font-bold border-b leading-none text-gray-900 mr-2",
                                  children: "Address",
                                }),
                                Object(w.jsx)("p", {
                                  className:
                                    "py-2 px-5 text-base font-sm leading-none text-gray-700 mr-2",
                                  children: n.user && n.user.name,
                                }),
                                Object(w.jsx)("p", {
                                  className:
                                    "py-2 px-5 text-base font-sm leading-none text-gray-700 mr-2",
                                  children: n.user && n.user.email,
                                }),
                                Object(w.jsx)("p", {
                                  className:
                                    "py-2 px-5 text-base font-sm leading-none text-gray-700 mr-2",
                                  children:
                                    n.shippingInfo && n.shippingInfo.phone,
                                }),
                                Object(w.jsx)("p", {
                                  className:
                                    "py-2 px-5 text-base font-sm leading-none text-gray-700 mr-2",
                                  children:
                                    n.shippingInfo &&
                                    " "
                                      .concat(n.shippingInfo.address, ",")
                                      .concat(
                                        n.shippingInfo.city,
                                        ",\n                "
                                      )
                                      .concat(n.shippingInfo.country),
                                }),
                              ],
                            }),
                            Object(w.jsxs)("div", {
                              className:
                                "w-full py-1 sm:w-1/3 h-44  bg-white dark:bg-gray-800 border-r",
                              children: [
                                Object(w.jsx)("p", {
                                  className:
                                    "py-2 px-5 text-md font-bold border-b leading-none text-gray-900 mr-2",
                                  children: "Payment",
                                }),
                                Object(w.jsx)("p", {
                                  className:
                                    "py-2 px-5  font-sm leading-none  mr-2",
                                  children:
                                    n.paymentInfo &&
                                    "succeeded" === n.paymentInfo.status
                                      ? Object(w.jsx)("p", {
                                          className:
                                            "text-green-700 text-xl font-bold",
                                          children: "Payment Successful",
                                        })
                                      : Object(w.jsx)("p", {
                                          className:
                                            "text-red-700 text-xl font-bold",
                                          children: "Payment Unsuccessful",
                                        }),
                                }),
                                Object(w.jsxs)("p", {
                                  className:
                                    "font-semibold py-2 px-5 text-base font-sm leading-none text-gray-700 mr-2",
                                  children: [
                                    "$ ",
                                    n.totalPrice && n.totalPrice,
                                  ],
                                }),
                              ],
                            }),
                            Object(w.jsxs)("div", {
                              className:
                                "w-full py-1 sm:w-1/3 h-44 rounded-b sm:rounded-b-none  bg-white dark:bg-gray-800",
                              children: [
                                Object(w.jsx)("p", {
                                  className:
                                    "py-2 px-5 text-md font-bold border-b leading-none text-gray-900 mr-2",
                                  children: "Order Status",
                                }),
                                Object(w.jsx)("p", {
                                  className:
                                    "py-2 px-5  font-sm leading-none  mr-2",
                                  children:
                                    n && "Delivered" === n.orderStatus
                                      ? Object(w.jsx)("p", {
                                          className:
                                            "text-green-700 text-xl font-bold",
                                          children:
                                            "Your order have already delivered",
                                        })
                                      : Object(w.jsxs)("p", {
                                          className:
                                            "text-gray-900 text-xl font-",
                                          children: [
                                            "Order is ",
                                            Object(w.jsx)("span", {
                                              className: "underline",
                                              children: n && n.orderStatus,
                                            }),
                                            " for delivery",
                                          ],
                                        }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(w.jsx)("div", {
                          className:
                            " mt-4 flex items-center justify-between w-full container",
                          children: Object(w.jsx)("div", {
                            className:
                              "flex flex-col px-4 md-px-0  w-full items-center lg:items-center rounded bg-white ",
                            children: Object(w.jsx)("div", {
                              className:
                                "justify-betweenw-full lg:w-2/3 h-64 dark:bg-gray-800",
                              children:
                                n.orderItems &&
                                n.orderItems.map(function (e) {
                                  return Object(w.jsxs)("div", {
                                    class:
                                      "flex justify-between items-center mt-2 pt-6 ",
                                    children: [
                                      Object(w.jsxs)("div", {
                                        class: "flex items-center",
                                        children: [
                                          Object(w.jsx)("img", {
                                            src: e.image,
                                            width: "60",
                                            class: "rounded mr-4",
                                          }),
                                          Object(w.jsxs)("div", {
                                            class: "flex flex-col mr-10",
                                            children: [
                                              " ",
                                              Object(w.jsx)("span", {
                                                class: "md:text-md font-medium",
                                                children: e.name,
                                              }),
                                              " ",
                                            ],
                                          }),
                                        ],
                                      }),
                                      Object(w.jsx)("div", {
                                        class:
                                          "flex justify-center items-center",
                                        children: Object(w.jsx)("div", {
                                          class: "pr-8 ",
                                          children: Object(w.jsxs)("span", {
                                            class: " font-medium",
                                            children: [
                                              "$",
                                              e.price,
                                              " x ",
                                              e.quantity,
                                              " =",
                                              " ",
                                              e.price * e.quantity,
                                              " ",
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  });
                                }),
                            }),
                          }),
                        }),
                      ],
                    }),
              ],
            })
          );
        },
        _e = (s(142), s(84)),
        De = function () {
          var e = Object(x.b)(),
            t = Object(x.c)(function (e) {
              return e.ProductsData;
            }),
            s = t.productCount,
            c =
              (t.products,
              Object(x.c)(function (e) {
                return e.allOrder;
              })),
            a = c.totalAmount,
            n = c.totalOrder,
            l = c.orders,
            i = Object(x.c)(function (e) {
              return e.allUserInfo;
            }),
            o = i.users;
          console.log(l),
            Object(r.useEffect)(
              function () {
                e(D()), e(Ce()), e(h());
              },
              [e]
            );
          var d = {
            labels: ["Users", "Products", "Income", "Orders"],
            datasets: [
              {
                label: "Rainfall",
                backgroundColor: ["#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
                hoverBackgroundColor: [
                  "#4B5000",
                  "#175000",
                  "#003350",
                  "#35014F",
                ],
                data: [o.length, s, a, n],
              },
            ],
          };
          return Object(w.jsx)("div", {
            class: "bg-gray-100 dark:bg-gray-800 h-screen   overflow-hidden ",
            children: Object(w.jsxs)("div", {
              class: "md:flex items-start justify-between",
              children: [
                Object(w.jsx)("div", {
                  class: " md:w-2/12 md:pr-12   ",
                  children: Object(w.jsx)(le, {}),
                }),
                Object(w.jsx)("div", {
                  class:
                    "  w-full md:w-10/12 ml-0 mt-mmt1 md:mt-20 md:ml-8 md:space-y-4  ",
                  children: Object(w.jsx)("div", {
                    class: "overflow-auto h-screen ",
                    children: Object(w.jsxs)("div", {
                      id: "main-content",
                      class: "h-full w-full bg-gray-50  overflow-y-auto ",
                      children: [
                        Object(w.jsxs)("div", {
                          class:
                            "mt-4 mb-4 w-full grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-2",
                          children: [
                            Object(w.jsxs)("div", {
                              class:
                                "flex items-center px-5 py-6 shadow-sm rounded-md bg-white",
                              children: [
                                Object(w.jsx)("div", {
                                  class:
                                    "p-3 rounded-full bg-mainBaseColor bg-opacity-75",
                                  children: Object(w.jsxs)("svg", {
                                    class: "h-8 w-8 text-white",
                                    viewBox: "0 0 28 30",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      Object(w.jsx)("path", {
                                        d: "M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z",
                                        fill: "currentColor",
                                      }),
                                      Object(w.jsx)("path", {
                                        d: "M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z",
                                        fill: "currentColor",
                                      }),
                                      Object(w.jsx)("path", {
                                        d: "M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z",
                                        fill: "currentColor",
                                      }),
                                      Object(w.jsx)("path", {
                                        d: "M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z",
                                        fill: "currentColor",
                                      }),
                                      Object(w.jsx)("path", {
                                        d: "M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z",
                                        fill: "currentColor",
                                      }),
                                      Object(w.jsx)("path", {
                                        d: "M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z",
                                        fill: "currentColor",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(w.jsxs)("div", {
                                  class: "mx-5",
                                  children: [
                                    Object(w.jsx)("h4", {
                                      class:
                                        "text-2xl sm:text-3xl leading-none font-bold text-gray-900",
                                      children: o && o.length,
                                    }),
                                    Object(w.jsx)("div", {
                                      class: "text-gray-500",
                                      children: " Users",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(w.jsxs)("div", {
                              class:
                                "flex items-center px-5 py-6 shadow-sm rounded-md bg-white",
                              children: [
                                Object(w.jsx)("div", {
                                  class:
                                    "p-3 rounded-full bg-mainBaseColor bg-opacity-75",
                                  children: Object(w.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-8 w-8",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    "stroke-width": "2",
                                    color: "white",
                                    children: Object(w.jsx)("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                                    }),
                                  }),
                                }),
                                Object(w.jsxs)("div", {
                                  class: "mx-5",
                                  children: [
                                    Object(w.jsx)("h4", {
                                      class:
                                        "text-2xl sm:text-3xl leading-none font-bold text-gray-900",
                                      children: s && s,
                                    }),
                                    Object(w.jsx)("div", {
                                      class: "text-gray-500",
                                      children: " Products",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(w.jsxs)("div", {
                              class:
                                "flex items-center px-5 py-6 shadow-sm rounded-md bg-white",
                              children: [
                                Object(w.jsx)("div", {
                                  class:
                                    "p-3 rounded-full bg-mainBaseColor bg-opacity-75",
                                  children: Object(w.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-8 w-8",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    "stroke-width": "2",
                                    color: "white",
                                    children: Object(w.jsx)("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      d: "M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z",
                                    }),
                                  }),
                                }),
                                Object(w.jsxs)("div", {
                                  class: "mx-5",
                                  children: [
                                    Object(w.jsx)("h4", {
                                      class:
                                        "text-2xl sm:text-3xl leading-none font-bold text-gray-900",
                                      children: a && a,
                                    }),
                                    Object(w.jsx)("div", {
                                      class: "text-gray-500",
                                      children: " Income",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(w.jsxs)("div", {
                              class:
                                "flex items-center px-5 py-6 shadow-sm rounded-md bg-white",
                              children: [
                                Object(w.jsx)("div", {
                                  class:
                                    "p-3 rounded-full bg-mainBaseColor bg-opacity-75",
                                  children: Object(w.jsxs)("svg", {
                                    class: "h-8 w-8 text-white",
                                    viewBox: "0 0 28 28",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      Object(w.jsx)("path", {
                                        d: "M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z",
                                        fill: "currentColor",
                                      }),
                                      Object(w.jsx)("path", {
                                        d: "M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z",
                                        fill: "currentColor",
                                      }),
                                      Object(w.jsx)("path", {
                                        d: "M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z",
                                        fill: "currentColor",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(w.jsxs)("div", {
                                  class: "mx-5",
                                  children: [
                                    Object(w.jsx)("h4", {
                                      class:
                                        "text-2xl sm:text-3xl leading-none font-bold text-gray-900",
                                      children: n && n,
                                    }),
                                    Object(w.jsx)("div", {
                                      class: "text-gray-500",
                                      children: " Orders",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(w.jsxs)("div", {
                          class:
                            "w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 ",
                          children: [
                            Object(w.jsxs)("div", {
                              class:
                                "bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  ",
                              children: [
                                Object(w.jsxs)("div", {
                                  class:
                                    "mb-4 flex items-center justify-between",
                                  children: [
                                    Object(w.jsxs)("div", {
                                      children: [
                                        Object(w.jsx)("h3", {
                                          class:
                                            "text-xl font-bold text-gray-900 mb-2",
                                          children: "Latest Transactions",
                                        }),
                                        Object(w.jsx)("span", {
                                          class:
                                            "text-base font-normal text-gray-500",
                                          children:
                                            "This is a list of latest transactions",
                                        }),
                                      ],
                                    }),
                                    Object(w.jsx)("div", {
                                      class: "flex-shrink-0",
                                      children: Object(w.jsx)("a", {
                                        href: "#",
                                        class:
                                          "text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2",
                                        children: "View all",
                                      }),
                                    }),
                                  ],
                                }),
                                Object(w.jsx)("div", {
                                  class: "flex flex-col mt-8",
                                  children: Object(w.jsx)("div", {
                                    class: "overflow-y-auto  rounded-lg",
                                    children: Object(w.jsx)("div", {
                                      class:
                                        "align-middle inline-block min-w-full max-h-96 ",
                                      children: Object(w.jsx)("div", {
                                        class:
                                          "shadow overflow-hidden sm:rounded-lg",
                                        children: Object(w.jsxs)("table", {
                                          class:
                                            "min-w-full divide-y divide-gray-200",
                                          children: [
                                            Object(w.jsx)("thead", {
                                              class: "bg-gray-50",
                                              children: Object(w.jsxs)("tr", {
                                                children: [
                                                  Object(w.jsx)("th", {
                                                    scope: "col",
                                                    class:
                                                      "p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Transaction id",
                                                  }),
                                                  Object(w.jsx)("th", {
                                                    scope: "col",
                                                    class:
                                                      "p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Date & Time",
                                                  }),
                                                  Object(w.jsx)("th", {
                                                    scope: "col",
                                                    class:
                                                      "p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Amount",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            Object(w.jsx)("tbody", {
                                              class: "bg-white",
                                              children:
                                                l &&
                                                l.map(function (e) {
                                                  return Object(w.jsxs)("tr", {
                                                    children: [
                                                      Object(w.jsxs)("td", {
                                                        class:
                                                          "p-3 whitespace-nowrap text-xs font-normal text-gray-900",
                                                        children: [
                                                          e.paymentInfo.id,
                                                          Object(w.jsx)(
                                                            "span",
                                                            {
                                                              class:
                                                                "font-semibold bg-green-100 text-green-700 rounded-full x-2",
                                                              children:
                                                                e.paymentInfo
                                                                  .status,
                                                            }
                                                          ),
                                                        ],
                                                      }),
                                                      Object(w.jsx)("td", {
                                                        class:
                                                          "p-3 whitespace-nowrap text-sm font-normal text-gray-500",
                                                        children: String(
                                                          e.createdAt
                                                        ).substr(0, 10),
                                                      }),
                                                      Object(w.jsxs)("td", {
                                                        class:
                                                          "p-3 whitespace-nowrap text-sm font-semibold text-gray-900",
                                                        children: [
                                                          "TK. ",
                                                          e.totalPrice,
                                                        ],
                                                      }),
                                                    ],
                                                  });
                                                }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(w.jsx)("div", {
                              class:
                                "bg-white shadow rounded-lg p-4 sm:p-6 xl:p- 2xl:col-span-2 max-h-96",
                              children: Object(w.jsx)("div", {
                                class: "flex items-center justify-between mb-4",
                                children: Object(w.jsx)("div", {
                                  class:
                                    "flex items-center justify-start flex-1 text-green-500 text-base font-bold",
                                  children: Object(w.jsx)(_e.a, {
                                    className: "max-h-80",
                                    data: d,
                                    options: {
                                      title: {
                                        display: !0,
                                        text: "Average Rainfall per month",
                                        fontSize: 20,
                                      },
                                      legend: {
                                        display: !0,
                                        position: "right",
                                      },
                                    },
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        Object(w.jsxs)("footer", {
                          class:
                            "bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4",
                          children: [
                            Object(w.jsxs)("ul", {
                              class: "flex items-center flex-wrap mb-6 md:mb-0",
                              children: [
                                Object(w.jsx)("li", {
                                  children: Object(w.jsx)("a", {
                                    href: "#",
                                    class:
                                      "text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6",
                                    children: "Terms and conditions",
                                  }),
                                }),
                                Object(w.jsx)("li", {
                                  children: Object(w.jsx)("a", {
                                    href: "#",
                                    class:
                                      "text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6",
                                    children: "Privacy Policy",
                                  }),
                                }),
                                Object(w.jsx)("li", {
                                  children: Object(w.jsx)("a", {
                                    href: "#",
                                    class:
                                      "text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6",
                                    children: "Licensing",
                                  }),
                                }),
                                Object(w.jsx)("li", {
                                  children: Object(w.jsx)("a", {
                                    href: "#",
                                    class:
                                      "text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6",
                                    children: "Cookie Policy",
                                  }),
                                }),
                                Object(w.jsx)("li", {
                                  children: Object(w.jsx)("a", {
                                    href: "#",
                                    class:
                                      "text-sm font-normal text-gray-500 hover:underline",
                                    children: "Contact",
                                  }),
                                }),
                              ],
                            }),
                            Object(w.jsxs)("div", {
                              class: "flex sm:justify-center space-x-6",
                              children: [
                                Object(w.jsx)("a", {
                                  href: "#",
                                  class: "text-gray-500 hover:text-gray-900",
                                  children: Object(w.jsx)("svg", {
                                    class: "h-5 w-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: Object(w.jsx)("path", {
                                      "fill-rule": "evenodd",
                                      d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                                      "clip-rule": "evenodd",
                                    }),
                                  }),
                                }),
                                Object(w.jsx)("a", {
                                  href: "#",
                                  class: "text-gray-500 hover:text-gray-900",
                                  children: Object(w.jsx)("svg", {
                                    class: "h-5 w-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: Object(w.jsx)("path", {
                                      "fill-rule": "evenodd",
                                      d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                                      "clip-rule": "evenodd",
                                    }),
                                  }),
                                }),
                                Object(w.jsx)("a", {
                                  href: "#",
                                  class: "text-gray-500 hover:text-gray-900",
                                  children: Object(w.jsx)("svg", {
                                    class: "h-5 w-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: Object(w.jsx)("path", {
                                      d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                                    }),
                                  }),
                                }),
                                Object(w.jsx)("a", {
                                  href: "#",
                                  class: "text-gray-500 hover:text-gray-900",
                                  children: Object(w.jsx)("svg", {
                                    class: "h-5 w-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: Object(w.jsx)("path", {
                                      "fill-rule": "evenodd",
                                      d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                                      "clip-rule": "evenodd",
                                    }),
                                  }),
                                }),
                                Object(w.jsx)("a", {
                                  href: "#",
                                  class: "text-gray-500 hover:text-gray-900",
                                  children: Object(w.jsx)("svg", {
                                    class: "h-5 w-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: Object(w.jsx)("path", {
                                      "fill-rule": "evenodd",
                                      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
                                      "clip-rule": "evenodd",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(w.jsxs)("p", {
                          class: "text-center text-sm text-gray-500 my-10",
                          children: [
                            "\xa9 2019-2021",
                            " ",
                            Object(w.jsx)("a", {
                              href: "https://themesberg.com",
                              class: "hover:underline",
                              target: "_blank",
                              children: "Themesberg",
                            }),
                            ". All rights reserved.",
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Ie = function () {
          Object(Y.a)().handleSubmit;
          var e = Object(x.b)(),
            t = Object(r.useState)(""),
            s = Object(y.a)(t, 2),
            c =
              (s[0],
              s[1],
              Object(x.c)(function (e) {
                return e.allOrder;
              })),
            a = c.loading,
            n = c.error,
            l = c.orders,
            d = Object(x.c)(function (e) {
              return e.orders;
            }),
            u = d.error,
            p = d.isDeleted,
            m = Object(x.c)(function (e) {
              return e.orders;
            }),
            h = m.error,
            f = m.isUpdated,
            O = function (t) {
              ne.a
                .fire({
                  title: "Do you want to delete ?",
                  showDenyButton: !0,
                  confirmButtonText: "Delete",
                  denyButtonText: "Don't Delete",
                })
                .then(function (s) {
                  s.isConfirmed &&
                    e(
                      (function (e) {
                        return (function () {
                          var t = Object(o.a)(
                            i.a.mark(function t(s) {
                              var r, c;
                              return i.a.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.prev = 0),
                                          s({ type: "DELETE_ORDER_REQUEST" }),
                                          (t.next = 4),
                                          b.a.delete(
                                            "http://localhost:1234/v1/order/".concat(
                                              e
                                            ),
                                            { withCredentials: !0 }
                                          )
                                        );
                                      case 4:
                                        (r = t.sent),
                                          (c = r.data),
                                          s({
                                            type: "DELETE_ORDER_SUCCESS",
                                            payload: c.success,
                                          }),
                                          (t.next = 12);
                                        break;
                                      case 9:
                                        (t.prev = 9),
                                          (t.t0 = t.catch(0)),
                                          s({
                                            type: "DELETE_ORDER_FAIL",
                                            payload: t.t0.response.data.msg,
                                          });
                                      case 12:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                null,
                                [[0, 9]]
                              );
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })();
                      })(t)
                    );
                });
            };
          return (
            Object(r.useEffect)(
              function () {
                e(Ce()),
                  n && (ce.a.error(n), e(Se())),
                  u && (ce.a.error(u), e(Se())),
                  p && e({ type: "DELETE_ORDER_RESET" }),
                  h && (ce.a.error(h), e(Se())),
                  f &&
                    (ce.a.success("order updated successfully"),
                    e({ type: "UPDATE_ORDER_RESET" }));
              },
              [e, u, p, n]
            ),
            Object(w.jsx)("div", {
              children: Object(w.jsx)("main", {
                className:
                  "bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden ",
                children: Object(w.jsxs)("div", {
                  className: "md:flex items-start justify-between",
                  children: [
                    Object(w.jsx)("div", {
                      className: " md:w-2/12 md:pr-12   ",
                      children: Object(w.jsx)(le, {}),
                    }),
                    Object(w.jsx)("div", {
                      className:
                        "  w-full  md:px-6 md:ml-4 mt-mmt2 md:mb-20 md:mt-24 md:space-y-4  ",
                      children: Object(w.jsx)("div", {
                        className:
                          "overflow-auto h-screen  mt-20 pt-16  pb-4 md:mt-0 md:pt-0 md:pb-4 px-1",
                        children: Object(w.jsx)("div", {
                          className:
                            " overflow-x-auto  shadow-md sm:rounded-lg",
                          children: Object(w.jsxs)("table", {
                            className:
                              "w-full text-sm text-left text-gray-500 dark:text-gray-400  ",
                            children: [
                              Object(w.jsx)("thead", {
                                className:
                                  "text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400",
                                children: Object(w.jsxs)("tr", {
                                  children: [
                                    Object(w.jsx)("th", {
                                      scope: "col",
                                      className: "px-6 py-3",
                                      children: "Order id",
                                    }),
                                    Object(w.jsx)("th", {
                                      scope: "col",
                                      className: "px-6 py-3",
                                      children: "Status",
                                    }),
                                    Object(w.jsx)("th", {
                                      scope: "col",
                                      className: "px-6 py-3",
                                      children: "Item Qty",
                                    }),
                                    Object(w.jsx)("th", {
                                      scope: "col",
                                      className: "px-6 py-3 text-center",
                                      children: "Amount",
                                    }),
                                    Object(w.jsx)("th", {
                                      scope: "col",
                                      className: " py-3",
                                      children: Object(w.jsx)("span", {
                                        className: "",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              Object(w.jsx)("tbody", {
                                children: a
                                  ? Object(w.jsxs)("div", {
                                      className: "animate-pulse",
                                      children: [
                                        Object(w.jsx)("div", {
                                          className:
                                            "h-4 bg-gray-200 mt-3 mb-6 rounded",
                                        }),
                                        Object(w.jsx)("div", {
                                          className:
                                            "h-4 bg-gray-300 mb-6 rounded",
                                        }),
                                        Object(w.jsx)("div", {
                                          className:
                                            "h-4 bg-gray-200 mb-6 rounded",
                                        }),
                                        Object(w.jsx)("div", {
                                          className:
                                            "h-4 bg-gray-300 mb-6 rounded",
                                        }),
                                        Object(w.jsx)("div", {
                                          className:
                                            "h-4 bg-gray-200 mb-6 rounded",
                                        }),
                                      ],
                                    })
                                  : Object(w.jsx)(w.Fragment, {
                                      children:
                                        l &&
                                        l.map(function (e, t) {
                                          return Object(w.jsxs)(
                                            "tr",
                                            {
                                              className:
                                                "bg-white border-b dark:bg-gray-800 dark:border-gray-700",
                                              children: [
                                                Object(w.jsx)("th", {
                                                  scope: "row",
                                                  className:
                                                    "px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",
                                                  children: e && e._id,
                                                }),
                                                Object(w.jsxs)("td", {
                                                  className: "px-6 py-4",
                                                  children: [
                                                    " ",
                                                    e && e.orderStatus,
                                                  ],
                                                }),
                                                Object(w.jsxs)("td", {
                                                  className: "px-6 py-4",
                                                  children: [
                                                    " ",
                                                    e && e.orderItems.length,
                                                  ],
                                                }),
                                                Object(w.jsx)("td", {
                                                  className: "px-6 py-4",
                                                  children: e && e.totalPrice,
                                                }),
                                                Object(w.jsxs)("td", {
                                                  className:
                                                    "px- py-4 text-left",
                                                  children: [
                                                    e &&
                                                    "Delivered" ===
                                                      e.orderStatus
                                                      ? " "
                                                      : Object(w.jsx)(j.b, {
                                                          to: "/orderupdate/".concat(
                                                            e && e._id
                                                          ),
                                                          children: Object(
                                                            w.jsx
                                                          )("button", {
                                                            className:
                                                              " pr-4 font-sm text-gray-600  hover:underline",
                                                            children: Object(
                                                              w.jsx
                                                            )("svg", {
                                                              xmlns:
                                                                "http://www.w3.org/2000/svg",
                                                              className:
                                                                "h-6 w-6",
                                                              fill: "none",
                                                              viewBox:
                                                                "0 0 24 24",
                                                              stroke:
                                                                "currentColor",
                                                              "stroke-width":
                                                                "2",
                                                              color:
                                                                "mainBaseColor",
                                                              children: Object(
                                                                w.jsx
                                                              )("path", {
                                                                "stroke-linecap":
                                                                  "round",
                                                                "stroke-linejoin":
                                                                  "round",
                                                                d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                    Object(w.jsx)("button", {
                                                      onClick: function () {
                                                        return O(e && e._id);
                                                      },
                                                      className:
                                                        "font-sm text-gray-600  hover:underline",
                                                      children: Object(w.jsx)(
                                                        "svg",
                                                        {
                                                          xmlns:
                                                            "http://www.w3.org/2000/svg",
                                                          className: "h-6 w-6",
                                                          fill: "none",
                                                          viewBox: "0 0 24 24",
                                                          stroke:
                                                            "currentColor",
                                                          "stroke-width": "2",
                                                          color: "red",
                                                          children: Object(
                                                            w.jsx
                                                          )("path", {
                                                            "stroke-linecap":
                                                              "round",
                                                            "stroke-linejoin":
                                                              "round",
                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            t
                                          );
                                        }),
                                    }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        Pe = function () {
          var e = Object(Y.a)().handleSubmit,
            t = Object(d.h)(),
            s = Object(x.b)(),
            c = Object(x.c)(function (e) {
              return e.addProduct;
            }),
            a = c.success,
            n = c.error,
            l = (c.loading, Object(r.useState)(!1)),
            j = Object(y.a)(l, 2),
            u = j[0],
            p = j[1],
            m = Object(r.useState)(null),
            h = Object(y.a)(m, 2),
            f = h[0],
            O = h[1],
            g = Object(r.useState)({
              name: "",
              description: "",
              category: "",
              offer: 0,
              price: "",
              stock: 0,
            }),
            E = Object(y.a)(g, 2),
            C = E[0],
            N = E[1],
            S = function (e) {
              var t = Object(H.a)({}, C);
              (t[e.target.name] = e.target.value), N(t), console.log(t);
            },
            R = (function () {
              var e = Object(o.a)(
                i.a.mark(function e(t) {
                  var s;
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            p(!0),
                            (s = new FormData()).set(
                              "key",
                              "c9e7c4b6f1a9856f03990d5024785ae5"
                            ),
                            s.append("image", t.target.files[0]),
                            (e.next = 6),
                            b.a
                              .post("https://api.imgbb.com/1/upload", s)
                              .then(function (e) {
                                O(e.data.data.display_url),
                                  p(!1),
                                  console.log(e.data.data);
                              })
                              .catch(function (e) {
                                console.log(e);
                              })
                          );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          console.log(f);
          var A = (function () {
            var e = Object(o.a)(
              i.a.mark(function e(t) {
                var r;
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (r = {
                          name: C.name,
                          description: C.description,
                          category: C.category,
                          price: C.price,
                          stock: C.stock,
                          offer: C.offer,
                          image: { url: f },
                        }),
                          s(L(r));
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return (
            Object(r.useEffect)(
              function () {
                n && (v.c.error(n), console.log(n), s(q())),
                  a &&
                    (v.c.success("Product created successfully."),
                    s({ type: "NEW_PRODUCT_RESET" }),
                    N({
                      name: "",
                      description: "",
                      category: "",
                      offer: 0,
                      price: "",
                      stock: 0,
                    }),
                    O(null));
              },
              [s, n, a, t]
            ),
            Object(w.jsx)(w.Fragment, {
              children: Object(w.jsxs)("main", {
                class:
                  "bg-gray-50 dark:bg-gray-800  h-screen overflow relative",
                children: [
                  Object(w.jsxs)("div", {
                    class: "md:flex items-start justify-between",
                    children: [
                      Object(w.jsx)("div", {
                        class: " md:w-2/12 md:pr-12   ",
                        children: Object(w.jsx)(le, {}),
                      }),
                      Object(w.jsx)("div", {
                        class:
                          "md:10/12 flex flex-col w-full ml-0 md:ml-4 mt-mmt1 md:mt-0 md:p-4 md:space-y-4 ",
                        children: Object(w.jsx)("div", {
                          class:
                            " h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0",
                          children: Object(w.jsx)("div", {
                            class: "flex flex-col flex-wrap sm:flex-row ",
                            children: Object(w.jsx)("div", {
                              class: " relative w-auto pointer-events-none ",
                              children: Object(w.jsxs)("div", {
                                class:
                                  "md:px-12 md:pt-8 modal-content border-none  relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current",
                                children: [
                                  Object(w.jsx)("div", {
                                    class:
                                      " flex flex-shrink-0 items-center justify-between  border-b border-gray-200 rounded-t-md",
                                    children: Object(w.jsx)("h5", {
                                      class: "font-semibold text-lg  ",
                                      id: "exampleModalLabel",
                                      children: "Add Product",
                                    }),
                                  }),
                                  Object(w.jsxs)("form", {
                                    onSubmit: e(A),
                                    children: [
                                      Object(w.jsx)("div", {
                                        className: "md:space-y-2 ",
                                        children: Object(w.jsxs)("div", {
                                          className: "flex items-center py-6",
                                          children: [
                                            Object(w.jsx)("label", {
                                              className: "cursor-pointer ",
                                              children: Object(w.jsx)("input", {
                                                type: "file",
                                                required: !0,
                                                name: "image",
                                                onChange: R,
                                                className: "",
                                              }),
                                            }),
                                            u
                                              ? Object(w.jsx)("div", {
                                                  class:
                                                    " items-center justify-center",
                                                  children: Object(w.jsxs)(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      class:
                                                        "flex items-center rounded-lg bg-green px-4 py-2 text-green-800",
                                                      disabled: !0,
                                                      children: [
                                                        Object(w.jsxs)("svg", {
                                                          class:
                                                            "mr-3 h-5 w-5 animate-spin text-green-800",
                                                          xmlns:
                                                            "http://www.w3.org/2000/svg",
                                                          fill: "none",
                                                          viewBox: "0 0 24 24",
                                                          children: [
                                                            Object(w.jsx)(
                                                              "circle",
                                                              {
                                                                class:
                                                                  "opacity-25",
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                stroke:
                                                                  "currentColor",
                                                                strokeWidth:
                                                                  "4",
                                                              }
                                                            ),
                                                            Object(w.jsx)(
                                                              "path",
                                                              {
                                                                class:
                                                                  "opacity-75",
                                                                fill: "currentColor",
                                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                        Object(w.jsxs)("span", {
                                                          class: "font-medium",
                                                          children: [
                                                            " ",
                                                            "Take a deep breath... \ud83c\udf3c",
                                                          ],
                                                        }),
                                                      ],
                                                    }
                                                  ),
                                                })
                                              : Object(w.jsxs)("div", {
                                                  class:
                                                    "rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-full bg-white cursor-pointer h-28",
                                                  children: [
                                                    Object(w.jsx)("div", {
                                                      class:
                                                        "w-2/2  text-text1  justify-center",
                                                    }),
                                                    Object(w.jsx)("div", {
                                                      class: "lg:  w-full p-1",
                                                      children: Object(w.jsx)(
                                                        "img",
                                                        {
                                                          alt: "You will see your choosed pictures here",
                                                          src: f && f,
                                                          class:
                                                            "rounded-xl object-cover w-full h-full",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                          ],
                                        }),
                                      }),
                                      Object(w.jsxs)("div", {
                                        className:
                                          "md:flex flex-row md:space-x-4 w-full text-xs uppercase te",
                                        children: [
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "product name",
                                              }),
                                              Object(w.jsx)("input", {
                                                className:
                                                  "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                                required: !0,
                                                type: "text",
                                                name: "name",
                                                onChange: S,
                                                value: C.name,
                                                id: "integration_shop_name",
                                              }),
                                            ],
                                          }),
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "Category",
                                              }),
                                              Object(w.jsxs)("select", {
                                                className:
                                                  "w-full  rounded-xl border  text-base outline-none text-gray-700 py-2 px-1 leading-8 ",
                                                required: !0,
                                                name: "category",
                                                id: "integration_city_id",
                                                onChange: S,
                                                value: C.category,
                                                children: [
                                                  Object(w.jsx)("option", {
                                                    value: "",
                                                    children:
                                                      "Seleted Category...",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "electronics",
                                                    children: "Electronics",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "cloth",
                                                    children: "Cloth",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "books",
                                                    children: "Books",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "cosmetics",
                                                    children: "Cosmetics",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "footware",
                                                    children: "Footware",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "grocery_food",
                                                    children: "Grocery & Food",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "smartphone",
                                                    children: "SmartPhone",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      Object(w.jsxs)("div", {
                                        className:
                                          "md:flex flex-row md:space-x-4 w-full text-xs uppercase",
                                        children: [
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "Price",
                                              }),
                                              Object(w.jsx)("input", {
                                                className:
                                                  "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                                required: !0,
                                                type: "number",
                                                name: "price",
                                                value: C.price,
                                                onChange: S,
                                                id: "integration_shop_name",
                                              }),
                                            ],
                                          }),
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "Stock",
                                              }),
                                              Object(w.jsx)("input", {
                                                className:
                                                  "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                                required: !0,
                                                type: "number",
                                                name: "stock",
                                                value: C.stock,
                                                onChange: S,
                                                id: "integration_shop_name",
                                              }),
                                            ],
                                          }),
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "Offer Price",
                                              }),
                                              Object(w.jsx)("input", {
                                                className:
                                                  "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                                type: "number",
                                                name: "offer",
                                                value: C.offer,
                                                onChange: S,
                                                id: "integration_shop_name",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      Object(w.jsxs)("div", {
                                        className:
                                          "mb-3 space-y-2 w-full text-xs uppercase",
                                        children: [
                                          Object(w.jsx)("label", {
                                            className:
                                              "font-semibold text-allTextColor  text-sm",
                                            children: "Description",
                                          }),
                                          Object(w.jsx)("textarea", {
                                            className:
                                              "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                            required: !0,
                                            onChange: S,
                                            value: C.description,
                                            name: "description",
                                            id: "integration_shop_name",
                                          }),
                                        ],
                                      }),
                                      Object(w.jsx)("div", {
                                        class:
                                          " flex flex-shrink-0 flex-wrap items-center justify-end pb-8  ",
                                        children: Object(w.jsx)("button", {
                                          type: "submit",
                                          class:
                                            "px-6\r py-2.5\r bg-mainBaseColor\r text-white\r font-medium\r text-xs\r leading-tight\r uppercase\r rounded\r shadow-md\r transition\r duration-150\r ease-in-out\r ml-1",
                                          children: "Submit",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Object(w.jsx)(v.a, {}),
                ],
              }),
            })
          );
        },
        qe = function () {
          Object(Y.a)().handleSubmit;
          var e = Object(d.h)(),
            t = Object(d.i)().id,
            s = Object(x.b)(),
            c = Object(x.c)(function (e) {
              return e.ProductDetails.product;
            }),
            a = c.error,
            n = c.product,
            l = Object(x.c)(function (e) {
              return e.products;
            }),
            j = l.error,
            u = l.isUpdated;
          console.log(u);
          var p = Object(r.useState)(!1),
            m = Object(y.a)(p, 2),
            h = m[0],
            f = m[1],
            O = Object(r.useState)(null),
            g = Object(y.a)(O, 2),
            E = g[0],
            C = g[1],
            N = Object(r.useState)({
              name: "",
              description: "",
              category: "",
              offer: 0,
              price: "",
              stock: 0,
            }),
            S = Object(y.a)(N, 2),
            R = S[0],
            A = S[1],
            k = function (e) {
              var t = Object(H.a)({}, R);
              (t[e.target.name] = e.target.value), A(t), console.log(t);
            },
            U = (function () {
              var e = Object(o.a)(
                i.a.mark(function e(t) {
                  var s;
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            f(!0),
                            (s = new FormData()).set(
                              "key",
                              "c9e7c4b6f1a9856f03990d5024785ae5"
                            ),
                            s.append("image", t.target.files[0]),
                            (e.next = 6),
                            b.a
                              .post("https://api.imgbb.com/1/upload", s)
                              .then(function (e) {
                                C(e.data.data.display_url),
                                  f(!1),
                                  console.log(e.data.data);
                              })
                              .catch(function (e) {
                                console.log(e);
                              })
                          );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            T = (function () {
              var e = Object(o.a)(
                i.a.mark(function e(r) {
                  var c;
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (c = {
                            name: R.name || n.name,
                            description: R.description || n.description,
                            category: R.category || n.category,
                            price: R.price || n.price,
                            stock: R.stock || n.stock,
                            offer: R.offer || n.offer,
                            image: { url: E || n.image[0].url },
                          }),
                            console.log(c),
                            s(_(t, c));
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(r.useEffect)(
              function () {
                s(I(t)),
                  a && (v.c.error(a), s(q())),
                  j && (v.c.error(j), s(q())),
                  u &&
                    (v.c.success("Product updated successfully"),
                    s({ type: "UPDATE_PRODUCT_RESET" }),
                    e("/admin/products"));
              },
              [s, t, a, u, j]
            ),
            Object(w.jsxs)(w.Fragment, {
              children: [
                Object(w.jsx)("main", {
                  class:
                    "bg-gray-50 dark:bg-gray-800  h-screen overflow relative",
                  children: Object(w.jsxs)("div", {
                    class: "md:flex items-start justify-between",
                    children: [
                      Object(w.jsx)("div", {
                        class: " md:w-2/12 md:pr-12   ",
                        children: Object(w.jsx)(le, {}),
                      }),
                      Object(w.jsx)("div", {
                        class:
                          "md:10/12 flex flex-col w-full ml-0 md:ml-4 mt-mmt1 md:mt-0 md:p-4 md:space-y-4 ",
                        children: Object(w.jsx)("div", {
                          class:
                            " h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0",
                          children: Object(w.jsx)("div", {
                            class: "flex flex-col flex-wrap sm:flex-row ",
                            children: Object(w.jsx)("div", {
                              class: " relative w-auto pointer-events-none ",
                              children: Object(w.jsxs)("div", {
                                class:
                                  "md:px-12 md:pt-8 modal-content border-none  relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current",
                                children: [
                                  Object(w.jsx)("div", {
                                    class:
                                      " flex flex-shrink-0 items-center justify-between  border-b border-gray-200 rounded-t-md",
                                    children: Object(w.jsx)("h5", {
                                      class: "font-semibold text-lg  ",
                                      id: "exampleModalLabel",
                                      children: "Update Product",
                                    }),
                                  }),
                                  Object(w.jsxs)("div", {
                                    children: [
                                      Object(w.jsx)("div", {
                                        className: "md:space-y-2 ",
                                        children: Object(w.jsxs)("div", {
                                          className: "flex items-center py-6",
                                          children: [
                                            Object(w.jsx)("label", {
                                              className: "cursor-pointer ",
                                              children: Object(w.jsx)("input", {
                                                type: "file",
                                                name: "image",
                                                onChange: U,
                                                className: "",
                                              }),
                                            }),
                                            E
                                              ? Object(w.jsxs)(w.Fragment, {
                                                  children: [
                                                    h
                                                      ? Object(w.jsx)("div", {
                                                          class:
                                                            " items-center justify-center",
                                                          children: Object(
                                                            w.jsxs
                                                          )("button", {
                                                            type: "button",
                                                            class:
                                                              "flex items-center rounded-lg bg-green px-4 py-2 text-green-800",
                                                            disabled: !0,
                                                            children: [
                                                              Object(w.jsxs)(
                                                                "svg",
                                                                {
                                                                  class:
                                                                    "mr-3 h-5 w-5 animate-spin text-green-800",
                                                                  xmlns:
                                                                    "http://www.w3.org/2000/svg",
                                                                  fill: "none",
                                                                  viewBox:
                                                                    "0 0 24 24",
                                                                  children: [
                                                                    Object(
                                                                      w.jsx
                                                                    )(
                                                                      "circle",
                                                                      {
                                                                        class:
                                                                          "opacity-25",
                                                                        cx: "12",
                                                                        cy: "12",
                                                                        r: "10",
                                                                        stroke:
                                                                          "currentColor",
                                                                        strokeWidth:
                                                                          "4",
                                                                      }
                                                                    ),
                                                                    Object(
                                                                      w.jsx
                                                                    )("path", {
                                                                      class:
                                                                        "opacity-75",
                                                                      fill: "currentColor",
                                                                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                                    }),
                                                                  ],
                                                                }
                                                              ),
                                                              Object(w.jsxs)(
                                                                "span",
                                                                {
                                                                  class:
                                                                    "font-medium",
                                                                  children: [
                                                                    " ",
                                                                    "Take a deep breath... \ud83c\udf3c",
                                                                  ],
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        })
                                                      : Object(w.jsxs)("div", {
                                                          class:
                                                            "rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-full bg-white cursor-pointer h-28",
                                                          children: [
                                                            Object(w.jsx)(
                                                              "div",
                                                              {
                                                                class:
                                                                  "w-2/2  text-text1  justify-center",
                                                              }
                                                            ),
                                                            Object(w.jsx)(
                                                              "div",
                                                              {
                                                                class:
                                                                  "lg:  w-full p-1",
                                                                children:
                                                                  Object(w.jsx)(
                                                                    "img",
                                                                    {
                                                                      alt: "You will see your choosed pictures here",
                                                                      src:
                                                                        E && E,
                                                                      class:
                                                                        "rounded-xl object-cover w-full h-full",
                                                                    }
                                                                  ),
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                    " ",
                                                  ],
                                                })
                                              : Object(w.jsxs)("div", {
                                                  class:
                                                    "rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-full bg-white cursor-pointer h-28",
                                                  children: [
                                                    Object(w.jsx)("div", {
                                                      class:
                                                        "w-2/2  text-text1  justify-center",
                                                    }),
                                                    Object(w.jsx)("div", {
                                                      class: "lg:  w-full p-1",
                                                      children: Object(w.jsx)(
                                                        "img",
                                                        {
                                                          alt: "You will see your choosed pictures here",
                                                          src:
                                                            n && n.image[0].url,
                                                          class:
                                                            "rounded-xl object-cover w-full h-full",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                          ],
                                        }),
                                      }),
                                      Object(w.jsxs)("div", {
                                        className:
                                          "md:flex flex-row md:space-x-4 w-full text-xs uppercase te",
                                        children: [
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "product name",
                                              }),
                                              Object(w.jsx)("input", {
                                                className:
                                                  "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                                required: !0,
                                                type: "text",
                                                name: "name",
                                                onChange: k,
                                                defaultValue: n && n.name,
                                              }),
                                            ],
                                          }),
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "Category",
                                              }),
                                              Object(w.jsxs)("select", {
                                                className:
                                                  "w-full  rounded-xl border  text-base outline-none text-gray-700 py-2 px-1 leading-8 ",
                                                required: !0,
                                                name: "category",
                                                onChange: k,
                                                defaultValue: n && n.category,
                                                children: [
                                                  Object(w.jsx)("option", {
                                                    value: "",
                                                    children:
                                                      "Seleted Category...",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "electronics",
                                                    children: "Electronics",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "cloth",
                                                    children: "Cloth",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "books",
                                                    children: "Books",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "cosmetics",
                                                    children: "Cosmetics",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "footware",
                                                    children: "Footware",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "grocery&food",
                                                    children: "Grocery & Food",
                                                  }),
                                                  Object(w.jsx)("option", {
                                                    value: "smartPhone",
                                                    children: "SmartPhone",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      Object(w.jsxs)("div", {
                                        className:
                                          "md:flex flex-row md:space-x-4 w-full text-xs uppercase",
                                        children: [
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "Price",
                                              }),
                                              Object(w.jsx)("input", {
                                                className:
                                                  "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                                required: !0,
                                                type: "number",
                                                name: "price",
                                                onChange: k,
                                                defaultValue: n && n.price,
                                              }),
                                            ],
                                          }),
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "Stock",
                                              }),
                                              Object(w.jsx)("input", {
                                                className:
                                                  "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                                required: !0,
                                                type: "number",
                                                name: "stock",
                                                onChange: k,
                                                defaultValue: n && n.stock,
                                              }),
                                            ],
                                          }),
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "Offer Price",
                                              }),
                                              Object(w.jsx)("input", {
                                                className:
                                                  "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                                type: "number",
                                                name: "offer",
                                                onChange: k,
                                                defaultValue: n && n.offer,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      Object(w.jsxs)("div", {
                                        className:
                                          "mb-3 space-y-2 w-full text-xs uppercase",
                                        children: [
                                          Object(w.jsx)("label", {
                                            className:
                                              "font-semibold text-allTextColor  text-sm",
                                            children: "Description",
                                          }),
                                          Object(w.jsx)("textarea", {
                                            className:
                                              "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                            required: !0,
                                            onChange: k,
                                            defaultValue: n && n.description,
                                            name: "description",
                                          }),
                                        ],
                                      }),
                                      Object(w.jsx)("div", {
                                        class:
                                          " flex flex-shrink-0 flex-wrap items-center justify-end pb-8  ",
                                        children: Object(w.jsx)("button", {
                                          onClick: function () {
                                            return T();
                                          },
                                          type: "submit",
                                          class:
                                            "px-6\r py-2.5\r bg-mainBaseColor\r text-white\r font-medium\r text-xs\r leading-tight\r uppercase\r rounded\r shadow-md\r transition\r duration-150\r ease-in-out\r ml-1",
                                          children: "Update",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                Object(w.jsx)(v.a, {}),
              ],
            })
          );
        },
        Me = function () {
          var e = Object(d.h)(),
            t = Object(d.i)().id,
            s = Object(x.b)(),
            c = Object(r.useState)(""),
            a = Object(y.a)(c, 2),
            n = a[0],
            l = a[1],
            j = Object(x.c)(function (e) {
              return e.orderDetail;
            }),
            u = j.error,
            p = (j.loading, j.order);
          console.log(n);
          var m = Object(x.c)(function (e) {
              return e.orders;
            }),
            h = m.error,
            f = m.isUpdated,
            O = function (e) {
              s(
                (function (e, t) {
                  return (function () {
                    var s = Object(o.a)(
                      i.a.mark(function s(r) {
                        var c, a, n;
                        return i.a.wrap(
                          function (s) {
                            for (;;)
                              switch ((s.prev = s.next)) {
                                case 0:
                                  return (
                                    console.log(e, t),
                                    (s.prev = 1),
                                    r({ type: "UPDATE_ORDER_REQUEST" }),
                                    (c = {
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      withCredentials: !0,
                                    }),
                                    (s.next = 6),
                                    b.a.put(
                                      "http://localhost:1234/v1/orderstatus/".concat(
                                        e
                                      ),
                                      t,
                                      c
                                    )
                                  );
                                case 6:
                                  (a = s.sent),
                                    (n = a.data),
                                    r({
                                      type: "UPDATE_ORDER_SUCCESS",
                                      payload: n,
                                    }),
                                    (s.next = 14);
                                  break;
                                case 11:
                                  (s.prev = 11),
                                    (s.t0 = s.catch(1)),
                                    r({
                                      type: "UPDATE_ORDER_FAIL",
                                      payload: s.t0.response,
                                    });
                                case 14:
                                case "end":
                                  return s.stop();
                              }
                          },
                          s,
                          null,
                          [[1, 11]]
                        );
                      })
                    );
                    return function (e) {
                      return s.apply(this, arguments);
                    };
                  })();
                })(t, n)
              ),
                console.log(n);
            };
          return (
            Object(r.useEffect)(
              function () {
                u && (v.b.error(u), s(Se())),
                  h && (v.b.error(h), s(Se())),
                  f &&
                    (s({ type: "UPDATE_ORDER_RESET" }),
                    e("/admin/orders"),
                    v.b.success("Order status updated successfully")),
                  s(Ne(t));
              },
              [u, s, t, h, f]
            ),
            Object(w.jsxs)("main", {
              className:
                "bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden ",
              children: [
                Object(w.jsxs)("div", {
                  className: "md:flex users-start justify-between",
                  children: [
                    Object(w.jsx)("div", {
                      className: " md:w-2/12   ",
                      children: Object(w.jsx)(le, {}),
                    }),
                    Object(w.jsx)("div", {
                      className:
                        "p-2 md:w-1/2 w-full mt-24 mx-auto bg-white mb-60 rounded",
                      children: Object(w.jsxs)("div", {
                        className: "relative p-4",
                        children: [
                          Object(w.jsxs)("h1", {
                            children: [
                              "Update order status for",
                              " ",
                              Object(w.jsxs)("span", {
                                className: "font-bold",
                                children: [" #", p && p._id],
                              }),
                            ],
                          }),
                          Object(w.jsxs)("div", {
                            className: "  p-4",
                            children: [
                              Object(w.jsx)("label", {
                                htmlFor: "name",
                                className:
                                  "text-gray-800 text-sm font-bold leading-tight tracking-normal",
                              }),
                              Object(w.jsxs)("select", {
                                name: "status",
                                className:
                                  "mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border",
                                onChange: function (e) {
                                  var t = Object(H.a)({}, n);
                                  (t[e.target.name] = e.target.value),
                                    l(t),
                                    console.log(t);
                                },
                                children: [
                                  Object(w.jsx)("option", {
                                    value: "",
                                    children: " ---Select--- ",
                                  }),
                                  p &&
                                    "Processing" === p.orderStatus &&
                                    Object(w.jsx)("option", {
                                      value: "Shipped",
                                      children: "Shipped",
                                    }),
                                  p &&
                                    "Shipped" === p.orderStatus &&
                                    Object(w.jsx)("option", {
                                      value: "Delivered",
                                      children: "Delivered",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          Object(w.jsx)("div", {
                            className:
                              " flex flex-shrink-0 flex-wrap items-center justify-end pr-8 ",
                            children: Object(w.jsx)("button", {
                              disabled: "" === n,
                              onClick: function () {
                                return O();
                              },
                              type: "submit",
                              className:
                                "px-6\r py-2.5\r bg-mainBaseColor\r text-white\r font-medium\r text-xs\r leading-tight\r uppercase\r rounded\r shadow-md\r active:bg-blue-800 active:shadow-lg\r transition\r duration-150\r ease-in-out\r ml-1",
                              children: "update",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                Object(w.jsx)(v.a, {}),
              ],
            })
          );
        },
        Ve = function () {
          var e = Object(d.i)().id,
            t = Object(x.b)(),
            s = Object(x.c)(function (e) {
              return e.userDetails;
            }).user,
            c = Object(x.c)(function (e) {
              return e.updateUser;
            }),
            a = c.error,
            n = c.isUpdated,
            l = Object(r.useState)(!1),
            j = Object(y.a)(l, 2),
            u = j[0],
            p = j[1],
            m = Object(r.useState)(null),
            h = Object(y.a)(m, 2),
            O = h[0],
            g = h[1],
            E = Object(r.useState)({
              name: "",
              email: "",
              role: "",
              password: "",
            }),
            C = Object(y.a)(E, 2),
            N = C[0],
            S = C[1],
            R = function (e) {
              var t = Object(H.a)({}, N);
              (t[e.target.name] = e.target.value), S(t), console.log(t);
            },
            A = (function () {
              var e = Object(o.a)(
                i.a.mark(function e(t) {
                  var s;
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            p(!0),
                            (s = new FormData()).set(
                              "key",
                              "c9e7c4b6f1a9856f03990d5024785ae5"
                            ),
                            s.append("image", t.target.files[0]),
                            (e.next = 6),
                            b.a
                              .post("https://api.imgbb.com/1/upload", s)
                              .then(function (e) {
                                g(e.data.data.display_url),
                                  p(!1),
                                  console.log(e.data.data);
                              })
                              .catch(function (e) {
                                console.log(e);
                              })
                          );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            k = (function () {
              var r = Object(o.a)(
                i.a.mark(function r(c) {
                  var a;
                  return i.a.wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          (a = {
                            name: N.name || s.name,
                            email: N.email || s.email,
                            role: N.role || s.role,
                            password: N.password || s.password,
                          }),
                            console.log(a),
                            t(f(e, a));
                        case 3:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              );
              return function (e) {
                return r.apply(this, arguments);
              };
            })();
          return (
            Object(r.useEffect)(
              function () {
                t(
                  (function (e) {
                    return (function () {
                      var t = Object(o.a)(
                        i.a.mark(function t(s) {
                          var r, c;
                          return i.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      s({ type: "USER_DETAIL_REQUEST" }),
                                      (t.next = 4),
                                      b.a.get(
                                        "http://localhost:1234/v1/user/".concat(
                                          e
                                        ),
                                        { withCredentials: !0 }
                                      )
                                    );
                                  case 4:
                                    (r = t.sent),
                                      (c = r.data),
                                      s({
                                        type: "USER_DETAIL_SUCCESS",
                                        payload: c,
                                      }),
                                      (t.next = 12);
                                    break;
                                  case 9:
                                    (t.prev = 9),
                                      (t.t0 = t.catch(0)),
                                      s({
                                        type: "USER_DETAIL_FAIL",
                                        payload: t.t0.response,
                                      });
                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })();
                  })(e)
                ),
                  a && (v.c.error(a), t(q()), t({ type: "UPDATE_USER_RESET" })),
                  n &&
                    (v.c.success("User information updated successfully"),
                    t({ type: "UPDATE_USER_RESET" }));
              },
              [t, e, a, n]
            ),
            Object(w.jsxs)(w.Fragment, {
              children: [
                Object(w.jsx)("main", {
                  class:
                    "bg-gray-50 dark:bg-gray-800  h-screen overflow relative",
                  children: Object(w.jsxs)("div", {
                    class: "md:flex items-start justify-between",
                    children: [
                      Object(w.jsx)("div", {
                        class: " md:w-2/12 md:pr-12   ",
                        children: Object(w.jsx)(le, {}),
                      }),
                      Object(w.jsx)("div", {
                        class:
                          "md:10/12 flex flex-col w-full ml-0 md:ml-4 mt-mmt1 md:mt-0 md:p-4 md:space-y-4 ",
                        children: Object(w.jsx)("div", {
                          class:
                            " h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0",
                          children: Object(w.jsx)("div", {
                            class: "flex flex-col flex-wrap sm:flex-row ",
                            children: Object(w.jsx)("div", {
                              class: " relative w-auto pointer-events-none ",
                              children: Object(w.jsxs)("div", {
                                class:
                                  "md:px-12 md:pt-8 modal-content border-none  relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current",
                                children: [
                                  Object(w.jsx)("div", {
                                    class:
                                      " flex flex-shrink-0 items-center justify-between  border-b border-gray-200 rounded-t-md",
                                    children: Object(w.jsx)("h5", {
                                      class: "font-semibold text-lg  ",
                                      id: "exampleModalLabel",
                                      children: "Update User",
                                    }),
                                  }),
                                  Object(w.jsxs)("div", {
                                    children: [
                                      Object(w.jsx)("div", {
                                        className: "md:space-y-2 ",
                                        children: Object(w.jsxs)("div", {
                                          className: "flex items-center py-6",
                                          children: [
                                            Object(w.jsx)("label", {
                                              className: "cursor-pointer ",
                                              children: Object(w.jsx)("input", {
                                                type: "file",
                                                name: "image",
                                                onChange: A,
                                                className: "",
                                              }),
                                            }),
                                            O
                                              ? Object(w.jsxs)(w.Fragment, {
                                                  children: [
                                                    u
                                                      ? Object(w.jsx)("div", {
                                                          class:
                                                            " items-center justify-center",
                                                          children: Object(
                                                            w.jsxs
                                                          )("button", {
                                                            type: "button",
                                                            class:
                                                              "flex items-center rounded-lg bg-green px-4 py-2 text-green-800",
                                                            disabled: !0,
                                                            children: [
                                                              Object(w.jsxs)(
                                                                "svg",
                                                                {
                                                                  class:
                                                                    "mr-3 h-5 w-5 animate-spin text-green-800",
                                                                  xmlns:
                                                                    "http://www.w3.org/2000/svg",
                                                                  fill: "none",
                                                                  viewBox:
                                                                    "0 0 24 24",
                                                                  children: [
                                                                    Object(
                                                                      w.jsx
                                                                    )(
                                                                      "circle",
                                                                      {
                                                                        class:
                                                                          "opacity-25",
                                                                        cx: "12",
                                                                        cy: "12",
                                                                        r: "10",
                                                                        stroke:
                                                                          "currentColor",
                                                                        strokeWidth:
                                                                          "4",
                                                                      }
                                                                    ),
                                                                    Object(
                                                                      w.jsx
                                                                    )("path", {
                                                                      class:
                                                                        "opacity-75",
                                                                      fill: "currentColor",
                                                                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                                    }),
                                                                  ],
                                                                }
                                                              ),
                                                              Object(w.jsxs)(
                                                                "span",
                                                                {
                                                                  class:
                                                                    "font-medium",
                                                                  children: [
                                                                    " ",
                                                                    "Take a deep breath... \ud83c\udf3c",
                                                                  ],
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        })
                                                      : Object(w.jsxs)("div", {
                                                          class:
                                                            "rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-full bg-white cursor-pointer h-28",
                                                          children: [
                                                            Object(w.jsx)(
                                                              "div",
                                                              {
                                                                class:
                                                                  "w-2/2  text-text1  justify-center",
                                                              }
                                                            ),
                                                            Object(w.jsx)(
                                                              "div",
                                                              {
                                                                class:
                                                                  "lg:  w-full p-1",
                                                                children:
                                                                  Object(w.jsx)(
                                                                    "img",
                                                                    {
                                                                      alt: "You will see your choosed pictures here",
                                                                      src:
                                                                        O && O,
                                                                      class:
                                                                        "rounded-xl object-cover w-full h-full",
                                                                    }
                                                                  ),
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                    " ",
                                                  ],
                                                })
                                              : Object(w.jsxs)("div", {
                                                  class:
                                                    "rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-full bg-white cursor-pointer h-28",
                                                  children: [
                                                    Object(w.jsx)("div", {
                                                      class:
                                                        "w-2/2  text-text1  justify-center",
                                                    }),
                                                    Object(w.jsx)("div", {
                                                      class: "lg:  w-full p-1",
                                                      children: Object(w.jsx)(
                                                        "img",
                                                        {
                                                          alt: "You will see your choosed pictures here",
                                                          class:
                                                            "rounded-xl object-cover w-full h-full",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                          ],
                                        }),
                                      }),
                                      Object(w.jsxs)("div", {
                                        className:
                                          "md:flex flex-row md:space-x-4 w-full text-xs uppercase te",
                                        children: [
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "User name",
                                              }),
                                              Object(w.jsx)("input", {
                                                className:
                                                  "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                                required: !0,
                                                type: "text",
                                                name: "name",
                                                onChange: R,
                                                defaultValue: s && s.name,
                                              }),
                                            ],
                                          }),
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "Email",
                                              }),
                                              Object(w.jsx)("input", {
                                                className:
                                                  "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                                required: !0,
                                                type: "text",
                                                name: "email",
                                                onChange: R,
                                                defaultValue: s && s.email,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      Object(w.jsxs)("div", {
                                        className:
                                          "md:flex flex-row md:space-x-4 w-full text-xs uppercase te",
                                        children: [
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "Password",
                                              }),
                                              Object(w.jsx)("input", {
                                                className:
                                                  "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                                required: !0,
                                                type: "text",
                                                name: "password",
                                                onChange: R,
                                                defaultValue: s && s.password,
                                              }),
                                            ],
                                          }),
                                          Object(w.jsxs)("div", {
                                            className:
                                              "mb-3 space-y-2 w-full text-xs ",
                                            children: [
                                              Object(w.jsx)("label", {
                                                className:
                                                  "font-semibold text-allTextColor  text-sm",
                                                children: "Role",
                                              }),
                                              Object(w.jsxs)("select", {
                                                className:
                                                  "  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8",
                                                required: !0,
                                                type: "text",
                                                name: "role",
                                                onChange: R,
                                                children: [
                                                  Object(w.jsx)("option", {
                                                    defaultValue: s && s.role,
                                                    children: s && s.role,
                                                  }),
                                                  s && "admin" === s.role
                                                    ? Object(w.jsx)("option", {
                                                        defaultValue: "user",
                                                        children: "user",
                                                      })
                                                    : Object(w.jsx)("option", {
                                                        defaultValue: "admin",
                                                        children: "admin",
                                                      }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      Object(w.jsx)("div", {
                                        className:
                                          "md:flex flex-row md:space-x-4 w-full text-xs uppercase",
                                        children: Object(w.jsx)("div", {
                                          class:
                                            " flex flex-shrink-0 flex-wrap items-center justify-end pb-8  ",
                                          children: Object(w.jsx)("button", {
                                            onClick: function () {
                                              return k();
                                            },
                                            type: "submit",
                                            class:
                                              "px-6\r py-2.5\r bg-mainBaseColor\r text-white\r font-medium\r text-xs\r leading-tight\r uppercase\r rounded\r shadow-md\r transition\r duration-150\r ease-in-out\r ml-1",
                                            children: "Update",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                Object(w.jsx)(v.a, {}),
              ],
            })
          );
        },
        Be = function () {
          Object(Y.a)().handleSubmit;
          var e = Object(x.b)(),
            t = Object(x.c)(function (e) {
              return e.allUserInfo;
            }),
            s = t.loading,
            c = t.error,
            a = t.users;
          console.log(a);
          var n = Object(x.c)(function (e) {
              return e.products;
            }),
            l = n.error,
            d = n.isDeleted,
            u = function (t) {
              ne.a
                .fire({
                  title: "Do you want to delete ?",
                  showDenyButton: !0,
                  confirmButtonText: "Delete",
                  denyButtonText: "Don't Delete",
                })
                .then(function (s) {
                  s.isConfirmed &&
                    (e(
                      (function (e) {
                        return (function () {
                          var t = Object(o.a)(
                            i.a.mark(function t(s) {
                              var r, c;
                              return i.a.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          console.log(e),
                                          (t.prev = 1),
                                          s({ type: "DELETE_USER_REQUEST" }),
                                          (t.next = 5),
                                          b.a.delete(
                                            "http://localhost:1234/v1/delete_user/".concat(
                                              e
                                            ),
                                            { withCredentials: !0 }
                                          )
                                        );
                                      case 5:
                                        (r = t.sent),
                                          (c = r.data),
                                          console.log(c),
                                          s({
                                            type: "DELETE_USER_SUCCESS",
                                            payload: c.success,
                                          }),
                                          (t.next = 14);
                                        break;
                                      case 11:
                                        (t.prev = 11),
                                          (t.t0 = t.catch(1)),
                                          s({
                                            type: "DELETE_USER_FAIL",
                                            payload: t.t0.response,
                                          });
                                      case 14:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                null,
                                [[1, 11]]
                              );
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })();
                      })(t)
                    ),
                    window.location.reload());
                });
            };
          return (
            Object(r.useEffect)(
              function () {
                c && (ce.a.error(c), e(g())),
                  l && (ce.a.error(l), e(g())),
                  d &&
                    (ce.a.success("User delete successfully"),
                    e({ type: "DELETE_USER_RESET" })),
                  e(h());
              },
              [e, l, d, c]
            ),
            Object(w.jsx)("main", {
              className:
                "bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden ",
              children: Object(w.jsxs)("div", {
                className: "md:flex users-start justify-between",
                children: [
                  Object(w.jsx)("div", {
                    className: " md:w-2/12    ",
                    children: Object(w.jsx)(le, {}),
                  }),
                  Object(w.jsx)("div", {
                    className:
                      "  w-full  md:px-6 md:ml-4 mt-mmt2 md:mb-20 md:mt-24 md:space-y-4  ",
                    children: Object(w.jsx)("div", {
                      className:
                        "overflow-auto h-screen  mt-20 pt-16  pb-4 md:mt-0 md:pt-0 md:pb-4 px-1",
                      children: Object(w.jsx)("div", {
                        className: " overflow-x-auto  shadow-md sm:rounded-lg",
                        children: Object(w.jsxs)("table", {
                          className:
                            "w-full text-sm text-left text-gray-500 dark:text-gray-400",
                          children: [
                            Object(w.jsx)("thead", {
                              className:
                                "text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400",
                              children: Object(w.jsxs)("tr", {
                                children: [
                                  Object(w.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: "User id",
                                  }),
                                  Object(w.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: "Name",
                                  }),
                                  Object(w.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: "Email",
                                  }),
                                  Object(w.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-3 text-center",
                                    children: "Role",
                                  }),
                                  Object(w.jsx)("th", {
                                    scope: "col",
                                    className: " py-3",
                                    children: Object(w.jsx)("span", {
                                      className: "",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            Object(w.jsx)("tbody", {
                              children: s
                                ? Object(w.jsxs)("div", {
                                    className: "animate-pulse",
                                    children: [
                                      Object(w.jsx)("div", {
                                        className:
                                          "h-4 bg-gray-200 mt-3 mb-6 rounded",
                                      }),
                                      Object(w.jsx)("div", {
                                        className:
                                          "h-4 bg-gray-300 mb-6 rounded",
                                      }),
                                      Object(w.jsx)("div", {
                                        className:
                                          "h-4 bg-gray-200 mb-6 rounded",
                                      }),
                                      Object(w.jsx)("div", {
                                        className:
                                          "h-4 bg-gray-300 mb-6 rounded",
                                      }),
                                      Object(w.jsx)("div", {
                                        className:
                                          "h-4 bg-gray-200 mb-6 rounded",
                                      }),
                                    ],
                                  })
                                : Object(w.jsx)(w.Fragment, {
                                    children:
                                      a &&
                                      a.map(function (e, t) {
                                        return Object(w.jsxs)(
                                          "tr",
                                          {
                                            className:
                                              "bg-white border-b dark:bg-gray-800 dark:border-gray-700",
                                            children: [
                                              Object(w.jsx)("th", {
                                                scope: "row",
                                                className:
                                                  "px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap",
                                                children: e && e._id,
                                              }),
                                              Object(w.jsxs)("td", {
                                                className: "px-6 py-4",
                                                children: [" ", e && e.name],
                                              }),
                                              Object(w.jsxs)("td", {
                                                className: "px-6 py-4",
                                                children: [" ", e && e.email],
                                              }),
                                              Object(w.jsx)("td", {
                                                className: "px-6 py-4",
                                                children: Object(w.jsx)("p", {
                                                  className:
                                                    e && "admin" === e.role
                                                      ? "pl-12 py-1 rounded bg-green-100 text-green-700 text-md"
                                                      : "pl-12 py-1 rounded bg-yellow-100 text-yellow-700 text-md",
                                                  children: e && e.role,
                                                }),
                                              }),
                                              Object(w.jsxs)("td", {
                                                className: "px- py-4 text-left",
                                                children: [
                                                  Object(w.jsx)(j.b, {
                                                    to: "/admin/user_update/".concat(
                                                      e._id
                                                    ),
                                                    children: Object(w.jsx)(
                                                      "button",
                                                      {
                                                        className:
                                                          " pr-4 font-sm text-gray-600  hover:underline",
                                                        children: Object(w.jsx)(
                                                          "svg",
                                                          {
                                                            xmlns:
                                                              "http://www.w3.org/2000/svg",
                                                            className:
                                                              "h-6 w-6",
                                                            fill: "none",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            stroke:
                                                              "currentColor",
                                                            "stroke-width": "2",
                                                            children: Object(
                                                              w.jsx
                                                            )("path", {
                                                              "stroke-linecap":
                                                                "round",
                                                              "stroke-linejoin":
                                                                "round",
                                                              d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                                            }),
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  Object(w.jsx)("button", {
                                                    onClick: function () {
                                                      return u(e && e._id);
                                                    },
                                                    className:
                                                      "font-sm text-gray-600  hover:underline",
                                                    children: Object(w.jsx)(
                                                      "svg",
                                                      {
                                                        xmlns:
                                                          "http://www.w3.org/2000/svg",
                                                        className: "h-6 w-6",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        "stroke-width": "2",
                                                        children: Object(w.jsx)(
                                                          "path",
                                                          {
                                                            "stroke-linecap":
                                                              "round",
                                                            "stroke-linejoin":
                                                              "round",
                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          t
                                        );
                                      }),
                                  }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        Fe = function () {
          Object(Y.a)().handleSubmit;
          var e = Object(x.b)(),
            t = (Object(d.h)(), Object(r.useState)("")),
            s = Object(y.a)(t, 2),
            c = s[0],
            a = s[1],
            n = Object(x.c)(function (e) {
              return e.allReview;
            }),
            l = n.loading,
            j = n.error,
            u = n.reviews,
            p = Object(x.c)(function (e) {
              return e.deleteReview;
            }),
            m = p.error,
            h = p.isDeleted,
            f = function (t) {
              ne.a
                .fire({
                  title: "Do you want to delete ?",
                  showDenyButton: !0,
                  confirmButtonText: "Delete",
                  denyButtonText: "No",
                })
                .then(function (s) {
                  s.isConfirmed &&
                    e(
                      (function (e, t) {
                        return (function () {
                          var s = Object(o.a)(
                            i.a.mark(function s(r) {
                              var c, a;
                              return i.a.wrap(
                                function (s) {
                                  for (;;)
                                    switch ((s.prev = s.next)) {
                                      case 0:
                                        return (
                                          (s.prev = 0),
                                          r({ type: "DELETE_REVIEW_REQUEST" }),
                                          (s.next = 4),
                                          b.a.delete(
                                            "http://localhost:1234/v1/delete_review?id="
                                              .concat(e, "&productId=")
                                              .concat(t),
                                            { withCredentials: !0 }
                                          )
                                        );
                                      case 4:
                                        (c = s.sent),
                                          (a = c.data),
                                          r({
                                            type: "DELETE_REVIEW_SUCCESS",
                                            payload: a.success,
                                          }),
                                          (s.next = 12);
                                        break;
                                      case 9:
                                        (s.prev = 9),
                                          (s.t0 = s.catch(0)),
                                          r({
                                            type: "DELETE_REVIEW_FAIL",
                                            payload: s.t0.response,
                                          });
                                      case 12:
                                      case "end":
                                        return s.stop();
                                    }
                                },
                                s,
                                null,
                                [[0, 9]]
                              );
                            })
                          );
                          return function (e) {
                            return s.apply(this, arguments);
                          };
                        })();
                      })(t, c)
                    );
                });
            };
          return (
            Object(r.useEffect)(
              function () {
                24 === c.length && e(P(c)),
                  j && (v.b.error(j), e(g())),
                  m && (v.b.error(m), e(g())),
                  h &&
                    (v.b.success("Review delete successfully"),
                    e({ type: "DELETE_REVIEW_RESET" }));
              },
              [e, j, m, c, h]
            ),
            Object(w.jsxs)("main", {
              className:
                "bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden ",
              children: [
                Object(w.jsxs)("div", {
                  className: "md:flex users-start justify-between",
                  children: [
                    Object(w.jsx)("div", {
                      className: " md:w-2/12 md:pr-12   ",
                      children: Object(w.jsx)(le, {}),
                    }),
                    Object(w.jsx)("div", {
                      className:
                        "  w-full ml-0 md:ml-6 mt-mmt1  md:mt-20 md:px-6 h-28 md:space-y-4 ",
                      children: Object(w.jsx)("div", {
                        className: "overflow-auto h-screen ",
                        children: Object(w.jsxs)("div", {
                          className: " overflow-x-auto shadow-md sm:rounded-lg",
                          children: [
                            Object(w.jsxs)("form", {
                              onSubmit: function (t) {
                                t.preventDefault(), console.log(c), e(P(c));
                              },
                              class: "lg:mr-auto flex justify-end pb-2",
                              children: [
                                Object(w.jsx)("label", {
                                  for: "topbar-search",
                                  class: "sr-only",
                                  children: "Search",
                                }),
                                Object(w.jsxs)("div", {
                                  class: "mt-2 relative lg:w-64",
                                  children: [
                                    Object(w.jsx)("div", {
                                      class:
                                        "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                      children: Object(w.jsx)("svg", {
                                        class: "w-5 h-5 text-gray-500",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: Object(w.jsx)("path", {
                                          "fill-rule": "evenodd",
                                          d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                                          "clip-rule": "evenodd",
                                        }),
                                      }),
                                    }),
                                    Object(w.jsx)("input", {
                                      type: "text",
                                      placeholder: "Enter product id...",
                                      value: c,
                                      onChange: function (e) {
                                        return a(e.target.value);
                                      },
                                      id: "topbar-search",
                                      class:
                                        "bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            l
                              ? Object(w.jsx)(M, {})
                              : Object(w.jsx)(w.Fragment, {
                                  children:
                                    u && u.length > 0
                                      ? Object(w.jsxs)("table", {
                                          className:
                                            "w-full text-sm text-left text-gray-500 dark:text-gray-400",
                                          children: [
                                            Object(w.jsx)("thead", {
                                              className:
                                                "text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400",
                                              children: Object(w.jsxs)("tr", {
                                                children: [
                                                  Object(w.jsx)("th", {
                                                    scope: "col",
                                                    className: "px-6 py-3",
                                                    children: "Review id",
                                                  }),
                                                  Object(w.jsx)("th", {
                                                    scope: "col",
                                                    className: "px-6 py-3 ",
                                                    children: "User",
                                                  }),
                                                  Object(w.jsx)("th", {
                                                    scope: "col",
                                                    className: "px-6 py-3",
                                                    children: "Comment",
                                                  }),
                                                  Object(w.jsx)("th", {
                                                    scope: "col",
                                                    className: "px-6 py-3",
                                                    children: "Ratting",
                                                  }),
                                                  Object(w.jsx)("th", {
                                                    scope: "col",
                                                    className: "px-6 py-3",
                                                    children: "Action",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            Object(w.jsx)("tbody", {
                                              children:
                                                u &&
                                                u.map(function (e, t) {
                                                  return Object(w.jsxs)(
                                                    "tr",
                                                    {
                                                      className:
                                                        "bg-white border-b dark:bg-gray-800 dark:border-gray-700",
                                                      children: [
                                                        Object(w.jsx)("th", {
                                                          scope: "row",
                                                          className:
                                                            "px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-start",
                                                          children: e && e._id,
                                                        }),
                                                        Object(w.jsxs)("td", {
                                                          className:
                                                            "px-6 py-4",
                                                          children: [
                                                            " ",
                                                            e && e.name,
                                                          ],
                                                        }),
                                                        Object(w.jsxs)("td", {
                                                          className:
                                                            "px-6 py-4",
                                                          children: [
                                                            " ",
                                                            e && e.comment,
                                                          ],
                                                        }),
                                                        Object(w.jsx)("td", {
                                                          className:
                                                            e && e.rating <= 2
                                                              ? "px-6 py-4 text-red-500"
                                                              : "px-6 py-4 text-green-500",
                                                          children:
                                                            e && e.rating,
                                                        }),
                                                        Object(w.jsx)("td", {
                                                          className:
                                                            "px-6 py-4 text-left",
                                                          children: Object(
                                                            w.jsx
                                                          )("button", {
                                                            onClick:
                                                              function () {
                                                                return f(
                                                                  e && e._id
                                                                );
                                                              },
                                                            className:
                                                              "font-sm text-gray-600  hover:underline",
                                                            children: Object(
                                                              w.jsx
                                                            )("svg", {
                                                              xmlns:
                                                                "http://www.w3.org/2000/svg",
                                                              className:
                                                                "h-6 w-6",
                                                              fill: "none",
                                                              viewBox:
                                                                "0 0 24 24",
                                                              stroke:
                                                                "currentColor",
                                                              "stroke-width":
                                                                "2",
                                                              children: Object(
                                                                w.jsx
                                                              )("path", {
                                                                "stroke-linecap":
                                                                  "round",
                                                                "stroke-linejoin":
                                                                  "round",
                                                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      ],
                                                    },
                                                    t
                                                  );
                                                }),
                                            }),
                                          ],
                                        })
                                      : Object(w.jsx)("div", {
                                          children: Object(w.jsx)("div", {
                                            class:
                                              "h-96  bg-white flex justify-center content-center flex-wrap",
                                            children: Object(w.jsx)("p", {
                                              class:
                                                "font-sans text-gray-900 text-2xl ",
                                              children: "No Reviews Found",
                                            }),
                                          }),
                                        }),
                                }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                Object(w.jsx)(v.a, {}),
              ],
            })
          );
        },
        ze = function () {
          var e = Object(x.c)(function (e) {
              return e.userInfo;
            }),
            t = e.isAuthenticated,
            s = e.user;
          return (
            Object(r.useEffect)(function () {
              me.dispatch(
                (function () {
                  var e = Object(o.a)(
                    i.a.mark(function e(t) {
                      var s, r;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t({ type: "LOAD_USER_REQUEST" }),
                                  (e.next = 4),
                                  b.a.get("http://localhost:1234/v1/me", {
                                    withCredentials: !0,
                                  })
                                );
                              case 4:
                                (s = e.sent),
                                  (r = s.data),
                                  t({ type: "LOAD_USER_SUCCESS", payload: r }),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  t({
                                    type: "LOAD_USER_FAIL",
                                    payload: e.t0.response.data.message,
                                  });
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            }, []),
            Object(w.jsx)(w.Fragment, {
              children: Object(w.jsxs)(d.e, {
                children: [
                  Object(w.jsx)(d.c, {
                    path: "/sad",
                    element: Object(w.jsx)(M, {}),
                  }),
                  Object(w.jsx)(d.c, {
                    path: "/search",
                    element: Object(w.jsx)(E, {}),
                  }),
                  Object(w.jsx)(d.c, {
                    path: "/",
                    element: Object(w.jsx)(Q, {}),
                  }),
                  Object(w.jsx)(d.c, {
                    path: "/home",
                    element: Object(w.jsx)(Q, {}),
                  }),
                  Object(w.jsx)(d.c, {
                    path: "/v1/user/login",
                    element: Object(w.jsx)(K, {}),
                  }),
                  Object(w.jsx)(d.c, {
                    path: "/v1/user/register",
                    exact: !0,
                    element: Object(w.jsx)(G, {}),
                  }),
                  Object(w.jsx)(d.c, {
                    path: "/v1/products",
                    element: Object(w.jsx)(re, {}),
                  }),
                  Object(w.jsx)(d.c, {
                    path: "/v1/products/:keyword",
                    element: Object(w.jsx)(re, {}),
                  }),
                  Object(w.jsx)(d.c, {
                    path: "/v1/product/:id",
                    element: Object(w.jsx)($, { isAuthenticated: t }),
                  }),
                  Object(w.jsx)(d.c, {
                    path: "/v1/cart",
                    element: Object(w.jsx)(fe, {}),
                  }),
                  Object(w.jsxs)(d.c, {
                    path: "/*",
                    element: Object(w.jsx)(ke, {}),
                    children: [
                      Object(w.jsx)(d.c, {
                        path: "me",
                        element: Object(w.jsx)(he, { user: s }),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "my_orders",
                        element: Object(w.jsx)(Te, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "v1/order/:id",
                        element: Object(w.jsx)(Le, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "v1/user/order/confirm",
                        element: Object(w.jsx)(ve, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "v1/process/payment",
                        element: Object(w.jsx)(Ae, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "admin_dashboard",
                        element:
                          s && "admin" === s.role && Object(w.jsx)(De, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "admin/products",
                        element:
                          s && "admin" === s.role && Object(w.jsx)(ie, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "admin/product_update/:id",
                        element:
                          s && "admin" === s.role && Object(w.jsx)(qe, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "admin/orders",
                        element: Object(w.jsx)(Ie, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "admin/users",
                        element:
                          s && "admin" === s.role && Object(w.jsx)(Be, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "admin/reviews",
                        element:
                          s && "admin" === s.role && Object(w.jsx)(Fe, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "shipping",
                        element: Object(w.jsx)(ge, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "admin/add_product",
                        element:
                          s && "admin" === s.role && Object(w.jsx)(Pe, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "orderupdate/:id",
                        element:
                          s && "admin" === s.role && Object(w.jsx)(Me, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "admin/user_update/:id",
                        element:
                          s && "admin" === s.role && Object(w.jsx)(Ve, {}),
                      }),
                      Object(w.jsx)(d.c, {
                        path: "success",
                        element: Object(w.jsx)(Ue, {}),
                      }),
                    ],
                  }),
                  Object(w.jsx)(d.c, {
                    path: "/",
                    element: Object(w.jsx)(J, {}),
                  }),
                ],
              }),
            })
          );
        },
        Qe = function (e) {
          e &&
            e instanceof Function &&
            s
              .e(3)
              .then(s.bind(null, 156))
              .then(function (t) {
                var s = t.getCLS,
                  r = t.getFID,
                  c = t.getFCP,
                  a = t.getLCP,
                  n = t.getTTFB;
                s(e), r(e), c(e), a(e), n(e);
              });
        };
      n.a.render(
        Object(w.jsx)(c.a.StrictMode, {
          children: Object(w.jsx)(x.a, {
            store: me,
            children: Object(w.jsx)(j.a, { children: Object(w.jsx)(ze, {}) }),
          }),
        }),
        document.getElementById("root")
      ),
        Qe();
    },
    91: function (e, t, s) {},
    92: function (e, t, s) {},
  },
  [[143, 1, 2]],
]);
//# sourceMappingURL=main.a392decc.chunk.js.map
