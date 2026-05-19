import React from 'react';
import _ from 'lodash';

import { ChannelList } from './ChannelList.jsx';
import { ChatPane } from './ChatPane.jsx';

export default function ChatPage(props) {
  const {currentUser, messageArray, addMessageFunction} = props;
 
  const channelNames = ["general", "channel-2", "birds", "dank-memes", "random"];

  const currentChannel = "general";

  //count how many messages are in each channel (using external library)
  const channelCounts = _.countBy(messageArray, 'channel')

  console.log("channelCounts: ", channelCounts);

  return (
    <div className="row flex-grow-1">
      <div className="col-3">
      <ChannelList channelNames={channelNames} channelCounts={channelCounts} currentChannel={currentChannel} />
      </div>
      <div className="col d-flex flex-column">
        <ChatPane
          currentUser={currentUser}
          messageArray={messageArray}
          addMessageFunction={addMessageFunction}
        />
      </div>
    </div>
  )
}

// // Slide 34 URL Params
// import React from 'react';
// import _ from 'lodash';
// import {useParams} from 'react-router';

// import { ChannelList } from './ChannelList.jsx';
// import { ChatPane } from './ChatPane.jsx';

// export default function ChatPage(props) {

//   const urlParamsObj = useParams();
//   console.log(urlParamsObj);

//   const {currentUser, messageArray, addMessageFunction} = props;
 
//   const channelNames = ["general", "channel-2", "birds", "dank-memes", "random"];

//   // const currentChannel = "general";
//   const currentChannel = urlParamsObj.channelName;
//   console.log("currentChannel in chatpage: ", currentChannel)

//   //count how many messages are in each channel (using external library)
//   const channelCounts = _.countBy(messageArray, 'channel')

//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//       <ChannelList channelNames={channelNames} channelCounts={channelCounts} currentChannel={currentChannel} />
//       </div>
//       <div className="col d-flex flex-column">
//         <ChatPane
//           currentUser={currentUser}
//           messageArray={messageArray}
//           addMessageFunction={addMessageFunction}
//         />
//       </div>
//     </div>
//   )
// }