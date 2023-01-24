import { Header } from "../../components/Header";
import { Container } from "./style";
import location from "../../assets/location.png";
import locationsvg from "../../assets/location.svg";
import mail from "../../assets/mail.svg";
import { sendMessage } from "../../services";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState(
    "success" as "success" | "info" | "warning" | "error"
  );

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    sendMessage({
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    })
      .then((res) => {
        if (res.message) {
          setSeverity("success");
          setOpen(true);
          setDisabled(false);
          clearForm();
        }
      })
      .catch((err) => {
        console.log(err);
        setSeverity("error");
        setOpen(true);
        setDisabled(false);
      });
  };

  return (
    <>
      {open && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {severity === "success" ? "Message sent" : "Error sending message"}
          </Alert>
        </Snackbar>
      )}
      <Header />
      <Container>
        <div className="infos animeLeft">
          <img src={locationsvg} alt="effect" className="effect" />
          <img src={mail} alt="maileffect" className="maileffect" />
          <form onSubmit={handleSubmit}>
            <div className="description">
              <h1 className="title">Contact Us</h1>
              <p>Our Friendly team would love to hear from you</p>
            </div>
            <div className="name">
              <span>
                <label>First Name</label>
                <input
                  type="text"
                  name="first"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </span>
              <span>
                <label>Last Name</label>
                <input
                  type="text"
                  name="last"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </span>
            </div>
            <span>
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <span>
              <label>Message</label>
              <textarea
                name="message"
                cols={30}
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </span>
            {disabled ? (
              <button type="submit" disabled>
                ...
              </button>
            ) : (
              <button type="submit">Send Message</button>
            )}
          </form>
        </div>
        <div>
          <img src={location} alt="location" className="animeRight" />
        </div>
      </Container>
    </>
  );
};
