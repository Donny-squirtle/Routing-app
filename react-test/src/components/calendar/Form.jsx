import React from 'react';
import PropTypes from 'prop-types';

function Form({
  submit, update, value, isEdit, currentEvent, updateOnEditForm, handleEditFormSubmit,
}) {
  return (
    <div>
      {isEdit ? (
        <form onSubmit={() => handleEditFormSubmit()}>
          <div className="input-group">
            <input
              className="input-page input-main"
              type="text"
              value={currentEvent}
              onChange={(e) => updateOnEditForm(e.target.value)}
              placeholder="Planned something?"
            />
            <button type="submit" className="btn-main">Save</button>
          </div>
        </form>
      ) : (
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
      )}
    </div>
  );
}
Form.propTypes = {
  submit: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
  currentEvent: PropTypes.string.isRequired,
  updateOnEditForm: PropTypes.func.isRequired,
  handleEditFormSubmit: PropTypes.func.isRequired,
};

export default Form;
