/* eslint-disable no-unused-vars */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import Item from '../MessageItem';
import { MessageAreaContainer, Area, Buttons, IconStyled } from './MessageAreaStyles';
import withSpeech from '../../HOC/withSpeech.jsx';
import { removeWord, removeAllWords } from '../../store/actions';

class MessageArea extends Component {
  state = {
    words: this.props.chosenWords || [],
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.chosenWords !== this.props.chosenWords) {
      this.setState({ words: this.props.chosenWords });
    }
  }

  deleteWord = id => {
    const newWords = this.state.words.filter(word => word._id !== id);
    this.setState({ words: newWords });
    this.props.removeWord(id);
  };

  readWord = text => {
    this.props.read(text);
  };

  readMessage = arr => {
    const newArr = [];
    arr.forEach(word => newArr.push(word.name));
    const message = newArr.join(' ');
    this.props.read(message);
  };

  deleteAll = () => {
    this.setState({ words: [] });
    this.props.removeAllWords();
  };

  renderWords = words => {
    return words.map(word => (
      <Item key={word._id} label={word.name} imgSrc={word.image} deleteElement={() => this.deleteWord(word._id)} />
    ));
  };

  render() {
    console.log(this.props);
    return (
      <MessageAreaContainer>
        <Area>{this.props.chosenWords ? this.renderWords(this.state.words) : ''}</Area>
        <Buttons>
          <IconStyled className="fas fa-eraser" onClick={this.deleteAll} />
          <IconStyled className="fas fa-volume-up" onClick={() => this.readMessage(this.state.words)} />
        </Buttons>
      </MessageAreaContainer>
    );
  }
}

MessageArea.propTypes = {
  read: func,
  chosenWords: object,
  removeWord: func,
  removeAllWords: func,
};

export default connect(
  state => ({
    chosenWords: state.getWordReducer,
  }),
  { removeWord, removeAllWords },
)(withSpeech(MessageArea));
