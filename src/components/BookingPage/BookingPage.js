import "./BookingPage.css";
import React, { useEffect, useReducer } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({ availableTimes, dispatch }) => {
  const occasions = ["Birthday", "Anniversary", "Other"];

  const initialValues = {
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    occasion: "",
    seats: 4,
  };

  useEffect(() => {
    dispatch({
      type: "UPDATE_TIMES",
      payload: ["11:00", "12:00", "13:00", "14:00"],
    });
  }, [dispatch]);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      date: Yup.date()
        .min(new Date(), "Please select a date in the future.")
        .required("Required"),
      time: Yup.string().required("Required"),
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required"),
      seats: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="booking-form">
      <div className="form-group">
        <div className="table-info">Booking Preferences</div>
        <label htmlFor="date">Pick a Date</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={formik.handleChange}
          value={formik.values.date}
        />
        {formik.errors.date ? (
          <div className="error">{formik.errors.date}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="time">Pick a Time</label>
        <select
          id="time"
          name="time"
          onChange={formik.handleChange}
          value={formik.values.time}
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {formik.errors.time ? (
          <div className="error">{formik.errors.time}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="seats">Number of Seats</label>
        <input
          type="number"
          id="seats"
          name="seats"
          onChange={formik.handleChange}
          value={formik.values.seats}
        />
        {formik.errors.seats ? (
          <div className="error">{formik.errors.seats}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          onChange={formik.handleChange}
          value={formik.values.occasion}
        >
          <option value="">Select an occasion</option>
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
        {formik.touched && formik.errors.occasion ? (
          <div className="error">{formik.errors.occasion}</div>
        ) : null}
      </div>
      <div className="personal-info">Personal Details</div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        {formik.errors.phone ? (
          <div className="error">{formik.errors.phone}</div>
        ) : null}
      </div>
      <div className="button-div">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

const BookingPage = () => {
  const initializeTimes = () => {
    return ["11:00", "12:00"]; 
  };

  const updateTimes = (times) => {
    return {
      type: "UPDATE_TIMES",
      payload: times,
    };
  };

  const timesReducer = (state, action) => {
    if (action.type === "UPDATE_TIMES") {
      return {
        availableTimes: action.payload,
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(timesReducer, [], initializeTimes);


  return (
    <div className="booking-page">
      <div className="booking-page-container">
        <div className="booking-page-title">
          <h1>Book a Table</h1>
          <p>Fill out the form below to reserve a table.</p>
        </div>
        <BookingForm
          availableTimes={state.availableTimes}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default BookingPage;
