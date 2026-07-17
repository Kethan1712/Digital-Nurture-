import './App.css';
import office from './office.jpg';

function App() {

  const heading = "Office Space";

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 65000,
      Address: "Hyderabad"
    },
    {
      Name: "WeWork",
      Rent: 80000,
      Address: "Bangalore"
    }
  ];

  return (

    <div className="container">

      <h1>{heading}, at Affordable Range</h1>

      <img
        src={office}
        width="250"
        height="200"
        alt="Office Space"
      />

      {
        officeList.map((item, index) => (

          <div key={index}>

            <h2>Name: {item.Name}</h2>

            <h3
              className={
                item.Rent <= 60000
                  ? "textRed"
                  : "textGreen"
              }
            >
              Rent: Rs. {item.Rent}
            </h3>

            <h3>Address: {item.Address}</h3>

            <hr />

          </div>

        ))
      }

    </div>

  );

}

export default App;