import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const SeatBooking = (props) => {
    const seatArray = [['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11'],
                      ['B1', 'B2', 'B3', 'B4', 'B5'],
                      ['C1', 'C2', 'C3', 'C4', 'C5'],
                      ['D1', 'D2', 'D3', 'D4', 'D5'],
                      ['E1', 'E2', 'E3', 'E4', 'E5']];
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [prevNames, setPrevNames] = useState([]); // Array to store green button names
    const [buttonColors, setButtonColors] = useState([]);

    // Function to toggle button color and update the array
    const toggleButtonColor = (seatId) => {
        setButtonColors((prevColors) => ({
        ...prevColors,
        [seatId]: prevColors[seatId] === 'green' ? 'white' : 'green',
        }));

        props.setGreenButtonNames(() => {
        if (props.greenButtonNames.includes(seatId)) {
            return props.greenButtonNames.filter((name) => name !== seatId);
        } else {
            return [...props.greenButtonNames, seatId];
        }        
        });
    };

  return (
    <Box
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        height={"80%"}
        width={"90%"}
        margin={"auto"}
        marginTop={8}
        // justifyContent={"center"}
        // padding={1}
        // bgcolor={'white'}
    >
        {
            // seatArray.map((row) => (
            //     <Box
            //         key = {row}
            //         display={"flex"}
            //         flexDirection={"row"}
            //         flexWrap={"wrap"}
            //         height={"20%"}
            //         width={"100%"}
            //         // margin={"auto"}
            //         // marginLeft={1}
            //         // justifyContent={"center"}
            //         // padding={1}
            //         // bgcolor={'white'}
            //     >{                                                
                props.seats.allSeats.map((seat, index) => (
                    <Box
                        key={index}
                        // width={`${90 / props.seats.allSeats.length}%`}
                        width={'10%'}
                        margin={"auto"}
                        // marginRight={1}
                        // marginLeft={1}
                        padding={0.2}
                        // justifyContent={"center"}
                    >
                        <Button
                            variant="outlined"
                            onClick={() => {
                                if (seat.AVAILABLE === 1 && seat.CATEGORY === props.category) {
                                  toggleButtonColor(seat.S_ID);                       
                                }
                                
                            }}
                            style={{ 
                                backgroundColor: buttonColors[seat.S_ID] || 'white',
                                borderColor: 'black',
                                color: (seat.AVAILABLE==1 && seat.CATEGORY==props.category)? "black" : "white",
                                // fontsize:"10px",
                                fontFamily: 'Sans-serif',
                                // fontWeight: 'bold',
                                // borderRadius: '5px',
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                transition: 'none',
                            }}
                        >
                            <Typography
                                variant={'p'}
                                fontSize={'10px'}
                                color={(seat.AVAILABLE==1 && seat.CATEGORY==props.category)? "black" : "white"}
                                fontFamily={'Sans-serif'}
                                margin={'auto'}
                                // width={'50%'}
                                // marginLeft={1}
                                // marginTop={4}
                                fontWeight={'bold'}
                            >
                                {seat.S_ID}
                            </Typography>                                
                        </Button>
                    </Box>
                ))
            //             }</Box>
            // ))
        }
    </Box>
  )          
}

export default SeatBooking