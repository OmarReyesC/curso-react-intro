import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
    return (
        <button className='CreateTodoButton'
            onClick={
                () => {
                    console.log('le diste click');
                    setOpenModal(state => !state);
                }
            }
        >+</button>
    );
};

export { CreateTodoButton };