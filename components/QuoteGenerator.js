import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const QuoteGenerator = ({ refresh }) => {
  const [quote, setQuote] = useState({
    quote: 'Generating ...',
    author: '',
  });

  const randomQuote = () => {
    axios
      .get('https://api.quotable.io/random')
      .then((res) => {
        setQuote({
          quote: `❝ ${res.data.content}❞`,
          author: `- ${res.data.author}`,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    randomQuote();
  }, [refresh]);

  return (
    <>
      <View style={generatorStyles.quoteBox}>
        <Text style={generatorStyles.quote}>{quote.quote}</Text>
        <Text style={generatorStyles.author}>{quote.author}</Text>
      </View>
      <TouchableOpacity onPress={randomQuote} style={generatorStyles.button}>
        <Text style={generatorStyles.buttonText}>New Quote</Text>
      </TouchableOpacity>
    </>
  );
};

// Background Color of #FFC0D350 means color #FFC0D3 and Opacity of 50%
const generatorStyles = StyleSheet.create({
  quoteBox: {
    width: '90%',
    backgroundColor: '#FFC0D350',
    borderRadius: 20,
    padding: 15,
  },
  quote: {
    marginHorizontal: 16,
    marginVertical: 8,
    fontSize: 22,
    letterSpacing: 2,
    fontFamily: 'Vollkorn',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#322E30',
  },
  author: {
    fontSize: 18,
    fontFamily: 'Vollkorn',
    fontWeight: '700',
    textAlign: 'right',
    marginRight: 24,
    color: '#322E30',
  },
  button: {
    backgroundColor: '#FFC0D390',
    width: '90%',
    padding: 18,
    borderRadius: 30,
    marginTop: 32,
  },
  buttonText: {
    fontFamily: 'Vollkorn',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#322E30',
  },
});

export default QuoteGenerator;
