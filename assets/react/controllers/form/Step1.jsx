import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Stepper from './Stepper';

export default function Step1({
    adults = 1,
    children = 0,
    dateGo = '',
    dateReturn = '',
}) {
    const [adultNumber, setAdultNumber] = useState(adults);
    const [childrenNumber, setChildrenNumber] = useState(
        children ? children : 0,
    );
    const [dateRange, setDateRange] = useState([dateGo, dateReturn]);
    const [startDate, endDate] = dateRange;

    const incrementAdult = () => setAdultNumber((prev) => prev + 1);
    const decrementAdult = () =>
        setAdultNumber((prev) => (prev > 1 ? prev - 1 : 1));

    const incrementChildren = () => setChildrenNumber((prev) => prev + 1);
    const decrementChildren = () =>
        setChildrenNumber((prev) => (prev > 0 ? prev - 1 : 0));

    const onSubmit = () => {
        console.log(
            'adults : ',
            adultNumber,
            'children : ',
            childrenNumber,
            'dates : ',
            dateRange,
        );
    };

    return (
        <div className={'step-core'}>
            <div>
                <Stepper stepNumber={1} />
            </div>
            <div className={'step1-content'}>
                <div className={'people'}>
                    <p className={'title'}>How many people are travelling ?</p>
                    <div>
                        <p className={'subtitle'}>Adults</p>
                        <p className={'description'}>
                            Select the number of adults (18+)
                        </p>
                        <div className={'input'}>
                            <button
                                className={'button'}
                                onClick={decrementAdult}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    id="minus"
                                >
                                    <path
                                        fill="#1D2424"
                                        d="M6 13a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H6Z"
                                    ></path>
                                </svg>
                            </button>

                            <input
                                type="number"
                                value={adultNumber}
                                onChange={(e) =>
                                    setAdultNumber(Number(e.target.value))
                                }
                            />
                            <button
                                className={'button'}
                                onClick={incrementAdult}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    id="plus"
                                >
                                    <path
                                        d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"
                                        fill="#1D2424"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <h3>Children*</h3>
                        <p>Select the number of children (2-17 years)</p>
                        <div>
                            <button onClick={decrementChildren}>-</button>
                            <input
                                type="number"
                                value={childrenNumber}
                                onChange={(e) =>
                                    setChildrenNumber(Number(e.target.value))
                                }
                            />
                            <button onClick={incrementChildren}>+</button>
                        </div>
                    </div>
                </div>
                <div className={'date'}>
                    <p className={'title'}>When would you like to travel ?</p>
                    <div>
                        <DatePicker
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            isClearable={true}
                        />
                    </div>
                </div>
            </div>
            <div className={'navigation'}>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    );
}

Step1.propTypes = {
    adults: PropTypes.number,
    children: PropTypes.number,
    dateGo: PropTypes.string,
    dateReturn: PropTypes.string,
};
