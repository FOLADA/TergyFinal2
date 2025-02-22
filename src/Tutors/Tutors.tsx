import React, { useEffect, useState } from "react";
import "./Tutors.css";
 
import axios from "axios";

const apikey = import.meta.env.VITE_YOUR_CRUD_API_KEY;

const Tutors: React.FC = () => {
  const [tutors, setTutors] = useState<any[]>([]);  
 
 const getUsers = async () => {
   try {
     const res = await axios.get("https://crudapi.co.uk/api/v1/users", {
       headers: {
         Authorization: `Bearer ${apikey}`,
       },
     });

     const users = res.data.items;
     console.log(users);

     const findTutor = users
       .filter((user: any) => user.role === "რეპეტიტორი")
       .sort((a: any, b: any) => b.rating - a.rating);  

     setTutors(findTutor);
   } catch (error: any) {
     console.error("Login Error:", error);
   }
 };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="tutors-div">
        <h1 className="tutors-h1">რეპეტიტორები</h1>
        <div className="pardiv">
          {tutors.length > 0 ? (
            tutors.map((item) => (
              <div key={item.userid} className="cildiv">
                <h1 className="text-4xl">{item.username}</h1>
                <p>{item.desc}</p>
                <p>{"⭐".repeat(item.rating)}</p>
                <button>დაუკავშირდით</button>
              </div>
            ))
          ) : (
            <p>რეპეტიტორი ვერ მოიძებნა.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Tutors;
