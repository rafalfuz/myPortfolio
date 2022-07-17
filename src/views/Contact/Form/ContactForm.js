import React from "react";
import { Formik, Field, Form } from "formik";

import "./ContactForm.css";

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        inputName: "",
        inputEmail: "",
        inputCorpName: "",
        inputMessage: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.inputEmail) {
          errors.inputEmail = "Adres e-mail jest wymagany!";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.inputEmail)
        ) {
          errors.inputEmail = "Błąd w adresie e-mail!";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        fetch("https://formsubmit.co/ajax/rafalfuz@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.inputName,
            email: values.inputEmail,
            corpName: values.inputCorpName,
            message: values.inputMessage,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));

        setTimeout(() => {
          resetForm();
          alert("Wiadomość została wysłana");
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form className="formRubric" onSubmit={handleSubmit}>
          <div className="formWrapper">
            <div className="formContainer">
              <Field
                id="inputName"
                name="inputName"
                className="inputForm inputName"
                type="text"
                value={values.inputName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Imię"
              />
              {errors.inputName && touched.inputName && errors.inputName}
              <Field
                id="inputEmail"
                name="inputEmail"
                className="inputForm inputEmail"
                type="email"
                value={values.inputEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e-mail"
              />
              {errors.inputEmail && touched.inputEmail && errors.inputEmail}
              <Field
                id="inputCorpName"
                name="inputCorpName"
                className="inputForm inputCorpName"
                type="text"
                value={values.inputCorpName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Firma"
              />
              <Field
                id="inputMessage"
                name="inputMessage"
                className="inputForm inputTextarea"
                type="textarea"
                value={values.inputMessage}
                onChange={handleChange}
                onBlur={handleBlur}
                component="textarea"
              />
              <button
                className="btn formBtnSubmit"
                type="submit"
                disabled={isSubmitting}
              >
                Send
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
