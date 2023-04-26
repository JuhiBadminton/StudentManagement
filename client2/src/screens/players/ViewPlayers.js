// import React from "react";

// const students = [
//   {
//     name: "John Doe",
//     age: 18,
//     gender: "Male",
//     profilePic: "https://picsum.photos/id/1015/200/300",
//     skillLevel: "Intermediate",
//     membershipType: "Gold",
//     membershipExpirationDate: "2023-06-30"
//   },
//   {
//     name: "Jane Smith",
//     age: 21,
//     gender: "Female",
//     profilePic: "https://picsum.photos/id/1018/200/300",
//     skillLevel: "Advanced",
//     membershipType: "Silver",
//     membershipExpirationDate: "2023-08-15"
//   },
//   // Add more students as needed
// ];

// const StudentCard = ({ student }) => {
//   return (
//     <div className="student-card">
//       <img src={student.profilePic} alt={student.name} />
//       <div className="student-info">
//         <h3>{student.name}</h3>
//         <p>Age: {student.age}</p>
//         <p>Gender: {student.gender}</p>
//         <p>Skill Level: {student.skillLevel}</p>
//         <p>Membership Type: {student.membershipType}</p>
//         <p>Membership Expiration Date: {student.membershipExpirationDate}</p>
//       </div>
//     </div>
//   );
// };

// const StudentList = ({ students }) => {
//   return (
//     <div className="student-list">
//       {students.map((student) => (
//         <StudentCard key={student.name} student={student} />
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="app">
//       <h1>Badminton Academy</h1>
//       <StudentList students={students} />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import Card from 'react-bootstrap/Card';
import image from './avatar.png';
import "../../styles/players/viewPlayers.css";

// const studentProfiles = [
//   {
//     name: 'John Doe',
//     age: 8,
//     level: 'Intermediate',
//     fees: 'Paid',
//     plan: 'Yearly',
//     planStartDate: '01/04/2023'
//   },
//   {
//     name: 'Jane Doe',
//     age: 10,
//     level: 'Beginner',
//     fees: 'Not Paid',
//     plan: 'Monthly',
//     planStartDate: '01/03/2023'
//   },
//   {
//     name: 'Bob Smith',
//     age: 14,
//     level: 'Advanced',
//     fees: 'On Trial',
//     plan: 'Quaterly',
//     planStartDate: '01/04/2023'
//   },
// ];

const  getStudents = async () => {
   
}    
function ViewPlayers(props) {
    var students = getStudents();
    // console.log(students);
// function Avatar(props) {
//     return (
//        <div className="avatar">
//           <img src={props.image} alt="user avatar" />
//        </div>
//     );
//  }
 
//  function NameHolder(props) {
//     return (
//        <div className="nameHolder">
//           <h1>{props.name}</h1>
//           <h2>{props.career}</h2>
//        </div>
//     );
//  }
 
//  function Info(props) {
//     return (
//        <div className="info">
//           <span>Pens: {props.pens}</span>
//           <span>Posts: {props.posts}</span>
//           <span>Projects: {props.projects}</span>
//        </div>
//     );
//  }
 
 
//  function Followers(props) {
//     return (
//        <div className="followers">
//           <div>
//              <h1>followers</h1>
//              <h2>{props.followers}</h2>
//           </div>
//           <div>
//              <h1>following</h1>
//              <h2>{props.following}</h2>
//           </div>
//        </div>
//     );
//  }
 
//  function Skills(props) {
//     let startKey = 0;
//     return (
//        <div className="skills">
//           {
//              props.skills.map(elem => {
//                 return <span key={startKey++}>{elem}</span>
//              })
//           }
//        </div>
//     );
//  }
  return (
    <div>
      {props.players.map((profile, index) => (
        // <Card key={index}>
        //   <Card.Body>
        //     <Card.Title>{profile.name}</Card.Title>
        //     <Card.Subtitle>{`Age: ${profile.age}`}</Card.Subtitle>
        //     <Card.Text>{`Level: ${profile.level}`}</Card.Text>
        //     <Card.Text>{`Coach: ${profile.coach}`}</Card.Text>
        //   </Card.Body>
        // </Card>
        <div id="card">
        <div className="personal">
        <div className="avatar">
          <img src={image} alt="user avatar" />
       </div>
       <div className="nameHolder">
          <h1>{profile.name}</h1>
          <h2>{profile.level}</h2>
       </div>
        </div>
        <div className="info">
            <div className="info2">
                <span>Age: {profile.age}</span>
                <span>Plan: {profile.plan}</span>
            </div>
            <div className="info2">                
                <span>Fees: {profile.fees}</span>
                <span>Plan Start Date: {profile.startDate}</span>
            </div>
        </div> 
        {/* <Info pens={this.props.pens} posts={this.props.posts} projects={this.props.projects} /> */}
        {/* <Skills skills={this.props.skills} /> */}
        {/* <Followers followers={this.props.followers} following={this.props.following} /> */}
        {/* <RandomizeButton /> */}
     </div>
      ))}
    </div>
  );
}

export default ViewPlayers;
