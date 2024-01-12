import React from "react";

function Login({ handleLogin }) {
  return (
    <div className="container mt-5 text-center">
      {" "}
      <button onClick={handleLogin} className="btn btn-outline-success">
        Giriş Yap
      </button>
    </div>
  );
}

export default Login;
