import React, { useState } from "react";
import "./styles/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">Learnatorium</label>
      <ul>
        <li>
          <a class="active" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">Stories</a>
        </li>
        <li>
          <a href="#">Test</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Donation</a>
        </li>
      </ul>
    </nav>
  );
}
