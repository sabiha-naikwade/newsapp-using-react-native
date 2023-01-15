import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import moment from 'moment/min/moment-with-locales';
import HTML from 'react-native-render-html';

const Article = () => {
  const route = useRoute();
  const item = route.params.post;

  const renderTitletContent = content => {
    moment.locale('sq');
    const final = content
      .replace(/&#8211;/g, '-')
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#8217;/g, "'")
      .replace(/&#8230;/g, ' ')
      .replace(/(<([^>]+)>)/g, '')
      .replace(/^\s+|\s+$/g, '')
      .replace(/&nbsp;/g, ' ');

    return final;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView>
        <Image
          style={{width: '100%', height: 280}}
          source={{
            uri:
              item &&
              item.better_featured_image &&
              item.better_featured_image.source_url,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            marginHorizontal: 15,
            marginTop: 20,
          }}>
          {renderTitletContent(item && item.title && item.title.rendered)}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 5,
            color: '#f5f5f5',
            fontSize: 10,
          }}>
          {moment(item?.date).format('LL')}
        </Text>
        <View style={{width: '100%'}}>
          <HTML
            html={item?.content?.rendered}
            imagesMaxWidth={Dimensions.get('window').width}
            ignoredStyles={['height', 'width']}
            alterChildren={node => {
              if (node.name === 'iframe') {
                delete node.attribs.width;
                delete node.attribs.height;
              }
              return node.children;
            }}
            tagsStyles={{
              p: {
                color: 'white',
                marginTop: 10,
                width: '90%',
                alignItem: 'center',
                marginLeft: 20,
                marginBottom: 10,
                fontSize: 15,
              },
              h1: {color: 'white'},
              h2: {color: 'white'},
              h3: {color: 'white'},
              h4: {color: 'white', marginTop: 10, marginLeft: 20},
              h5: {color: 'white'},
              h6: {color: 'white'},
              li: {color: 'white'},
              iframe: {width: '100%', height: 300},
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Article;
