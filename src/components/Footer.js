import { Box, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box className='footer'>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        p={1}
      >
        <Typography variant="body1">
          ©2023 VISTA | All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};


export default Footer;