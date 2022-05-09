import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
      <div className="contact-page shadow">
        <div className="row justify-content-center align-items-center ms-6">
          <div className="col-8 mt-5 mb-5">
            <div className="mb-4">
              <h4>Get In Touch</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="container">
                <div class="row">
                  <div class="col-4">
                    <input
                      type="text"
                      placeholder="UserName"
                      name="name"
                      className="w-100 form-control"
                      required
                    />
                  </div>
                  <div class="col-4">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="w-100 form-control"
                      required
                    />
                  </div>
                  <div class="col-4">
                    <input
                      type="Number"
                      placeholder="Phone"
                      name="phone"
                      className="w-100 form-control"
                      required
                    />
                  </div><br></br> <br></br>
                  <div class="col-">
                    <textarea
                      placeholder="Phone"
                      name="phone"
                      className="w-100 form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <br></br>

              <input className="ms-4 btn-success w-25" type="submit" />
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;