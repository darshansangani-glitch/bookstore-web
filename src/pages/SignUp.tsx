import { useState } from "react";
import GroupImg from "../assets/Group.png";
import darkLogo from "../assets/darkLogo.png";
import { useNavigate } from "react-router-dom";
// import 'dotenv/config'

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    mobileNo: "",
    email: "",
    role: "",
    password: "",
    repeat_password: "",
  });
  // const inputValues = [{

  // }]

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (user.password != user.repeat_password) {
      console.log("Password is incorrect");
    }

    const url = `${import.meta.env.VITE_API_URL}/user/signup`;
    console.log(url);
    const responses = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(async (res) => {
        if (res.ok) {
          const errorText = await res.text();
          console.error("Server error response:", errorText);
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        res.json();
      })
      .then((data) => console.log(data))

      .catch((err) => {
        console.log(err.message);
      });
    console.log(responses);
  };

  function handleSubmit(event: Event) {
    event.preventDefault();
  }

  return (
    <main>
      <section className="flex w-310 m-auto mt-30 justify-center">
        <div
          className="left h-150!"
          style={{
            borderBottomLeftRadius: "40px",
            borderTopLeftRadius: "40px",
          }}
        >
          <img src={GroupImg} alt="BookWorm Logo" />
          <h4>Already Have Account? Sign in now.</h4>
          <button type="button" onClick={() => navigate("/login")}>
            SIGN IN
          </button>
        </div>
        <div className="right h-150! rounded-bl-none! rounded-tl-none! rounded-br-[40px] rounded-tr-[40px] border-r! ">
          <label htmlFor="Logo">
            Sign Up <img src={darkLogo} alt="Logo" />
          </label>
          <p>Please provide your information to sign up.</p>
          <form action="" method="post" onSubmit={() => handleSubmit}>
            <input
              type="text"
              className="w-full border p-2 pl-5 ml-auto rounded-xl mb-3"
              placeholder="Full Name"
              name={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              type="text"
              className="w-full border p-2 pl-5 ml-auto rounded-xl mb-3"
              placeholder="+91 9921235745"
              name={user.mobileNo}
              onChange={(e) => setUser({ ...user, mobileNo: e.target.value })}
            />
            <input
              className="w-full border p-2 pl-5 ml-auto rounded-xl mb-3 bg-white!"
              type="email"
              name={user.email}
              id="email"
              placeholder="user12@gmail.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <select
              name={user.role}
              className="w-full border p-2 pl-5 ml-auto rounded-xl mb-3"
              id="role"
              onChange={(e) =>
                setUser({ ...user, role: e.currentTarget.value })
              }
            >
              <option value="">--Select Role--</option>
              <option value="Student">Student</option>
              <option value="Local">Local</option>
            </select>
            <input
              className="w-full border p-2 pl-5 ml-auto rounded-xl mb-3"
              type="password"
              name={user.password}
              id="password"
              placeholder="********"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <input
              className="w-md border p-2 pl-5 ml-auto rounded-xl mb-3"
              type="password"
              name={user.repeat_password}
              id="re-password"
              placeholder="Re-Enter Password "
              onChange={(e) =>
                setUser({ ...user, repeat_password: e.target.value })
              }
            />
            <button className="signup-btn" type="submit" onClick={handleSignUp}>
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
