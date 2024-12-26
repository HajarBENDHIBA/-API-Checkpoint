import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setListOfUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold m-10 text-center text-gray-700">UserList</h1>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {listOfUsers.map(user => (
                    <a href="#" key={user.id} className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-700 sm:text-xl mb-4">{user.name}</h3>
                                <p className="mt-1 text-sm font-medium text-gray-600">Username: {user.username}</p>
                                <p className="mt-1 text-sm font-medium text-gray-600">Email: {user.email}</p>
                                <p className="mt-1 text-sm font-medium text-gray-600">Website: <a href={`http://${user.website}`} className="text-blue-500 underline">{user.website}</a></p>
                                <p className="mt-1 text-sm font-medium text-gray-600">Address: {user.address.street}, {user.address.suite}, {user.address.zipcode}</p>
                            </div>
                        </div>

                        <dl className="mt-6 flex gap-4 sm:gap-6">
                            <div className="flex flex-col-reverse">
                                <dd className="text-sm text-gray-500">{user.address.city}</dd>
                                <dt className="text-sm font-medium text-gray-600">City</dt>
                            </div>

                            <div className="flex flex-col-reverse">
                                <dd className="text-sm text-gray-500">{user.phone}</dd>
                                <dt className="text-sm font-medium text-gray-600">Phone</dt>
                            </div>
                        </dl>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default UserList;
