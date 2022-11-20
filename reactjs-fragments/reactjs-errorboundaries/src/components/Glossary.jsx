import React from "react"; 

const Glossary = (props) => {
    return (
      <dl>
        {props.items.map(item => (
          // Without the `key`, React will fire a key warning
          <React.Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
}

Glossary.defaultProps = {
    items: [{ id: 1, term: "Monitor", description: "To watch movie"}, 
           { id: 2, term: "Guitar", description: "To play music"},
           { id: 3, term: "Cycle", description: "To ride in the park"}
        ],
};

export default Glossary;