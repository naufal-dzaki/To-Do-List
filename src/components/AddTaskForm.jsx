const AddTaskForm = ({newTask, setNewTask, addTask}) => {
    return (
        <>
        {/* Add Task */}
        <div className='flex w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto align-items-center mb-3'>
          <div className='grow mr-1.5 md:mr-2'>
            <input
              value={newTask}
              onChange={ (e) => setNewTask(e.target.value) } 
              className='bg-gray-50 border border-second text-gray-900 text-sm rounded-lg focus:ring-0 focus:ring-offset-0 block w-full p-2.5' 
              />
          </div>
          <div className='flex-none'>
            <button
              onClick={addTask} 
              className='text-txt bg-success font-medium rounded-lg text-sm px-5 py-2.5 mb-2'
              >Add Task</button>
          </div>
        </div>
        </>
    )
}

export default AddTaskForm