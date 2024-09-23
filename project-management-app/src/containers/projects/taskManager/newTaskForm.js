import "./newTaskForm.module.css";
import { React, useState } from "react";

function NewTaskForm() {
    const [taskName, setTaskName] = useState("");
    const [status, setStatus] = useState({
        toDo: true,
        inProgress: false,
        done: false,
    });
    const [image, setImage] = useState("");
    const [url, setUrl] = useState();
    const [selectedOption, setSelectedOption] =
        useState("");
    const [comments, setComments] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            taskName,
            selectedOption,
            status,
            image,
            url,
            comments
        );
        // Add form submission logic here
    };

    const handleAssigneeChange = (assign) => {
        setAssignee((prev) => ({
            ...prev,
            [assign]: !prev[assign],
        }));
    };
    const handleReset = () => {
        // Reset all state variables here
        setProjectName("");
        setEmail("");
        setStatus({
            toDo: true,
            inProgress: false,
            done: false,
        });
        setImage("");
        setUrl("");
        setSelectedOption("");
        setComments("");
    };

    return (
        <div className="NewTaskForm">
            <h1>New Task</h1>
            <fieldset>
                <form action="#" method="get">
                    <label for="taskname">
                        Task Name*
                    </label>
                    <input
                        type="text"
                        name="taskname"
                        id="taskname"
                        value={taskName}
                        onChange={(e) =>
                            setTaskName(e.target.value)
                        }
                        placeholder="Enter Task Name"
                        required
                    />
                    
                    
                    <label for="Task Status">
                        Task Status
                    </label>
                    <input
                        type="checkbox"
                        name="Task Status"
                        id="To Do"
                        checked={status.toDo === true}
                        onChange={(e) =>
                            handleStatusChange("To Do")
                        }
                    />
                    To Do
                    <input
                        type="checkbox"
                        name="Task Status"
                        id="In Progress"
                        checked={status.inProgress === true}
                        onChange={(e) =>
                            handleStatusChange("In Progress")
                        }
                    />
                    In Progress
                    <input
                        type="checkbox"
                        name="Task Status"
                        id="Done"
                        checked={status.done === true}
                        onChange={(e) =>
                            handleStatusChange("Done")
                        }
                    />
                    Done
                    <label for="file">Upload Image*</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) =>
                            setimage(e.target.files[0])
                        }
                        placeholder="Enter Upload File"
                        required
                    />
                    <label for="url">Enter URL</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        onChange={(e) =>
                            setUrl(e.target.value)
                        }
                        placeholder="Enter url"
                        required
                    />
                    <label>Select your assignee</label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) =>
                            setSelectedOption(
                                e.target.value
                            )
                        }
            >
                        <option
                            value=""
                            disabled
                            selected={selectedOption === ""}
                        ></option>
                    <label for= "Assignee"> </label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) =>
                            setSelectedOption(
                                e.target.value
                            )
                        }
                    >
                        <option
                            value=""
                            disabled
                            selected={selectedOption === ""}
                        >
                            Select Assignee
                        </option>

                    <label for="about">Comments</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setComments(e.target.value)
                        }
                        placeholder="additional task comments..."
                        required
                    ></textarea>
                    <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default newTaskForm;
