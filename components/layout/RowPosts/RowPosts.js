import React from 'react';
import {View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import PostPreview from '../../presentation/PostPreview';
import styles from '../../layout/RowPosts/style';
const RowPosts = ({navigation, data}) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={key => key.id}
        renderItem={item => {
          return (
            <TouchableOpacity>
              <PostPreview
                data={item.item}
                imageStyle={styles.image}
                showDate
                dateStyle={styles.date}
                titleStyle={styles.titleStyle}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default RowPosts;
