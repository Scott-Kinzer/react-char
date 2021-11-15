import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
  } from "react-router-dom";
import { LoginFormContainer } from '../../LoginForm/LoginFormContainer';
export const Auth = () => {
    
    return (
     <div>
        <Routes>
          <Route path="/auth" element={() => <div>HIIIII REG</div>} />
      </Routes>
      <Routes>
          <Route path="/login" element={<LoginFormContainer></LoginFormContainer>} />
      </Routes>
      </div>
    )
}






