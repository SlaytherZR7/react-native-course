import { User } from '../interfaces';

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  const { avatar, first_name, last_name, email } = user;
  return (
    <tr>
      <td>
        <img src={avatar} alt={first_name} width='50' />
      </td>
      <td>
        {first_name} {last_name}
      </td>
      <td>{email}</td>
    </tr>
  );
};
