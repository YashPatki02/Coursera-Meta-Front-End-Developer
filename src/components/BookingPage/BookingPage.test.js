import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "./BookingPage";
import { act } from "react-dom/test-utils"; // Import act from react-dom/test-utils

describe("BookingForm component", () => {
  it("validates form field errors on submit", async () => {
    act(() => {
      render(
        <BookingForm
          setSelectedDate={() => "2025-08-01"}
          availableTimes={["12:00 PM", "12:30 PM"]}
        />
      );
    });

    act(() => {
      fireEvent.click(screen.getByText("Submit"));
    });

    // Required for Date, Time, Name, Email, and Phone
    expect(await screen.findAllByText("Required")).toHaveLength(5);
  });

  it("update form fields", () => {
    act(() => {
      render(
        <BookingForm
          setSelectedDate={() => "2025-08-01"}
          availableTimes={["12:00 PM", "12:30 PM"]}
        />
      );
    });

    const validData = {
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
    };

    act(() => {
      fireEvent.change(screen.getByLabelText("Name"), {
        target: { value: validData.name },
      });
      fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: validData.email },
      });
      fireEvent.change(screen.getByLabelText("Phone"), {
        target: { value: validData.phone },
      });
    });

    expect(screen.getByLabelText("Name")).toHaveValue(validData.name);
    expect(screen.getByLabelText("Email")).toHaveValue(validData.email);
    expect(screen.getByLabelText("Phone")).toHaveValue(validData.phone);

    act(() => {
      fireEvent.change(screen.getByLabelText("Number of Seats"), {
        target: { value: "2" },
      });
    });

    expect(screen.getByLabelText("Number of Seats")).toHaveValue(2);
  });
});
