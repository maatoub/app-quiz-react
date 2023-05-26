import React from "react";
import styles from "./App.module.css";
import UserTable from "./components/Score/Score";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = localStorage.setItem("name", this.state.value);
    window.location = "/category";
  }

  handleAdminSubmit(event) {
    event.preventDefault();
    window.location = "/login";
  }

  render() {
    return (
      <>
        <div className={styles.subscribe_box}>
          <h2>Welcome to the Java Quiz</h2>
          <div className={styles.userTable}>
          <UserTable />
        </div>
          <form className={styles.subscribe} onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Your name or nickname"
              autocomplete="off"
              required="required"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button type="submit">
              {" "}
              <span>Start</span>
            </button>
          </form>

        </div>
        
      </>
    );
  }
}

export default App;
