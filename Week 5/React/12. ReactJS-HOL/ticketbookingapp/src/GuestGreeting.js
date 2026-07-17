import React from "react";

function GuestGreeting() {
  return (
    <div>
      <h2>Please sign up.</h2>

      <h3>Flight Details</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
          </tr>

          <tr>
            <td>6E202</td>
            <td>Chennai</td>
            <td>Mumbai</td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}

export default GuestGreeting;