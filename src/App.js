function App() {
  return (
    <div className="main">
      <div className="login-card">
        <Card_form />
      </div>
    </div>
  );
}

function Login() {}

function Register() {}

function Card_form() {
  return (
    <div className="element-container">
      <div className="input-container">
        <h4>User</h4>
        <input />
      </div>
      <div className="input-container">
        <h4>Password</h4>
        <input />
      </div>
      <button>Login</button>
      <p>Create an account!</p>
    </div>
  );
}

export default App;
