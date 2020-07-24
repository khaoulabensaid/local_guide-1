import React from 'react'
import axios from 'axios'

class Info extends React.Component {
    constructor(props){
        super(props)
    }

    render (){
        return (
            <div style = {{backgroundColor:"#FCFBF9"}}>
                <img src="https://www.kindpng.com/picc/m/495-4952535_create-di
                gital-profile-icon-blue-user-profile-icon.png" alt="" style = {{ width: "200px", height:"200px"}}>
                </img>

                <form  encType="multipart/form-data">
            <div> 
                <label>Select your profile picture:</label> <input type="file"   name="image" />
            </div>
            <div> 
                <input type="submit" name="btn_upload_profile_pic" value="Upload"  onClick = {axios.post("/upload")}/> 
            </div>
            </form>
              
                <h2> Full name: </h2>
                <h2> Location: </h2>
                <h2> Age:  </h2>
                <h2> Gender:  </h2>
                <h2>Email: </h2>
                <h2> Phone:  </h2>
                <div>
                    <h3> languages: </h3>
                    
                </div>
                <button style = {{
                                    color: `#20bf6b`,
                                    textTransform: "uppercase",
                                    background: "#ffffff",
                                    padding: "10px",
                                    width : "120px",
                                    border: `4px solid #20bf6b `,
                                    borderRadius: "6px",
                                    display: "inline-block",
                                }}> Edit </button><br/>
                <button style = {{  marginTop :"2px",
                                    color: `#FF3232`,
                                    textTransform: "uppercase",
                                    background: "#ffffff",
                                    padding: "10px",
                                    width : "120px",
                                    border: `4px solid #FF3232 `,
                                    borderRadius: "6px",
                                    display: "inline-block",
                                }}>Sign out</button>
                
            </div>
        )
    }
}

export default Info;