import React, { useState } from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelList } from './ChannelNav.jsx';
import { ChatPane } from './ChatPane.jsx';
import { ComposeForm } from './ComposeForm.jsx';

import CHAT_HISTORY from '../data/chat_log.json';

//A component!
export default function App(props) {
  //state
  const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
  const channelList = [
    'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
  ]
  const currentChannel = "general";

  const addMessage = (userObj, messageText, channel) => {
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    } 

    // // this below won't work because even though the new message to the
    // // end of the array and call setState, react doesn't know that
    // // the array has changed and doesn't rerender

    // chatMessages.push(newMessage);
    // setChatMessages(chatMessages); //update state and re-render
    // console.log(chatMessages)

    const updateChatMessages = [...chatMessages, newMessage];
    setChatMessages(updateChatMessages); //update state and re-render
    // console.log(chatMessages)
  }


  //what content should my App look like?
  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList channels={channelList} currentChannel={currentChannel} />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
          <ComposeForm addMessageCallback={addMessage} />
        </div>
      </div>
    </div>
  );
}

// // Slide 19, add state for current user
// import React, { useState } from 'react';

// import { HeaderBar } from './HeaderBar.jsx';
// import { ChannelList } from './ChannelNav.jsx';
// import { ChatPane } from './ChatPane.jsx';
// import { ComposeForm } from './ComposeForm.jsx';

// import CHAT_HISTORY from '../data/chat_log.json';

// //A component!
// export default function App(props) {
//   //state
//   const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
//   const [currentUser, setCurrentUser] = useState({userId: null, userName: null, userImg: '/img/null.png'});
//   //initialize as null user

//   const channelList = [
//     'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
//   ]
//   const currentChannel = "general";

//   const addMessage = (userObj, messageText, channel) => {
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": channel
//     } 

//     const updateChatMessages = [...chatMessages, newMessage];
//     setChatMessages(updateChatMessages); //update state and re-render
//   }


//   //what content should my App look like?
//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser}/>
//       <div className="row flex-grow-1">
//         <div className="col-3">
//           <ChannelList channels={channelList} currentChannel={currentChannel} />
//         </div>
//         <div className="col d-flex flex-column">
//           <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
//           <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Slide 22, add state for current user
// import React, { useState } from 'react';

// import { HeaderBar } from './HeaderBar.jsx';
// import { ChannelList } from './ChannelNav.jsx';
// import { ChatPane } from './ChatPane.jsx';
// import { ComposeForm } from './ComposeForm.jsx';

// import CHAT_HISTORY from '../data/chat_log.json';

// //A component!
// export default function App(props) {
//   //state
//   const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
//   const [currentUser, setCurrentUser] = 
//       useState({userId: null, userName: null, userImg: '/img/null.png'});
//   //initialize as null user

//   const channelList = [
//     'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
//   ]
//   const currentChannel = "general";

//   const addMessage = (userObj, messageText, channel) => {
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": channel
//     } 

//     const updateChatMessages = [...chatMessages, newMessage];
//     setChatMessages(updateChatMessages); //update state and re-render
//   }

//   const loginUser = (userObj) => {
//     console.log("logging in as: ", userObj.userName);
//     setCurrentUser(userObj);

//   }

//   //what content should my App look like?
//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} loginUserCallback={loginUser}/>
//       <div className="row flex-grow-1">
//         <div className="col-3">
//           <ChannelList channels={channelList} currentChannel={currentChannel} />
//         </div>
//         <div className="col d-flex flex-column">
//           <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
//           <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//         </div>
//       </div>
//     </div>
//   );
// }

// Slide 25, simplify and use the state vars in App rather than passing as props
// import React, { useState } from 'react';

// import { HeaderBar } from './HeaderBar.jsx';
// import { ChannelList } from './ChannelNav.jsx';
// import { ChatPane } from './ChatPane.jsx';
// import { ComposeForm } from './ComposeForm.jsx';
// import CHAT_HISTORY from '../data/chat_log.json';

// //A component!
// export default function App(props) {
//   //state
//   const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
//   const [currentUser, setCurrentUser] = 
//       useState({userId: null, userName: null, userImg: '/img/null.png'});
//   //initialize as null user

//   const channelList = [
//     'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
//   ]
//   const currentChannel = "general";

//   const addMessage = ( messageText) => {
//     const userObj = currentUser;
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": currentChannel
//     } 

