import React from 'react'; 
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom'; 


const UserItem = ({user:{avatar_url, login, html_url}}) => {
    return (
            <div className="card text-center">
                <img 
                    src={avatar_url} 
                    alt="" 
                    className="round-img" 
                    style={{ width:'80px'}}
                />

                <h3>{login}</h3>
                
                <div>
                    <Link 
                        to={`/user/${login}`} 
                        className="btn btn-dark btn-sm my-1"
                        rel="noreferrer"
                    >
                            More
                    </Link>
                </div>
            </div>
        )
    
}

UserItem.propTypes ={
    user:Proptypes.object.isRequired
}

export default UserItem
