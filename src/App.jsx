import React, { useState } from "react";
import male from "./assets/male.avif";
import female from "./assets/Female.png";
import styles from "./App.module.css";

function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [users, setUsers] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      alert("Username is required");
      return;
    }

    if (Number(age) < 1) {
      alert("Enter valid age");
      return;
    }

    if (!gender) {
      alert("Please select your gender");
      return;
    }

    const newUser = {
      username,
      age,
      gender
    };

    setUsers([...users, newUser]);

    setUsername("");
    setAge("");
    setGender("");
  };

  return (
    <div>
      <div className={styles.user_login_card}>
      <h1>User Details</h1>
      <form onSubmit={submitForm}>
        <label>User Name</label><br />
        <input
          type="text"
          placeholder="Enter user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />

        <label>Age</label><br />
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /><br /><br />

        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label> Male</label>

        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label> Female</label><br /><br />

        <button type="submit">Add User</button>
      </form>
</div>

      

      <h4>Number of users: {users.length}</h4>
      <div className={styles.box1}>
<div className={styles.box1}>
      {users.map((user, index) => (
        <div key={index} className={user.gender=="male"?styles.card2:styles.card3}>
          <img
            src={user.gender === "male" ? male : female}
            alt="Avatar"
          />
          <div>
            <h3>{user.username}</h3>
            <h6>
              {user.age} <span>({user.gender})</span>
            </h6>
            </div>
         
        </div>
      ))}
      </div>
    </div>
    </div>
  );
}

export default App;
