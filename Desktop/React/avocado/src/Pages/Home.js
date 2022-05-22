import React from "react";
import axios from "axios";
import  {useState, useEffect} from "react";
// import {Link} from 'react-router-dom';

const Home= () => {
    const[users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
        // console.log("check");
    }, []);

const loadUsers = async() =>{
    const result =  await axios.get("http://localhost:3003/users");
    setUser(result.data);
}

    return (
       
         <div class="row">
             {
                        users.map((user, index) =>(
                            <div class="card">{index+1}
                            <img src={user.url} alt="Denim Jeans" />
                            <h1>{user.name}</h1>
                            <p class="price">{user.username}</p>
                            <p>{user.email}</p>
                            <p><button>Add to Cart</button></p>
                            </div>

                        ))

                        
                    }
                        {/* <div class="card">
                        <img src="/w3images/jeans3.jpg" alt="Denim Jeans" />
                        <h1>Tailored Jeans</h1>
                        <p class="price">$19.99</p>
                        <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                        <p><button>Add to Cart</button></p>
                        </div>
                        <div class="card">
                        <img src="/w3images/jeans3.jpg" alt="Denim Jeans"/>
                        <h1>Tailored Jeans</h1>
                        <p class="price">$19.99</p>
                        <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                        <p><button>Add to Cart</button></p>
                        </div>
                        <div class="card">
                        <img src="/w3images/jeans3.jpg" alt="Denim Jeans" />
                        <h1>Tailored Jeans</h1>
                        <p class="price">$19.99</p>
                        <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                        <p><button>Add to Cart</button></p>
                        </div>
                        <div class="card">
                        <img src="/w3images/jeans3.jpg" alt="Denim Jeans" />
                        <h1>Tailored Jeans</h1>
                        <p class="price">$19.99</p>
                        <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                        <p><button>Add to Cart</button></p>
                        </div> */}
       </div>

    );
};

export default Home;