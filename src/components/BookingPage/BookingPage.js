import "./BookingPage.css";
import React, { useEffect, useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../../utilities/SampleAPI.js";
import { useFormik } from "formik";
import * as Yup from "yup";

export const BookingForm = ({ availableTimes, dispatch, setSelectedDate }) => {
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
      submitAPI(values);
      dispatch({ type: "UPDATE_TIMES", payload: [] });
      formik.resetForm();

      window.location.href = "/confirmation";
    },
  });

  useEffect(() => {
    setSelectedDate(formik.values.date);
  }, [formik.values.date]);

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
        <label>Pick a Time</label>
        <div className="radio-buttons">
          {availableTimes.map((time) => (
            <label key={time} className="radio-label">
              <input
                type="radio"
                name="time"
                value={time}
                onChange={formik.handleChange}
                checked={formik.values.time === time}
              />
              {time}
            </label>
          ))}
        </div>
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
        <button aria-label="Submit" type="submit">Submit</button>
      </div>
    </form>
  );
};

export const initializeTimes = async () => {
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  try {
    const availableTimes = await fetchAPI(formattedDate);

    return availableTimes;
  } catch (error) {
    console.error("Error fetching available times:", error);
    return [];
  }
};

export const updateTimes = async (dispatch, newDate) => {
  try {
    const availableTimes = await fetchAPI(newDate);
    dispatch({ type: "UPDATE_TIMES", payload: availableTimes });
  } catch (error) {
    console.error("Error updating available times:", error);
  }
};

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const timesReducer = (state, action) => {
    if (action.type === "UPDATE_TIMES") {
      return {
        ...state,
        availableTimes: action.payload,
      };
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(timesReducer, {
    availableTimes: [],
  });

  useEffect(() => {
    async function fetchData() {
      const times = await initializeTimes();
      dispatch({ type: "UPDATE_TIMES", payload: times });
    }

    fetchData();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await updateTimes(dispatch, selectedDate);
      } catch (error) {
        console.error("Error updating available times:", error);
      }
    })();
  }, [selectedDate]);

  return (
    <div className="booking-page">
      <div className="booking-page-container">
        <div className="booking-page-title">
          <h1>Book a Table</h1>
          <p>Fill out the form below to reserve a table.</p>
        </div>
        <BookingForm
          setSelectedDate={setSelectedDate}
          availableTimes={state.availableTimes}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default BookingPage;

