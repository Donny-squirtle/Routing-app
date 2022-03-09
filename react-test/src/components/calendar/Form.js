import React from "react";
function Form(props) {
      return (
        <form onSubmit={(e) => props.submit(e)}>
          <div className="input-group">
            <input className="input-main"
              onChange={(e) => props.update(e.target.value)}
              type="text" placeholder="Planned something?"
              value = {props.value}>
            </input>
            <button type="submit" class="btn-main">+</button>
          </div>
        </form>
      );
}

export { Form };