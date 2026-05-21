import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export function CreateOrEditGame(props) {

    const { addNewGameCallback } = props;
    console.log("addNewGameCallback: ", addNewGameCallback)


    const [gameNameTextValue, setGameNameText] = useState("");
    const [manufacturerNameTextValue, setManufacturerNameTextValue] = useState("");
    const [imgPathTextValue, setImgPathTextValue] = useState("");
    const [manufacturerURLTextValue, setManufacturerURLTextValue] = useState("");
    const [gameDescriptionTextValue, setgameDescriptionTextValue] = useState("");


    const handleGameNameTextChange = (event) => {
        const inputtedGameNameValue = event.target.value;
        setGameNameText(inputtedGameNameValue);
        console.log("gameNameTextValue :", gameNameTextValue)
    }

    const handleManufacturerNameTextChange = (event) => {
        const inputtedManufacturerNameValue = event.target.value;
        setManufacturerNameTextValue(inputtedManufacturerNameValue);
        console.log("manufacturerNameTextValue :", manufacturerNameTextValue)
    }

    const handleimgPathTextChange = (event) => {
        const inputtedImgPathValue = event.target.value;
        setImgPathTextValue(inputtedImgPathValue);
        console.log("inputtedImgPathValue :", inputtedImgPathValue)
    }

    const handleManufacturerURLTextChange = (event) => {
        const inputtedManufacturerURLValue = event.target.value;
        setManufacturerURLTextValue(inputtedManufacturerURLValue);
        console.log("inputtedManufacturerURLValue :", inputtedManufacturerURLValue)
    }

    const handlegameDescriptionTextChange = (event) => {
        const inputtedGameDescriptionValue = event.target.value;
        setgameDescriptionTextValue(inputtedGameDescriptionValue);
        console.log("inputtedManufacturerURLValue :", inputtedGameDescriptionValue)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitting");

        const gameObj = {
            GameName: gameNameTextValue,
            Manufacturer: manufacturerNameTextValue,
            ImagePath: imgPathTextValue,
            ManufacturerSite: manufacturerURLTextValue
        }

        console.log(gameObj)

        addNewGameCallback(gameObj)
        setGameNameText(""); //empty the input!
        setManufacturerNameTextValue(""); //empty the input!
        setImgPathTextValue(""); //empty the input!
        setManufacturerURLTextValue(""); //empty the input!
    }


    return (
        <div className="container">
            
            <Form className="bg-light border border-primary" onSubmit={handleSubmit}>
            <p className="m-1 formtitle">New Game Form</p>
                <Form.Group className="mb-3" controlId="formGameName">
                    <Form.Label className="m-1">Game Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Game Name"
                        value={gameNameTextValue}
                        onChange={handleGameNameTextChange}
                    />
                    <Form.Text className="text-muted m-1" >
                        Examples: "Twister", "Typhoon", "Space Invaders"
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formManufacturerName">
                    <Form.Label className="m-1">Manufacturer Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Manufacturer Name"
                        value={manufacturerNameTextValue}
                        onChange={handleManufacturerNameTextChange}
                    />
                    <Form.Text className="text-muted m-1">
                        Examples: "Adrenaline Arcade", "Raw Thrills", "Bay Tek"
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formImagePath">
                    <Form.Label className="m-1">Image Path</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter img Path"
                        value={imgPathTextValue}
                        onChange={handleimgPathTextChange}
                    />
                    <Form.Text className="text-muted m-1">
                        Examples: "img/Nerf.jpg", "img/PiratesHook.jpg", "img/RedeemMachine.jpg"
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGameDescription">
                    <Form.Label className="m-1">Game Description</Form.Label>
                    {/* <Form.Control as="textarea" rows={3} /> */}
                    <Form.Control
                        type="text"
                        placeholder="Enter Game Description"
                        value={gameDescriptionTextValue}
                        onChange={handlegameDescriptionTextChange}
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formManufacturerURL">
                    <Form.Label className="m-1">Manufacturer Web Site</Form.Label>
                    {/* <Form.Control type="url" placeholder="Enter URL to the Manufacturer site" /> */}
                    <Form.Control
                        type="text"
                        placeholder="URL to Manufacturer site"
                        value={manufacturerURLTextValue}
                        onChange={handleManufacturerURLTextChange}
                    />

                    <Form.Text className="text-muted m-1">
                        Examples: "https://www.icegame.com/games/whack-n-win/", "https://rawthrills.com/nerf-arcade/"
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
