import React from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import moment from 'moment/min/moment-with-locales';
import {useNavigation} from '@react-navigation/native';

const TwoPostsLayout = ({post}) => {
  moment.locale('sq');
  const navigation = useNavigation();
  const renderTitleContent = content => {
    const final = content
      .replace(/&#8211;/g, '-')
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#8217;/g, "'");

    return final;
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Article', {post: post})}>
      <Image
        source={{
          uri:
            post &&
            post.better_featured_image &&
            post.better_featured_image.source_url,
        }}
        style={[styles.image]}
      />
      <View style={styles.border}>
        <Text style={styles.title} numberOfLines={1}>
          {renderTitleContent(post && post.title && post.title.rendered)}
        </Text>
      </View>
      <View>
        <Text style={styles.date}> {moment(post.date).format('LL')} </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 175,
    height: 206,
    marginLeft: 15,
    marginTop: 2,
    // borderColor: 'green',
    // borderWidth: 3,
    position: 'absolute',
  },
  border: {
    marginTop: 1,
    marginLeft: 5,
    height: 308,
    width: 200,
    borderColor: 'gray',
  },
  title: {
    fontSize: 16,
    width: 173,
    bottom: 2,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    // borderColor: 'yellow',
    // borderWidth: 2,
    marginTop: 217,
    marginLeft: 9,
  },
  date: {
    fontSize: 10,
    marginLeft: 12,
    marginTop: -75,
  },
});

export default TwoPostsLayout;
