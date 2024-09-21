import React, { useState } from "react";

import { newTaskForm } from "../../components/newTaskForm"; /* check pathway */
import { TileList } from "../../components/TileList"; /* check pathway */

export const taskManager = () => {
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add task</h2>
      </section>
      <hr />
      <section>
        <h2>Tasks</h2>
      </section>
    </div>
  );
};
