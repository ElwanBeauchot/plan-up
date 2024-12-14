import React from 'react';
import PropTypes from 'prop-types';

export default function Stepper({ stepNumber = 1 }) {
    const steps = {
        1: 'Guest & Dates',
        2: 'Transport',
        3: 'Hotels',
        4: 'Activities',
        5: 'Budget & Extras',
    };
    const stepKeys = Object.keys(steps);
    return (
        <div>
            <ol className="stepper">
                {stepKeys.map((key, index) => {
                    const stepKey = parseInt(key, 10);
                    return (
                        <li
                            key={key}
                            className={`stepper-item ${stepKey <= stepNumber ? 'active' : ''}`}
                        >
                            <div className="stepper-number">{stepKey}</div>
                            {index > 0 && (
                                <div
                                    className={`stepper-line ${stepKey <= stepNumber ? 'active' : ''}`}
                                ></div>
                            )}
                            {stepKey === stepNumber && (
                                <div className="stepper-title">
                                    {steps[key]}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

Stepper.propTypes = {
    stepNumber: PropTypes.number,
};
