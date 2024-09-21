import React, { useState } from 'react';
import styles from './Input.module.css';

function Input() {
  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay in touch.</h2>
        <p>Sign up to recieve notification updates on your Project's progress!</p>
        <form>
          <label for="email">Email: </label>
          <input onChange={this.handleUserInput}id="email" type="text"/>
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input: </h2>
        <h4></h4>
      </div>
    </>
  );
}

export default Input;
