
//Slide End of slides (28)... if you want show how to get to the url to the image you 
// saved in the firebase store for the specific user 
// you have the url in the firebase store and it points to the image you saved in the 
// firebase db.
import React, { useState, useEffect } from 'react';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';

export default function UserImageInFBStore(props) {
  //convenience
  const currentUser = props.currentUser;
  const displayName = props.currentUser.userName;

  const [imageURL, setImageURL] = useState(undefined)

  const db = getDatabase();
  const userImgURL = dbRef(db, "userData/" + currentUser.userId + "/imgUrl")
  console.log("Were' rendering the userimage component!!!");

  useEffect(() => {

    onValue(userImgURL, (snapshot) => {
      const imageURL = snapshot.val();
      console.log("imageURL :", imageURL);
      setImageURL(imageURL)
    })

  });

  return (
    <div className="container">
      <h2>
        {props.currentUser.userName && displayName + "'s"} Image from Firebase Store
      </h2>
      <img src={imageURL} alt="user avatar preview" className="mb-2 userstoreimage" />
    </div>
  )
}

