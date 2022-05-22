import { axios } from "axios";
import React, {useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';




const AddItem = () =>{
  const navigate = useNavigate();
  //        const[ item, setItem] = useState({
              
  //          "

  //             name:"",
  //             username:"",
  //             email:""
               
  //   });
  const {id} = useParams();

    const [name, setName] = useState();
   const [username, setUsername] = useState();
   const [email, setEmail] = useState();
    const [checkbox, setCheckbox] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState();
    const postData = () => {
      console.log(name);
      console.log(username);
      console.log(email);
      console.log(checkbox);
      console.log(selectedFile);
  }



    const changeHandler = (event) => {
      setSelectedFile(event.target.files[0]);
      
  };

    
    


      console.log(name);
      console.log(username);
      console.log(email);
      console.log(checkbox);
      console.log(selectedFile);

  

let onFormSubmit = async (e) => {
  e.preventDefault();
  try {
    let res = await fetch("http://localhost:3003/users" +id, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        username:username,
        email: email,
        checkbox: checkbox,
        selectedFile:selectedFile,
      }),
    });
    let resJson = await res.json();
    if (res.status === 200) {
      setName("");
      setUsername("");
      setEmail("");
      setCheckbox("");
      setSelectedFile("");
      setMessage(" created successfully");
    } else {
      setMessage("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
};
 
 
  

  return(
      <div className="container">

 
      <div className="main">
        <div className="main-content">
       
              <div className="client">
                  <div class="add-client">
                      <p>Create Table</p>
                    </div> 
                </div>

            <div className="containers">
                    <form onSubmit = {e=> onFormSubmit(e) }>
                   
                      <div className="row">
                      <div className="col-25">
                        <label >Layout:</label>
                      </div>
                      <div class="col-75">
                        <select name="layout" value={name} onChange={e => setName(e.target.value)}>
                          <option value="none" selected disabled hidden>Select Layout</option>
                          <option value="A4">A4</option>
                          <option value="Posters">Posters</option>
                        
                        </select>
                      </div>
                    </div>

                    <div className="row-1">
                      <div className="col-25">
                        <label >Name</label>
                      </div>
                      <div className="col-75">
                        <input type="text" name="title" placeholder="Enter Name"  value={username} onChange={(e) => setUsername(e.target.value)}/>
                      </div>
                    </div>
                
                  
                    <div className="row-1">
                        <div className="col-25">
                          <label >Capacity</label>
                        </div>
                        <div className="col-75">
                          <input type="text"  name="capacity"  placeholder="Enter number of capacity" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                      </div>
                      
                     <div className="row-1">
                        <div className="col-25">
                          <label >status</label>
                         
                        </div>
                        <div className="col-75">
                          <input type="checkbox" value={checkbox}  onChange={(e) => setCheckbox(!checkbox)} 
          />
                        </div>
                      </div> 
                      
                    <div className="row-1">
                        <div className="col-25">
                          <label >Image</label>
                        </div>
                        <div className="col-75">
                          <input type="file" name="file" value={selectedFile} onChange={(e) => setSelectedFile(e.target.value)}   />
                        </div>
                      </div> 
                    
                    <br></br>
                    <div className="row-1 row-submit">
                      <button type="submit" class="create" onClick={e =>onFormSubmit(e)} >Create Table</button>
                      <button type="submit" class="cancel"  >Cancel</button>
                    </div>
                  
                    </form>
                  </div>

            </div>
          </div>
                
              </div>


         
  );

}

export default AddItem;