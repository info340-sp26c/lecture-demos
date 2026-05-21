import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';



export function FECGames(props) {

    // State variables for the two filters (Games and Manufacturers)
    const [gameFilter, setGameFilter] = useState("All")
    const [manufacturerFilter, setManufacturerFilter] = useState("All")
    const [viewToggleValue, setViewToggleValue] = useState("cards")

    // handlers for when one of the filter options is selected in the filter dropdowns
    const handleGameManufacturerFilterClick = (event) => {
        // console.log("changed the filter", event);
        // console.log("event.target.value :", event.target.value);
        setManufacturerFilter(event.target.value);
    }

    const handleGameFilterClick = (event) => {
        // console.log("changed the Game filter", event);
        // console.log("event.target.value :", event.target.value);
        setGameFilter(event.target.value);
    }

    const handleToggleViewChange = (event) => {
        setViewToggleValue(event.target.value)
        console.log(event.target.value)

    }

    // Allows for interdependent filtering because we check through all of the filter state vars 
    function filterBy(gameObj) {
        if (
            (gameFilter !== "All" && gameFilter !== gameObj.GameName) ||
            (manufacturerFilter !== "All" && manufacturerFilter !== gameObj.Manufacturer
            )

        ) {
            return false;
        } else {
            return true;
        }
    }

    // First filter the list of game cards based on the current filter setting
    // This filtering includes all the state based filters
    const filteredFECGames = props.FECGameList.filter(filterBy);

    // Then sort the filtered list of game cards based alphabetical order
    const FilteredSortedFECGames = filteredFECGames.sort((g1, g2) => {
        if (g1.GameName < g2.GameName) { return -1 }
        if (g1.GameName > g2.GameName) { return 1 }
        return 0;
    });


    // This creates the array of filter options for Games in the drop down
    const FECGamesFilterOptions = FilteredSortedFECGames.map((gameObj) => {
        const { GameName } = gameObj;
        const optionElement = <Dropdown.Item as="button" value={GameName} key={GameName} onClick={handleGameFilterClick}>{GameName}  </Dropdown.Item>
        return optionElement
    });
    // This pre-appends "All" at the top of the list of filter options for Games
    FECGamesFilterOptions.unshift(<Dropdown.Item as="button" value="All" key="All" onClick={handleGameFilterClick}>All Games </Dropdown.Item>)


    // This creates the array of filter options for Manufacturers in the drop down. It wouldn't really be necessary to filter out dupes anymore
    // because the Manufacturers json is already deduped.
    const uniqueManufacturers = [];
    const FECManufacturersFilterOptions = FilteredSortedFECGames.map((gameObj) => {
        const { Manufacturer } = gameObj;
        const optionElement = <Dropdown.Item as="button" value={Manufacturer} key={Manufacturer} onClick={handleGameManufacturerFilterClick}>{Manufacturer} </Dropdown.Item>
        return optionElement
    }).filter((optionElement) => {
        const isDuplicate = uniqueManufacturers.includes(optionElement.key);
        if (!isDuplicate) {
            uniqueManufacturers.push(optionElement.key);
            return true;
        }
        return false;
    });
    // This pre-appends "All" at the top fo the list of filter options for Manufacturers
    FECManufacturersFilterOptions.unshift(<Dropdown.Item as="button" value="All" key="All" onClick={handleGameManufacturerFilterClick}>All Manufacturers</Dropdown.Item>)


    // Enumerates the filters in a flexbox at the top of the page
    function FilterSet(props) {

        return (
            <div className="d-flex m-1">
                <DropdownButton id="dropdown-item-button" title={"Game : " + gameFilter} className="m-1">
                    {FECGamesFilterOptions}
                </DropdownButton>
                <DropdownButton id="dropdown-item-button" title={"Manufacturer : " + manufacturerFilter} className="m-1">
                    {FECManufacturersFilterOptions}
                </DropdownButton>
                <Form>
                    <Form.Check
                        label="card view"
                        value="cards"
                        checked={viewToggleValue === "cards"}
                        type="radio"
                        onChange={handleToggleViewChange}
                    />
                    <Form.Check
                        label="table view"
                        value="table"
                        checked={viewToggleValue === "table"}
                        type="radio"
                        onChange={handleToggleViewChange}
                    />

                </Form>

            </div>
        )
    }

    // Card Component for FECGames
    function FECGameCard(gameObj) {


        return (
            <Card key={gameObj.GameName}>
                <Card.Img variant="top" src={gameObj.ImagePath} alt={gameObj.MachineName} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{gameObj.GameName}</Card.Title>
                    <Card.Text>
                        {gameObj.GameDescription}
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item><b>Manufacturer:</b> {gameObj.Manufacturer}</ListGroup.Item>
                    </ListGroup>


                    <Button variant="outline-primary" className="mt-auto"><a href={gameObj.ManufacturerSite} target="_blank">Go to {gameObj.Manufacturer} site</a></Button>
                </Card.Body>
            </Card>
        );
    }

    // Card Component for FECGames
    function FECGameRow(gameObj) {


        return (
            <tr className="tablerow" key={gameObj.GameName}>
                <td><img src={gameObj.ImagePath} alt={gameObj.MachineName} /> </td>
                <td>{gameObj.GameName}</td>
                <td>{gameObj.GameDescription}</td>
                <td>{gameObj.Manufacturer}</td>
                <td><Button variant="outline-primary" className="mt-auto"><a href={gameObj.ManufacturerSite} target="_blank">Go to {gameObj.Manufacturer} site</a></Button></td>
            </tr>
        );
    }


    // CardList Component for FECGames
    function FECGameList(props) {

        if (viewToggleValue === "cards") {

            const cardList = FilteredSortedFECGames.map((cardObj) => {
                const cardItem = FECGameCard(cardObj);
                return cardItem;
            })

            return (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4" >
                    {cardList}
                </div>
            )
        }

        else {
            const rowList = FilteredSortedFECGames.map((cardObj) => {
                const rowItem = FECGameRow(cardObj);
                return rowItem;
            })

            return (
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>img</th>
                            <th>Game Name</th>
                            <th>Description</th>
                            <th>Manufacturer</th>
                            <th>Web Site</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowList}
                    </tbody>

                </Table>
            )

        }

    }


    return (
        <div>
            <FilterSet />
            <FECGameList />
        </div>

    );

}