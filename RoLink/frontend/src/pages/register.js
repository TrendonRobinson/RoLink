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
                                    <input type="text" placeholder="First Name" />
                                </div>
                                <div className="Field">
                                    <input type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            
                            <div className="Field">
                                <input type="email" placeholder="Email" />
                            </div>
                            
                            
                            <div className="Field">
                                <input type="password" placeholder="Password" />
                            </div>

                            <div className="Field">
                                <input type="password" placeholder="Confirm" />
                            </div>

                            <input className="Submit" type="button" value="Submit" />
                        </form>
                    </div>
        </div>
      );
}
