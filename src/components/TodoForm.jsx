import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
  const [input,
    setInput] = useState(props.edit
    ? props.edit.value
    : '');

  const inputRef = useRef(null);
  const [text,
    setText] = useState('')

  useEffect(() => {
    inputRef
      .current
      .focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input !== "") {
      setText('')
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });
    } else {
      setText('napisz cos')
    }
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit
        ? ( <div className='todo-form-main'> 
            <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'/>
          
         <button onClick = {handleSubmit} className='cssbuttons-io-button uppdate'><span>Update</span> </button>
        </div>
        ) : (
          <>
            <div className='todo-form-main'>
              <input
                placeholder='Add a todo'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef}
                className='todo-input'/>
              <button onClick={handleSubmit} className="cssbuttons-io-button add"><span>Add</span></button>
            </div>
          </>
        )}
      <p className='todo-info'>{text}</p>
    </form>
  );
}

export default TodoForm;
