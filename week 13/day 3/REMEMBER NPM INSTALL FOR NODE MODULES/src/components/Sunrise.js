import React from "react";

class Sunrise extends React.Component {
  constructor() {
    super();
    this.state = {
      country: "Israel",
      city: "Tel Aviv",
    };
  }

  componentDidMount() {
    fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
      .then((res) => res.json())
      .then((data) => this.setState({ hourSunrise: data.results.sunrise }))
      .catch((e) => console.log(e));
  }

  render() {
    let { country, city, hourSunrise } = this.state;

    return (
      <div>
        <h1>In {country}</h1>
        <p>
          The hour of the sunrise in {city} is {hourSunrise}
        </p>
      </div>
    );
  }
}

export default Sunrise;
