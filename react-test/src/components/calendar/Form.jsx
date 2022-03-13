import React from 'react';
import PropTypes from 'prop-types';

function Form({ submit, update, value }) {
  return (
    <form onSubmit={(e) => submit(e)}>
      <div className="input-group">
        <input
          className="input-page input-main"
          type="text"
          onChange={(e) => update(e.target.value)}
          placeholder="Planned something?"
          value={value}
        />
        <button type="submit" className="btn-main">+</button>
      </div>
    </form>
  );
}
Form.propTypes = {
  submit: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Form;
