import React from 'react';
import Info from './info.jsx'
import Mission from './mission.jsx'
import Edit from './Edit.jsx'
class GuidePage extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div style = {{marginLeft : "1170px", width : "350px"}}  >
               
                <Info />
            </div>
            // <div>
            //      <Edit/>
            // </div>
        )
    }
}

export default GuidePage;