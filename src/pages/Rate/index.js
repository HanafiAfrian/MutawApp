import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import {Excelent} from '../../assets';
import StarRating from 'react-native-star-rating';

export default class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.row}>
          <View style={styles.kotak}>
            <Text style={styles.ulasan}> 29 </Text>
            <Text style={styles.ulasan}> Perjalanan </Text>
          </View>
          <View style={styles.kotak}>
            <Text style={styles.ulasan}> 16 </Text>
            <Text style={styles.ulasan}> Ulasan </Text>
          </View>
        </View>

        <View style={styles.kotakpjg}>
          <View style={styles.rowpjg}>
            <Text style={styles.ulasan}> 1 Ulasan </Text>
            <Text> 16.03.2021 </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View>
              <Image
                source={Excelent}
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 20,
                  marginVertical: 20,
                }}
              />
            </View>
            <View>
              <Text style={{marginTop: 10}}>Isma</Text>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                fullStarColor={'orange'}
                selectedStar={rating => this.onStarRatingPress(rating)}
                starSize={30}
                style={{backgroundColor: 'red'}}
              />
              <Text style={styles.pujian}>Pujian Untuk Penguji</Text>
              <Text>- Obrolan yang menyenangkan</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pujian: {
    fontWeight: 'bold',
  },

  tebal: {
    fontWeight: 'bold',
  },
  ulasan: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowpjg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  kotakpjg: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  kotak: {
    marginHorizontal: 10,
    borderRadius: 10,
    height: 70,
    width: '45%',
    marginTop: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
