import { useState } from "react";

const Form = () => {
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleUsername = (e) => {
  setUsername(e.target.value)
}
const handleSubmit = (e) => {
  e.preventDefault()
  alert(`
    username:${username}
    email:${email}
    password:${password}
  `)
  setUsername("")
  setEmail("")
  setPassword("")
}
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="display-6 text-danger">FORMS</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username : <span className="fs-3 text-info">{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleUsername}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email : <span className="fs-3 text-warning">{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(event)=> setEmail(event.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={(e)=> setPassword(e.target.value)}
          value={password}
          required
        />
      </div>
      <button type="submit" className="btn btn-danger">
        Submit
      </button>
    </form>
  );
};

export default Form;
