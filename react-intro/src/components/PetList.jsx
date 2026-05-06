function KittenPuppyMessage(props) {
      const puppyImgUrl = "/img/puppy-kitty.jpg"
    return (
    
      <div>
        <img src={puppyImgUrl} alt="a cute puppy and kitten" />
        <h3>Kitten and Puppy</h3>
      </div>
      )
}

function PuppyMessage(props) {
    const puppyImgUrl = "/img/puppy.jpg"
    return (
    
      <div>
        <img src={puppyImgUrl} alt="a cute puppy" />
        <h3>Puppy</h3>
      </div>
      )
}

export function PetList(props) {
    return (

        <div>
            <ul> 
                
                <KittenPuppyMessage /> {/* A KittenPuppyMessage component */}
                <PuppyMessage /> {/* A PuppyMessage component */}
                <PuppyMessage /> {/* A PuppyMessage component */}
                <PuppyMessage /> {/* A PuppyMessage component */}
            </ul>
        </div>
    );
}