const UpdateTask = ({ updateData,changeTask, updateTask, cancelUpdate }) => {
    return (
        <>
        {/* Update Task */}
        <div className='flex w-2/4 mx-auto align-items-center mb-3'>
          <div className='grow mr-2'>
            <input 
              value={ updateData && updateData.title }
              onChange={ (e) => changeTask(e)}
              className='bg-gray-50 border border-second text-gray-900 text-sm rounded-lg focus:ring-0 focus:ring-offset-0 block w-full p-2.5' 
            />
          </div>
          <div className='flex-none'>
            <button 
              className='text-txt bg-success font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
              onClick={updateTask}
              >Update</button>
            <button 
              className='text-txt bg-warning font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
              onClick={cancelUpdate}
              >Cancel</button>
          </div>
        </div>
        </>
    )
}

export default UpdateTask