import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import TaskForm from "../components/TaskForm";
import { dateFormat } from "../helper";
import TodoContext from "../context/TodoContext";

function CreateTask(props) {
  const [latestTask, setLatestTask] = useState();
  const { getTaskList, taskList, loggedUser } = useContext(TodoContext);
  useEffect(() => {
    getTaskList();
  }, []);

  useEffect(() => {
    const latest = taskList[taskList.length - 1];
    setLatestTask(latest);
  }, [taskList]);
  return (
    <div className="container-fluid abc  ">
      <div className="row h-100 d-flex   ">
        <div className="col-md-6 d-flex bg-dark h-100 text-white align-items-center justify-content-center flex-column">
          <TaskForm />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center flex-column">
          <div className="card bg-dark w-75 rounded-0 p-3">
            <div className="card-header d-flex justify-content-between">
              <h3 className="text-white">Latest Task</h3>
              <button className="btn btn-info">
                <i className="fa-regular fa-pen-to-square pe-2 "></i>Edit Task
              </button>
            </div>
            <div className="card-body text-white">
              <h5>{latestTask?.title}</h5>
              <p>{latestTask?.description}</p>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between text-warning">
                <p>Created: {dateFormat(latestTask?.createdOn)}</p>
                <p>DueDate: {dateFormat(latestTask?.duedate)}</p>
              </div>
            </div>
          </div>

          <div className="card bg-dark w-75 mt-5">
            <div className="card-header d-flex justify-content-between">
              <h3 className="text-white">Recently Added</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
