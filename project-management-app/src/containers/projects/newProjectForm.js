import "./newProjectForm.module.css";
import { React, useState } from "react";

function NewProjectForm() {
    const [projectName, setProjectName] = useState("");
    const [email, setEmail] = useState("");
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
            projectName,
            email,
            selectedOption,
            status,
            image,
            url,
            comments
        );
        // Add your form submission logic here
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
        <div className="NewProjectForm">
            <h1>New Project</h1>
            <fieldset>
                <form action="#" method="get">
                    <label for="projectname">
                        Project Name*
                    </label>
                    <input
                        type="text"
                        name="projectname"
                        id="projectname"
                        value={projectName}
                        onChange={(e) =>
                            setProjectName(e.target.value)
                        }
                        placeholder="Enter Project Name"
                        required
                    />
                    <label for="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Enter email"
                        required
                    />
                    
                    <label for="Project Status">
                        Project Status
                    </label>
                    <input
                        type="checkbox"
                        name="project status"
                        id="To Do"
                        checked={status.toDo === true}
                        onChange={(e) =>
                            handleStatusChange("To Do")
                        }
                    />
                    To Do
                    <input
                        type="checkbox"
                        name="Project Status"
                        id="In Progress"
                        checked={status.inProgress === true}
                        onChange={(e) =>
                            handleStatusChange("In Progress")
                        }
                    />
                    In Progress
                    <input
                        type="checkbox"
                        name="Project Status"
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
                        placeholder="additional project comments..."
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

export default newProjectForm;
