import React from "react";

function UserGreeting() {
  return (
    <div>

      <h2>Welcome back</h2>

      <h3>Ticket Booking Page</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Available</td>
          </tr>

          <tr>
            <td>6E202</td>
            <td>Available</td>
          </tr>
        </tbody>

      </table>

      <br />

      <button>Book Ticket</button>

    </div>
  );
}

export default UserGreeting;