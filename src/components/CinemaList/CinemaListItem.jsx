import { Chip, IconButton, ListItem, ListItemText } from "@mui/material";
import { MdCall, MdOutlineLocationOn } from 'react-icons/md';
import { format } from 'd3-format';
import {useState} from 'react';

const dispatchMapSnapTo = (lat, lng) => {
  // This will dispatch the `map.snapTo` event which will trigger a listener on the
  // respective active map component to zoom to the latitude and longitude passed
  console.log('triggering `map.snapTo` event with args: ', `lat: ${lat}, lng: ${lng}`)
  dispatchEvent(new CustomEvent('map.snapTo', { detail: { lat, lng } }))
}

const CinemaListItem = ({ name, lat, lng, phoneNumber, distance, address, ...otherProps }) => {
  //click the 'MdOutlineLocationOn' button, showAddress is true, and the address is displayed
  const [showAddress,setShowAddress]=useStates(false)
  return (
    <ListItem>
      <ListItemText>
        {name}
        {distance && (<Chip size="small" sx={{ ml: 1 }} label={`${format(',.1f')(distance)} km`} />)}
        {/* showAddress is true, and the address is displayed */}
        {showAddress && (
          <Typography variant="body2" sx={{ mt: 1, color: 'gray' }}>
            {address}
          </Typography>
        )}
      </ListItemText>
      {
        phoneNumber && (
          <IconButton component='a' href={`tel:${phoneNumber}`}>
            <MdCall />
          </IconButton>
        )
      }
      <IconButton onClick={() => setShowAddress(!showAddress)}>
        <MdOutlineLocationOn />
      </IconButton>
    </ListItem>
  );
};
export default CinemaListItem;