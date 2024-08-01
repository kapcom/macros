import React from 'react';

const ActivityFactor: React.FC = () => {
    const options = [
        { value: 'not_active', label: 'Not active (No exercise and sedentary job)' },
        { value: 'lightly_active', label: 'Lightly active (moderate exercise but sedentary job)' },
        { value: 'moderately_active', label: 'Moderately active (intense exercise but sedentary job)' },
        { value: 'very_active', label: 'Very active (moderate exercise and active job)' },
        { value: 'super_active', label: 'Super active (intense exercise and active job)' },
    ];

    return (
        <div>
            <label htmlFor="activityFactor"></label>
            <select id="activityFactor" style={{ fontSize: '40px' }}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ActivityFactor;
