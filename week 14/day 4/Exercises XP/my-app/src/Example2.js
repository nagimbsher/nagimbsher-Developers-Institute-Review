import React, { Component } from "react";

class Example2 extends Component {
  render() {
    return (
      <div>
        <h2>Example2 Component</h2>
        <ul>
          {this.props.skills.map((skill, index) => (
            <li key={index}>
              <strong>{skill.Area}</strong>
              <ul>
                {skill.SkillSet.map((subSkill, subIndex) => (
                  <li key={subIndex}>
                    {subSkill.Name} (Hot: {subSkill.Hot ? "Yes" : "No"})
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

export default Example2;
