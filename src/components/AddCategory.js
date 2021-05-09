import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorie}) => {

    const [inputValue, setInputValue] = useState('');

    const handleImputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0) {
            setCategorie(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder=" búsqueda..."
                type="text"
                value={inputValue}
                onChange={handleImputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorie: PropTypes.func.isRequired
}
