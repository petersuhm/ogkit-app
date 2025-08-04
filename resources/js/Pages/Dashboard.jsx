import React from 'react';
import { useForm } from '@inertiajs/react';

const Dashboard = () => {
    const { post, processing } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post('/logout');
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            
            <form onSubmit={handleLogout}>
                <button type="submit" disabled={processing}>
                    {processing ? 'Logging out...' : 'Logout'}
                </button>
            </form>
        </div>
    );
};

export default Dashboard;
