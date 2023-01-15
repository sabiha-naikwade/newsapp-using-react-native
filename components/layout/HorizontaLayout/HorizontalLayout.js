import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import PostPreview from '../../presentation/PostPreview';
import styles from './styles';

const HorizontalLayout = ({title, navigation, dataHorizontal}) => {
  return (
    <View>
      {dataHorizontal.length > 0 ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataHorizontal}
          keyExtractor={post => post.id}
          renderItem={item => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Article', {post: item.item})
                }>
                <PostPreview
                  post={item.item}
                  containerStyle={styles.container}
                  imageStyle={styles.image}
                  titleStyle={styles.title}
                  titleBackground={styles.titleBackground}
                  gradient={styles.gradient}
                  showDate={false}
                />
              </TouchableOpacity>
            );
          }}
        />
      ) : null}
    </View>
  );
};

export default HorizontalLayout;
