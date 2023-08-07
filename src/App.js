import { func } from "prop-types";
import React from "react";
import { useState } from "react";

// if chat request sent or scheduled, or thanks sent, input date
function Form(){
    
    return <div className="form">
        <h2>Add a new connection</h2>
        <form name="connetionEntry">
            <div>
            <div>
                <label for="nameInput">Name</label>
                <input type="text" id="nameInput" name="nameInput" required minLength="4" placeholder=""></input>
            </div>
            <div>
                <label for="companyInput">Affiliation</label>
                <input type="text" id="companyInput" name="companyInput" required minLength="4"></input>
            </div>
            <div>
                <label for="keywordsInput">Keywords (separated by space)</label>
                <input type="text" id="keywordsInput" name="keywordsInput"></input>
            </div>
            <div>
                <label for="dateAddedInput">Date Added</label>
                <input type="date" id="dateAddedInput" required pattern="\d{4}-\d{2}-\d{2}"></input>
            </div>
            <div>
                <label for="contactInput">Contact</label>
                <input type="url" pattern="https://.*"></input>
            </div>
            <div>
                <label for="roleURLInput">Role</label>
                <input type="text" id="roleURLInput"></input>
            </div>
            <div>
                <label for="sourceInput">Source</label>
                <input type="text" id="sourceInput"></input>
            </div>
            <div>
                <label for="notesInput">Notes</label>
                <input type="text" id="notesInput"></input>
            </div></div>
            {/* <div className="formButtom"> */}
                <button for="connetionEntry" value="submit">Submit</button>
            {/* </div> */}
        </form>
    </div>
}

function Person({
    name,company,keywords,dateAdded,contact,contactL,role,roleUrl,source,notes,chatRequest,thankYou
}){
    // code for number <p>
    // code for keywords: li
    // date added 
    // chatRequest choice
    // thankYou choice

    return <tr>
        <td className="number">
            {/* <p>#</p> */}
        </td>
        <td className="name">
            <p>{name}</p>
        </td>
        <td className="company">
            <a href="#">{company}</a>
        </td>
        <td className="keywords">
            <ul>
                {/* <li></li> */}
            </ul>
        </td>
        <td className="dateAdded">
            {/* <p>1995-9-4</p> */}
        </td>
        <td className="contact">
            <a href={contactL}>{contact}</a>
        </td>
        <td className="role">
            <a href={roleUrl}>{role}</a>
        </td>
        <td className="source">
            <p>{source}</p>
        </td>
        <td className="notes">
            <p>{notes}</p>
        </td>
        <td className="chatRequest">
            <div>
                <input type="radio" id="notSent" name="chat" value="not sent" checked/>
                <label for="notSent">Not Sent</label>
            </div>
            <div>
                <input type="radio" id="sentRequest" name="chat" value="sent"/>
                <label for="sentRequest">Sent</label>
            </div>
            <div>
                <input type="radio" id="scheduled" name="chat" value="scheduled"/>
                <label for="scheduled">Scheduled</label>
            </div>
        </td>
        <td className="thankYou">
            <div>
                <input type="radio" id="sendThanks" name="thankYou" value="not sent" checked/>
                <label for="sendThanks">Not Sent</label>
            </div>
            <div>
                <input type="radio" id="thanksSent" name="thankYou" value="sent"/>
                <label for="sentRequest">Sent</label>
            </div>
        </td>
    </tr>
}

function Table(){
    return <div>
        <h1 className="tableName">Network</h1>

        <table>
            <thead>
                <tr>
                    <th className="number">
                        <h3>#</h3>
                    </th>
                    <th className="name">
                        <h3>Name</h3>
                    </th>
                    <th className="company">
                        <h3>Affiliation</h3>
                    </th>
                    <th className="keywords">
                        <h3>Keywords</h3>
                    </th>
                    <th className="dateAdded">
                        <h3>Added On</h3>
                    </th>
                    <th className="contact">
                        <h3>Contact</h3>
                    </th>
                    <th className="roleURL">
                        <h3>Role</h3>
                    </th>
                    <th className="source">
                        <h3>Source</h3>
                    </th>
                    <th className="notes">
                        <h3>Notes</h3>
                    </th>
                    <th className="chatRequest">
                        <h3>Chat Request</h3>
                    </th>
                    <th className="thankYou">
                        <h3>Thank You Note</h3>
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className="number">
                        <p>1</p>
                    </td>
                    <td className="name">
                        <p>Denisse "Scar" Del Monte</p>
                    </td>
                    <td className="company">
                        {/* <p>100Devs</p> */}
                        <a href="#">100Devs</a>
                    </td>
                    <td className="keywords">
                        <ul>
                            <li>Tech For Good</li>
                            <li>Green</li>
                            <li>SDGs</li>
                        </ul>
                    </td>
                    <td className="dateAdded">
                        <p>1995-9-4</p>
                    </td>
                    <td className="contact">
                        <a href="https://linktr.ee/wo1vin">LinkTree</a>
                    </td>
                    <td className="role">
                        <p>Software Engineer</p>
                    </td>
                    <td className="source">
                        <p>Self</p>
                    </td>
                    <td className="notes">
                        <p>wants to work on SDGs, climate, or biodiversity</p>
                    </td>
                    <td className="chatRequest">
                        <div> 
                            <input type="radio" id="notSent" name="chat" value="not sent" checked/>
                            <label for="notSent">Not Sent</label>
                        </div>
                        <div>
                            <input type="radio" id="sentRequest" name="chat" value="sent"/>
                            <label for="sentRequest">Sent</label>
                        </div>
                        <div>
                            <input type="radio" id="scheduled" name="chat" value="scheduled"/>
                            <label for="scheduled">Scheduled</label>
                        </div>
                    </td>
                    <td className="thankYou">
                        <div>
                            <input type="radio" id="sendThanks" name="thankYou" value="not sent" checked/>
                            <label for="sendThanks">Not Sent</label>
                        </div>
                        <div>
                            <input type="radio" id="thanksSent" name="thankYou" value="sent"/>
                            <label for="sentRequest">Sent</label>
                        </div>
                    </td>
                </tr>
                {/* <Person /> */}
            </tbody>
        </table>
    </div>
}

export default function Page(){
    

    return <div>
        <Table />
        <Form />
    </div>
}