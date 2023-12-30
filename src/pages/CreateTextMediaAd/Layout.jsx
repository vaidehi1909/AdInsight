import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, Typography, Button, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import TextAdForm from "./TextAdForm";
import MediaAdForm from "./MediaAdForm";
import OtherDetailsForm from "./OtherDetailsForm";
import './Form.css'

const validTypes = ['text', 'media']

const isValidType = (type) => {
  if(!type) return false;
  return type.split('_').every(value => validTypes.includes(value));
}

const getSchema = (type) => {
  const textAdSchema = {
    heading_1: yup.string().required('Heading 01 is required'),
    heading_2: yup.string().required('Heading 02 is required'),
    description: yup.string().required('Description is required'),
  }
  const mediaAdSchema = {
    landscape_marketing_img: yup.string().required('URL is required'),
    portrait_marketing_img: yup.string().required('URL is required'),
    square_marketing_img: yup.string().required('URL is required'),
    video_url: yup.string().required('URL is required'),
  }

  const otherDetailsSchema = {
    business_name: yup.string().required('Business name is required'),
    button_lable: yup.string().required('Button label is required'),
    webiste_url: yup.string().required('URL is required'),
  }

  if(type === 'text') {
    return yup.object().shape({...textAdSchema, ...otherDetailsSchema});
  }
  return yup.object().shape({...textAdSchema, ...mediaAdSchema, ...otherDetailsSchema});
}

const Layout = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { type } = params
  const form = useForm({ resolver: yupResolver(getSchema(type)) });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if(!isValidType(type)) {
      navigate(`/ad/new`);
    }
  }, [])

  useEffect(() => {
    if(!submitted) return;
    const redirectTimeout = setTimeout(() => {
      navigate(`/ad/new`);
    }, 600); // Delay of 0.6 seconds (600 milliseconds)

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [submitted]);

  const onBack = () => {
    navigate(`/ad/new`);
  }
  const onSubmit = (data) => {
    setSubmitted(true);
  };
  return (
    <>
      <div className={`form-container ${submitted ? 'submitted' : ''}`}>
        <Card variant="outlined" sx={{ margin: '0px 10px' }}>
        <CardHeader 
          title={
          <Typography variant="h6" >
            {params.type === 'text' ? 'Create Text Ad' : 'Create Text & Media' }
          </Typography>
          }
        />
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <TextAdForm form={form}/>
            {type !== 'text' && <MediaAdForm form={form}/>}
            <OtherDetailsForm form={form}/>
            <Box display="flex" justifyContent="flex-end"> 
              <Button variant="outlined" sx={{ marginRight: '20px' }} onClick={onBack}>Back</Button>
              <Button type="submit" variant="contained">Submit</Button>
            </Box>
          </form>
        </CardContent>
        </Card>
      </div>
      {submitted && (
        <div className="modal">
          <Box display="flex" justifyContent="center"> 
              <img src="/images/sucess.png" alt="Success" />
          </Box>
          <Box display="flex" justifyContent="center"> 
            <Typography variant="h6" >Submitted</Typography>
          </Box>
        </div>
      )}
    </>
  );
}

export default Layout;
