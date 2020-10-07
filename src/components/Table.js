import React, { useState } from 'react';

export default function UsersTable(props) {
  const [users, setUsers] = useState([{ firstName: 'Jan', lastName: 'Kowalski', id: String(Date.now()) }]);
  const [validation, setValidation] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName } = event.target;

    if (!firstName.value || !lastName.value) {
      setValidation('Imie i nazwisko nie moze byc puste');
    } else {
      setValidation('');

      setUsers(state => [
        ...state,
        {
          firstName: firstName.value,
          lastName: lastName.value,
          id: String(Date.now()),
        },
      ]);
    }
  }

  function handleDelete(event) {
    const usersWithoutDeletedItem = users.filter(({ id }) => id !== event.target.value);
    setUsers(usersWithoutDeletedItem);
  }

  return (
    <>
      <table {...props}>
        <thead>
          <tr>
            <th colSpan="3">Pracownicy</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ firstName, lastName, id }) => (
            <tr key={id}>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>
                {' '}
                <button type="button" value={id} onClick={handleDelete}>
                  Usun uzytkownika
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="Wpisz imię" />
        <input name="lastName" placeholder="Wpisz nazwisko" />
        <button type="submit" disabled={users.length > 4}>
          Dodaj uzytkownika
        </button>
      </form>
      <div css="color: tomato;">{validation}</div>
    </>
  );
}
