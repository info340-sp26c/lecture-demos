import React from "react";

//slide 15
export function ChannelList(props) {
    return (
        <nav className="bg-secondary text-light py3">
            <ul>
                <li>General</li>
                <li>Social</li>
                <li>Dank Memes</li>
                <li>Channel-4</li>
            </ul>
        </nav>

    )
}
// // Slide 15a
// export function ChannelList(props) {
//     const CHANNEL_LIST = ['general', 'social', 'dank-memes', 'channel-4'];
  
//     const liArray = CHANNEL_LIST.map((channelNameString) => {
//       const element = <li key={channelNameString}><a className='text-light' href="">{channelNameString}</a></li>
//       return element;
//     })
      
//     return (
//         <nav className="bg-secondary text-light py3">
//             <ul>
//                 {liArray}
//             </ul>
//         </nav>
//       )
//   }

// // Example Slide 26

// export function ChannelList(props) {
//     const CHANNEL_LIST = ['general', 'random', 'dank-memes', 'channel-4'];

//     const currentChannel = 'random';
//     // const currentChannel = props.currentChannel;

//     const liArray = CHANNEL_LIST.map((channelNameString) => {
//         let classList = 'text-light';
//         if (channelNameString === currentChannel){
//             classList= 'text-dark bg-warning'
//         }
//         const element = <li key={channelNameString}><a className={classList} href="">{channelNameString}</a></li>
//         return element;
//     })
    
//     return (
//         <nav className="bg-secondary text-light py3 h-100">
//             <ul>
//                 {liArray}
//             </ul>
//         </nav>
//     )
// }

// // Example Slide 28 
// export function ChannelList(props) {
//     const CHANNEL_LIST = ['general', 'random', 'dank-memes', 'channel-4'];

//     // const currentChannel = 'general';
//     const currentChannel = props.currentChannel;

//     const liArray = CHANNEL_LIST.map((channelNameString) => {
//         let classList = 'text-light';
//         if (channelNameString === currentChannel){
//             classList= 'text-dark bg-warning'
//         }
//         const element = <li key={channelNameString}><a className={classList} href="">{channelNameString}</a></li>
//         return element;
//     })
    
//     return (
//         <nav className="bg-secondary text-light py3 h-100">
//             <ul>
//                 {liArray}
//             </ul>
//         </nav>
//     )
// }