import React, {useState, useEffect} from 'react';
import {Text, View, TouchableNativeFeedbackComponent} from 'react-native';
import ApiClient from '../api/client';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import PostPreview from '../components/presentation/PostPreview';
import styles from '../components/layout/RowPosts/style';

const TePergjithshme = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await ApiClient.get(`posts?categories=99&per_page=10`);
        setPosts(response.data);
        console.log(response.data);
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
              <View
                style={{
                  alignSelf: 'center',
                  paddingBottom: 3,
                  paddingTop: 5,
                  alignSelf: 'center',
                }}>
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

export default TePergjithshme;
