import React from 'react';

interface ActivityFactorProps {
    activityFactor: string;
    setActivityFactor: React.Dispatch<React.SetStateAction<string>>;
}

const ActivityFactor: React.FC<ActivityFactorProps> = ({ activityFactor, setActivityFactor }) => {
    const options = [
        { value: '1.2', label: 'Not active (No exercise and sedentary job)' },
        { value: '1.375', label: 'Lightly active (moderate exercise but sedentary job)' },
        { value: '1.55', label: 'Moderately active (intense exercise but sedentary job)' },
        { value: '1.725', label: 'Very active (moderate exercise and active job)' },
        { value: '1.9', label: 'Super active (intense exercise and active job)' },
    ];

    return (
        <div>
            <label htmlFor="activityFactor"></label>
            <select
                id="activityFactor"
                value={activityFactor}
                onChange={(e) => setActivityFactor(e.target.value)}
                style={{ fontSize: '40px' }}
            >
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