import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    emailjs
      .send(
        "service_r95amrr",
        "template_dlxisr9",
        formData,
        "4C6XK5WEB_pj_W4Y1"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Email sent successfully!");
          window.location.assign("/");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <section
      className="contacts-section"
      style={{
        background: 'linear-gradient( #fc7a46 0%, #0c83c8 100%)', // Gradient background
        paddingTop: '5%',
        paddingBottom: '5%',
      }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: "2rem", backgroundColor: "#ffffff", border: "2px solid #fc7a46" }}>
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ color: "#fc7a46", fontWeight: "bold" }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: "#ffffff" }}
                gutterBottom
              >
                Want to get in touch? Fill out the form below
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  variant="outlined"
                  margin="normal"
                  required
                  InputLabelProps={{
                    style: { color: "#0c83c8" },
                  }}
                  InputProps={{
                    style: { backgroundColor: "#ffffff" },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  variant="outlined"
                  margin="normal"
                  type="email"
                  required
                  InputLabelProps={{
                    style: { color: "#0c83c8" },
                  }}
                  InputProps={{
                    style: { backgroundColor: "#ffffff" },
                  }}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  variant="outlined"
                  margin="normal"
                  type="tel"
                  required
                  InputLabelProps={{
                    style: { color: "#0c83c8" },
                  }}
                  InputProps={{
                    style: { backgroundColor: "#ffffff" },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={5}
                  required
                  InputLabelProps={{
                    style: { color: "#0c83c8" },
                  }}
                  InputProps={{
                    style: { backgroundColor: "#ffffff" },
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: "#fc7a46", marginTop: "1rem" }}
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
