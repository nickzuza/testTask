import React, { useEffect, useState, useCallback } from 'react';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { fakeQuery } from "./fakeApi/fakeQuery";
import { ApiReadModel, StatusEnum } from "./fakeApi/models";
import { fakeMutation } from "./fakeApi/fakeMutation";
import FormateDate from './utils/FormatDate';
import Header from "./components/Header";
import { ValidationProps } from "./models/ValidationProps.interface";
import { Styles } from "./styles";
import './style.css';

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type ChangeSelectEvent = React.ChangeEvent<HTMLSelectElement>;

const App: React.FC = () => {
  const classes = Styles();
  const [intention, setIntention] = useState<ApiReadModel | null>(null) as [ApiReadModel, any];

  useEffect(() => {
    fakeQuery()
      .then((data: ApiReadModel) => setIntention(data))
  }, []);

  const updateIntention = useCallback((): void => {
    const newIntentionData = { ...intention };
    delete newIntentionData.lastUpdatedDate;
    fakeMutation(newIntentionData)
      .then((data: ApiReadModel) => {
        setIntention({ ...data });
      });
  }, [intention]);

  const onNameChange = useCallback((e: ChangeEvent): void => {
    setIntention({ ...intention, name: e.target.value });
  }, [intention]);

  const onCommentChange = useCallback((e: ChangeEvent): void => {
    setIntention({ ...intention, comment: e.target.value });
  }, [intention]);

  const onStatusChange = useCallback((e: ChangeSelectEvent): void => {
    setIntention({ ...intention, status: e.target.value });
  }, [intention]);

  const validateName = useCallback((name: string): ValidationProps => ({
    error: name.length < 4 || name.length > 30,
    helperText: 'Name length should be between 4 and 30'
  }), []);

  const validateComment = useCallback((comment: string = ""): ValidationProps => ({
    error: comment.length > 100,
    helperText: 'Comment length should be less than 100'
  }), []);

  const statusesArr = [StatusEnum.OnTrack, StatusEnum.Failing, StatusEnum.Completed];
  return (
    <div className="App">
      <Header classes={classes} />
      <main className={classes.main}>
        <Container maxWidth="md">
          {intention && <div className='intention'>
            <Card className={classes.card}>
              <CardHeader
                title={`Id ${intention.id}`}
                subheader={`Last time updated at: ${FormateDate(intention.lastUpdatedDate)}`}
              />

              <TextField
                id="name"
                className={classes.textField}
                label="Intencion name"
                margin="normal"
                variant="outlined"
                onChange={(e) => onNameChange(e)}
                value={intention.name}
                {...validateName(intention.name || "")}
              />

              <Select
                labelId="Status"
                value={intention.status}
                onChange={(e) => onStatusChange(e as unknown as ChangeSelectEvent)}
              >
                {statusesArr.map((status, index) => <MenuItem key={status} value={status}>{StatusEnum[status]}</MenuItem>)}
              </Select>

              <TextField
                id="comment"
                label="Intention comment"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={intention.comment}
                onChange={(e) => onCommentChange(e)}
                {...validateComment(intention.comment)}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={() => updateIntention()}
              >
                Update
              </Button>
            </Card>
          </div>}
          {!intention && <Container >
            <Typography variant="h6" className={classes.title}> No Intentions! </Typography>
          </Container>}
        </Container>
      </main>
    </div>
  );
};

export default App;
