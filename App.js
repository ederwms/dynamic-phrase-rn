import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      imgIndex: 0,
      phraseIndex: 0,
      images: [
        'https://media-exp1.licdn.com/dms/image/C561BAQGEbvT3SFyR9Q/company-background_10000/0/1582050035728?e=2159024400&v=beta&t=xwPLRsVBBNXQQS3HN3q7hsYXmt6JxJsH6lpnbh9Y1ko',
        'https://lh3.googleusercontent.com/proxy/SkoBoTP769d8wVYEvl3Jf19NJ6IWkOeK7yNl3WG8m68fn7IT3lsCWNSa4hj_VLE852USL5MM8CRU3xwaCCAqHFH0LbFmoCGZGrMm5vjmmoJqzM_v5Q_7ooY',
        'https://image.winudf.com/v2/image/Y29tLnNoYWtlX3NlLmxpdmVfd2FsbHBhcGVyLmJlYXV0aWZ1bF9sYW5kc2NhcGVfYW5pbWF0ZWRfd2FsbHBhcGVyX3NjcmVlbnNob3RzXzFfMTdhODg5OWI/screen-1.jpg?fakeurl=1&type=.jpg',
        'https://image.winudf.com/v2/image/Y29tLkRyZWFtV2FsbHBhcGVycy5GYW50YXN5TGFuZHNjYXBlMDFfc2NyZWVuc2hvdHNfMV80NjI0YmQ2MA/screen-1.jpg?fakeurl=1&type=.jpg',
        'https://1.bp.blogspot.com/-ZhPVHg2WI-c/X3_AMRNZpkI/AAAAAAAAMRI/L_DEM2cBrX0YhK5XZWm79cjIMFiFNyRXQCLcBGAsYHQ/w640-h480/-%2BJericoacoara%2B%2BPasseios%2Bpraias%2BCeara%2BPraia%2Blocalizacao%2Biibrasil.com.jpg',
        'https://planoacursos.com.br/wp-content/uploads/2019/02/landscape-12.jpg'
      ],
      phrases: [
        'O importante não é ganhar, o que importa é competir sem perder, nem empatar.',
        'Pense como um boleto. Um boleto sempre vence!',
        'Que seu dia seja Ben 10 e você não desanime.',
        'Viva como se fosse morrer, porque você vai.',
        'Se você tropeçar nos obstáculos da vida, aproveite e faça um agachamento.',
        'Por pior que seja o buraco em que você se encontra, sorria. Porque ainda não tem terra por cima.'
      ]
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.state.images[this.state.imgIndex] }}
          style={styles.image}
        />

        <Text style={styles.phrase}>{this.state.phrases[this.state.phraseIndex]}</Text>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.setState({
              ...this.state,
              imgIndex: Math.floor(Math.random() * (6 + 1)),
              phraseIndex: Math.floor(Math.random() * (6 + 1))
            })
          }}
        >
          <Text style={styles.btnText}>Abrir frase do dia</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 4
  },
  phrase: {
    marginVertical: 16
  },
  button: {
    width: 300,
    height: 30,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 8,
    paddingVertical: 5
  },
  btnText: {
    textAlign: 'center'
  }
});
