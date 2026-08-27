import React, { useReducer, useRef, useEffect } from "react";
import formReducer from "../reducers/formReducer.js";
import "./SignIn.css";

function SignIn() {
  const initialState = { name: "", userId: "", email: "", error: "", success: "" };
  const [state, dispatch] = useReducer(formReducer, initialState);
  const nameRef = useRef(null);

  useEffect(() => {
    // Focus on the Name field when page loads
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.name || !state.userId || !state.email) {
      dispatch({ type: "ERROR", payload: "All fields are required." });
      dispatch({ type: "SUCCESS", payload: "" });
    } else {
      dispatch({ type: "ERROR", payload: "" });
      dispatch({ type: "SUCCESS", payload: "Signed in successfully!" });
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          placeholder="Name"
          value={state.name}
          onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
        />
        <input
          type="text"
          placeholder="User ID"
          value={state.userId}
          onChange={(e) => dispatch({ type: "SET_USERID", payload: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
        />
        {state.error && <p className="error">{state.error}</p>}
        {state.success && <p className="success">{state.success}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
