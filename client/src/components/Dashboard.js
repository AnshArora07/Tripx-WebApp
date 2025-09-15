import React from 'react';

const Dashboard= ({ user }) => {
    return (
        <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md p-4 w-64">
            <h1 className="text-xl font-semibold mb-2">Welcome, {user.name}!</h1>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone || 'N/A'}</p>
            <div className="mt-4">
                <h2 className="text-lg font-medium">Previous Bookings</h2>
                {user.bookings && user.bookings.length > 0 ? (
                    <ul className="list-disc list-inside">
                        {user.bookings.map((booking, index) => (
                            <li key={index}>{booking.destination} - {booking.date}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No bookings found.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
