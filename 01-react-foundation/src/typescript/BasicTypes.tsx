export const BasicTypes = () => {
  const name: string = 'Slayther';
  const age: number = 21;
  const isActive: boolean = true;
  const powers: string[] = ['Speed', 'Fly', 'Invisibility'];

  return (
    <>
      <h3>Tipos básicos</h3>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <p>Activo: {isActive ? 'True' : 'False'}</p>
      <p>Poderes: {powers.join(', ')}</p>
    </>
  );
};
