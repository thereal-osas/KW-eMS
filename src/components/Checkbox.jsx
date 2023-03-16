import React from 'react'

function Checkbox({ label, isChecked, onChange }) {
  return (
    <div className='flex items-center justify-start mt-10 '>
      <input
        type='checkbox'
        className='form-checkbox h-3 w-3 text-[#e3e3e3] rounded flex-shrink-0'
        checked={isChecked}
        onChange={onChange}
      />
      <span className='ml-2 text-gray-700 text-sm'>{label}</span>
    </div>
  )
}

export default Checkbox

/* 

*/

/* 
function Checkbox({ label, isChecked, onChange }) {
  return (
    <div className='mt-10 justify-start'>
      <label className='inline-flex items-center'>
        <input
          type='checkbox'
          className='form-checkbox h-3 w-3 text-[#e3e3e3] flex-shrink-0'
          checked={isChecked}
          onChange={onChange}
        />
        <span className='ml-2 text-gray-700 text-sm flex-grow'>{label}</span>
      </label>
    </div>
  )
}
*/
