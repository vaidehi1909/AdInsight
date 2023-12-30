import React from "react";
import { TextField, Grid, InputLabel, styled } from '@mui/material';

const BoldInputLabel = styled(InputLabel)`
  font-weight: bold;
`;

const MediaAdForm = ({ form }) => {
  const { register, formState: { errors } } = form
  return (
    <>
    <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
      <Grid item xs={12} md={4}>
        <BoldInputLabel htmlFor="landscape_marketing_img">LandScape Marketing Image (1.9:1)</BoldInputLabel>
        <TextField
          id="landscape_marketing_img"
          name="landscape_marketing_img"
          placeholder="Add the url for the image you want to use for the ad"
          {...register('landscape_marketing_img')}
          error={!!errors.landscape_marketing_img}
          helperText={errors.landscape_marketing_img?.message}
          fullWidth
          sx={{ '& .MuiInputBase-input': { padding: '10px' } }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <BoldInputLabel htmlFor="portrait_marketing_img">Portrait Marketing Image (4:5)</BoldInputLabel>
        <TextField
          id="portrait_marketing_img"
          name="portrait_marketing_img"
          placeholder="Add the url for the image you want to use for the ad"
          {...register('portrait_marketing_img')}
          error={!!errors.portrait_marketing_img}
          helperText={errors.portrait_marketing_img?.message}
          fullWidth
          sx={{ '& .MuiInputBase-input': { padding: '10px' } }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <BoldInputLabel htmlFor="square_marketing_img">Square Marketing Image (1:1)</BoldInputLabel>
        <TextField
          id="square_marketing_img"
          name="square_marketing_img"
          placeholder="Add the url for the image you want to use for the ad"
          {...register('square_marketing_img')}
          error={!!errors.square_marketing_img}
          helperText={errors.square_marketing_img?.message}
          fullWidth
          sx={{ '& .MuiInputBase-input': { padding: '10px' } }}
        />
      </Grid>
    </Grid>
    <Grid container sx={{ marginBottom: '20px' }}>
      <Grid item xs={12}>
        <BoldInputLabel htmlFor="video_url">Video URL</BoldInputLabel>
        <TextField
          id="video_url"
          name="video_url"
          placeholder="Add the url for the video you want to use for the ad"
          {...register('video_url')}
          error={!!errors.video_url}
          helperText={errors.video_url?.message}
          fullWidth
          sx={{ '& .MuiInputBase-input': { padding: '10px' } }}
        />
      </Grid>
    </Grid>
    </>
  );
}

export default MediaAdForm;
