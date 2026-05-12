import React from 'react';

export function ChannelList(props) {

  // const channels = props.channels;
  // const currentChannel = props.currentChannel;

  const {channels, currentChannel} = props;

  const linkElemArray = channels.map((channelNameString) => {

    let classList = "btn btn-outline-light my-1";
    if(channelNameString === currentChannel) {
      classList = "btn btn-warning"
    }

    const element = (
      <div key={channelNameString}>
        <button className={classList} href="">{channelNameString}</button>
      </div>
    )
    return element;
  })

  return (
    <nav className="text-light bg-secondary h-100 py-3 px-2">
      {linkElemArray}
    </nav>
  )
}

// //Post Lecture, add the Channel navigation (elevate state, etc)
// import React from 'react';

// export function ChannelList(props) {

//   const channels = props.channels;
//   const currentChannel = props.currentChannel;
//   const howToChangeTheChannel = props.howToChangeTheChannel;

//   const handleClick = (event) => {
//     event.preventDefault();
//     const chosenChannel = event.target.name;
//     console.log(chosenChannel)
//     howToChangeTheChannel(chosenChannel);

//   }

//   const linkElemArray = channels.map((channelNameString) => {

//     let classList = "btn btn-outline-light my-1";
//     if (channelNameString === currentChannel) {
//       classList = "btn btn-warning"
//     }

//     const element = (
//       <li key={channelNameString}>
//         <a name={channelNameString} onClick={handleClick} className={classList} href="">{channelNameString}</a>
//       </li>
//     )
//     return element;
//   })

//   return (
//     <nav className="text-light bg-secondary h-100 py-3 channel-nav px-2">
//       {linkElemArray}
//     </nav>
//   )
// }