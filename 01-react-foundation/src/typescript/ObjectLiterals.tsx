interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  city: string;
  country: string;
}

export const ObjectLiterals = () => {
  const persona: Person = {
    firstName: 'Slayther',
    lastName: 'Zamora',
    age: 21,
    address: {
      city: 'Portoviejo',
      country: 'Ecuador',
    },
  };
  return (
    <>
      <h3>Objetos literales</h3>
      <pre>{JSON.stringify(persona, null, 2)}</pre>
    </>
  );
};