//     const updateChatMessages = [...chatMessages, newMessage];
//     setChatMessages(updateChatMessages); //update state and re-render
//   }

//   const loginUser = (userObj) => {
//     console.log("logging in as: ", userObj.userName);
//     setCurrentUser(userObj);

//   }

//   //what content should my App look like?
//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} loginUserCallback={loginUser}/>
//       <div className="row flex-grow-1">
//         <div className="col-3">
//           <ChannelList channels={channelList} currentChannel={currentChannel} />
//         </div>
//         <div className="col d-flex flex-column">
//           <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
//           <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Slide 30, Make the Channel Selection interactive
// import React, { useState } from 'react';

// import { HeaderBar } from './HeaderBar.jsx';
// import { ChannelList } from './ChannelNav.jsx';
// import { ChatPane } from './ChatPane.jsx';
// import { ComposeForm } from './ComposeForm.jsx';
// import CHAT_HISTORY from '../data/chat_log.json';

// export default function App(props) {
//   //state
//   const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
//   const [currentUser, setCurrentUser] = 
//       useState({userId: null, userName: null, userImg: '/img/null.png'});
//   //initialize as null user

//   const channelList = [
//     'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
//   ]
//   // const currentChannel = "general";
//   const [currentChannel, setCurrentChannel] = useState("general")

//   const updateCurrentChannel = (channelName) =>  {
//     setCurrentChannel(channelName);
//   }

//   const addMessage = ( messageText) => {
//     const userObj = currentUser;
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": currentChannel
//     } 

//     const updateChatMessages = [...chatMessages, newMessage];
//     setChatMessages(updateChatMessages); //update state and re-render
//   }

//   const loginUser = (userObj) => {
//     console.log("logging in as: ", userObj.userName);
//     setCurrentUser(userObj);

//   }

//   //what content should my App look like?
//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} loginUserCallback={loginUser}/>
//       <div className="row flex-grow-1">
//         <div className="col-3">
//           <ChannelList channels={channelList} updateCurrentChannel={updateCurrentChannel} currentChannel={currentChannel} />
//         </div>
//         <div className="col d-flex flex-column">
//           <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
//           <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Slide 34, Add isLiked toggler prop function to update the liked property on the data and pass down 
// // so there aren't 2 versions of state for isLiked, and the official value is held in the App 
// import React, { useState } from 'react';

// import { HeaderBar } from './HeaderBar.jsx';
// import { ChannelList } from './ChannelNav.jsx';
// import { ChatPane } from './ChatPane.jsx';
// import { ComposeForm } from './ComposeForm.jsx';
// import CHAT_HISTORY from '../data/chat_log.json';

// export default function App(props) {
//   //state
//   const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
//   const [currentUser, setCurrentUser] = 
//       useState({userId: null, userName: null, userImg: '/img/null.png'});
//   //initialize as null user

//   const channelList = [
//     'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
//   ]
//   // const currentChannel = "general";
//   const [currentChannel, setCurrentChannel] = useState("general")

//   const updateCurrentChannel = (channelName) =>  {
//     setCurrentChannel(channelName);
//   }

//   const addMessage = ( messageText) => {
//     const userObj = currentUser;
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": currentChannel
//     } 

//     const updateChatMessages = [...chatMessages, newMessage];
//     setChatMessages(updateChatMessages); //update state and re-render
//   }

//   const toggleIsLiked = (timestamp) => {
//     const copyOfChatMessages = chatMessages.map((chatObj) => {
//       if (chatObj.timestamp === timestamp)
//         return {...chatObj, "liked": !chatObj.liked}
//       else 
//       return {...chatObj}
//     }
    
//  ) 
//  setChatMessages(copyOfChatMessages);
// }

//   const loginUser = (userObj) => {
//     console.log("logging in as: ", userObj.userName);
//     setCurrentUser(userObj);

//   }

//   //what content should my App look like?
//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} loginUserCallback={loginUser}/>
//       <div className="row flex-grow-1">
//         <div className="col-3">
//           <ChannelList channels={channelList} updateCurrentChannel={updateCurrentChannel} currentChannel={currentChannel} />
//         </div>
//         <div className="col d-flex flex-column">
//           <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} toggleIsLikedCallback={toggleIsLiked} />
//           <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//         </div>
//       </div>
//     </div>
//   );
// }