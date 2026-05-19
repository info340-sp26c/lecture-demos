import React from 'react';

export function ChannelList(props) {
  const { channelNames, channelCounts } = props;

  const currentChannel = props.currentChannel;
  console.log("current channel in the channellist :", currentChannel)


  //render the links
  const liArray = channelNames.map((channelNameString) => {
    const count = channelCounts[channelNameString] || 0;

    let classList = "btn btn-sm btn-outline-light my-1";
    if (channelNameString === currentChannel) {
      classList = "btn btn-sm btn-warning"
    }


    return (
      <div key={channelNameString} >
        <a
          className={classList}
          name={channelNameString}
          href={"/" + channelNameString}
        >
          {channelNameString} ({count})
        </a>
      </div>
    );
  })
  return (
    <nav className="channel-nav h-100 bg-secondary px-0 py-3">
      {liArray}
    </nav>
  )
}

// // Slide 36, update the Links in the Channel Page to update them to have the state included for each channel
// import React from 'react';
// import {Link} from 'react-router';

// export function ChannelList(props) {
//   const { channelNames, channelCounts } = props;

//   const currentChannel = props.currentChannel;
//   console.log("current channel in the channellist :", currentChannel)


//   //render the links
//   const liArray = channelNames.map((channelNameString) => {
//     const count = channelCounts[channelNameString] || 0;

//     let classList = "btn btn-sm btn-outline-light my-1";
//     if (channelNameString === currentChannel) {
//       classList = "btn btn-sm btn-warning"
//     }


//     return (
//       <div key={channelNameString} >
//         <Link
//           className={classList}
//           name={channelNameString}
//           to={"/chat/" + channelNameString}
//         >
//           {channelNameString} ({count})
//         </Link>
//       </div>
//     );
//   })
//   return (
//     <nav className="channel-nav h-100 bg-secondary px-0 py-3">
//       {liArray}
//     </nav>
//   )
// }