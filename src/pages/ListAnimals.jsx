import React from "react";
import { gql, useQuery } from "@apollo/client";

export const FETCH_ANIMALS = gql`
  query ListAnimals {
    listAnimals {
      Animals {
        id
        name
        primary_color
        primary_color_group
      }
    }
  }
`;
function ListAnimals() {
  const { loading, data } = useQuery(FETCH_ANIMALS);

  const animals = data?.listAnimals?.Animals || [];

  if (loading) {
    return <div> Loading... </div>;
  }
  return (
    <div>
      <h1>Animals</h1>
      {animals.map((item) => {
        return (
          <div key={item.id} data-testid="animal">
            <span> {item.name} </span>
            <br />
            <span> id: {item.id}</span>
            <br />
            <span>color: {item.primary_color} </span>
          </div>
        );
      })}
    </div>
  );
}

export default ListAnimals;
