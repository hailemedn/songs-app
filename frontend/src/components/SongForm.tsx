import { useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";

function SongForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createSong({text}))
    setText('')
  };

  return (
    <>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="">Song</label>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit">Add song</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default SongForm;
