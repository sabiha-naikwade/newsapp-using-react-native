import React, {useEffect, useState} from 'react';
import {Text, View, TouchableNativeFeedbackComponent} from 'react-native';
import ApiClient from '../api/client';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import PostPreview from '../components/presentation/PostPreview';
import styles from '../components/layout/RowPosts/style';
const Dhurata = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await ApiClient.get(`posts?categories=36`);
        setPosts(response.data);
      } catch (err) {
        return console.log('error');
      }
    };
    getPosts();
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={key => key.id}
        renderItem={item => {
          return (
            <TouchableOpacity>
              <View style={{alignSelf: 'center', flex: 1}}>
                <PostPreview
                  post={item.item}
                  imageStyle={styles.image}
                  titleStyle={styles.titleStyle}
                  showContent
                  postContentStyle={styles.postContentStyle}
                  showDate
                  dateStyle={styles.date}
                  nroOfLines={3}
                  titleLines={2}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Dhurata;
