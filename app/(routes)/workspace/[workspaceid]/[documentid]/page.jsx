import React from 'react'
import SideNav from './_components/SideNav'

function WorkspaceDocuemnt({params}) {
  return (


    <div>
       {/* Side Nav  */}
       <div className=''> 
          <SideNav  params={params} />
      </div>

        {/* Document  */}
        <div className='md:ml-72'>
        Document
      </div>

    </div>
  )
}

export default WorkspaceDocuemnt
