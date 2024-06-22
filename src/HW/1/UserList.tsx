export type AddressType = {
    street: string
    city: string
};

export type UserType = {
    id: number
    name: string
    age: number
    address: AddressType
};

export type UserListPropsType = {
    users: UserType[]
};

export const UserList = ({ users }: UserListPropsType) => {
    return (
        <div id={'hw01-users'}>
            <h2> User List:</h2>

            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id} id={`hw01-user-${user.id}`}>
                            <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
                            {user.address.street}, {user.address.city}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
