import { Box, Rating } from '@mui/material';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Ужасно',
  1: 'Ужасно+',
  1.5: 'Очень плохо',
  2: 'Плохо',
  2.5: 'Удовлетворительно',
  3: 'Удовлетворительно+',
  3.5: 'Хорошо',
  4: 'Хорошо+',
  4.5: 'Отлично',
  5: 'Изумительно',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function Ratings({ value, setValue }) {
  const [hover, setHover] = useState(-1);

  return (
    <center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          size="large"
          style={{ border: '1px solid white', fontFamily: 'Roboto' }}
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />}
        />
        {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>

    </center>

  );
}
