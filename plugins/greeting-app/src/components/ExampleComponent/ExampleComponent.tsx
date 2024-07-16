import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';
import { configApiRef, useApi } from '@backstage/core-plugin-api';

interface GreetingApiResponse{
  message: string;
}

export const ExampleComponent = () => {
  
  const [message, setMessage] = useState('');
  const config = useApi(configApiRef);
  const backendUrl = config.getString('backend.baseUrl');

  useEffect(() => {
    fetch( `${backendUrl}/api/greeting-api/greet`)
    .then(response => response.json())
    .then(data => {
      let apiResponse: GreetingApiResponse = data;
      // console.log("Data => "+ apiResponse);
      setMessage(apiResponse.message)
      console.log("Message => "+ message);
    }
    )
    .catch(err => console.error(err));
      
  }, [backendUrl]);

  return (
    <Page themeId="tool">
    <Header title="Welcome to greeting-app!" subtitle="Optional subtitle">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Plugin title">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Information card">
            <Typography variant="body1">
              All content should be wrapped in a card like this.
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <ExampleFetchComponent />
        </Grid>
      </Grid>
    </Content>
  </Page>
  )
};
