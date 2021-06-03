import React, { Component } from 'react'

import './TaskForm.css';

export default class TaskForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  addTask() {
    // TODO: name to parent through props
  }

  render() {
    return (
      <div className="task-form">
        <form>
          
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Task" />
            <button className="btn btn-outline-secondary" type="submit">
              +
            </button>
          </div>

        </form>
      </div>
    )
  }
}
