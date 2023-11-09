import React, { Component } from "react";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Example3 Component</h2>
        <ul>
          {this.props.experiences.map((experience, index) => (
            <li key={index}>
              <a href={experience.url}>
                <img src={experience.logo} alt={experience.companyName} />
              </a>
              <strong>{experience.companyName}</strong>
              <ul>
                {experience.roles.map((role, subIndex) => (
                  <li key={subIndex}>
                    <div>
                      <strong>{role.title}</strong>
                      <p>{role.description}</p>
                      <p>Location: {role.location}</p>
                      <p>
                        Dates: {role.startDate} to {role.endDate}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example3;
