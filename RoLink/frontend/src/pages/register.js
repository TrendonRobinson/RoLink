import axios from "axios";
import { useState, useEffect } from 'react';

import "../css/register.css"

export default function Register(Props) {

    return (
        <div className="background">
            <div class="signup-box">
                        <h1>Sign Up</h1>
                        <form>
                            <div className="Name">
                                <div className="Field">
                                    <label>First Name</label>
                                    <input type="text" placeholder="" />
                                </div>
                                <div className="Field">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="" />
                                </div>
                            </div>
                            
                            <div className="Field">
                                <label>Email</label>
                                <input type="email" placeholder="" />
                            </div>
                            
                            
                            <div className="Field">
                                <label>Password</label>
                                <input type="password" placeholder="" />
                            </div>

                            <div className="Field">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="" />
                            </div>

                            <input className="Submit" type="button" value="Submit" />
                        </form>
                    </div>
        </div>
      );
}
