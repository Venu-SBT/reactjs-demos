import React from "react"; 
import CustomFragment from "./CustomFragment";

const CustomGlossary = (props) => {
    return (
      <dl>
        {props.items.map(item => (
          // Without the `key`, React will fire a key warning
          <CustomFragment key={item.id} displayName="CF">
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </CustomFragment>
        ))}
      </dl>
    );
}

CustomGlossary.defaultProps = {
    items: [{ id: 1, term: "Monitor", description: "To watch movie"}, 
           { id: 2, term: "Guitar", description: "To play music"},
           { id: 3, term: "Cycle", description: "To ride in the park"}
        ],
};

export default CustomGlossary;