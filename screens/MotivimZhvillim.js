import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import ApiClient from '../api/client';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import PostPreview from '../components/presentation/PostPreview';
import styles from '../components/layout//RowPosts/style';

const MotivimZhvillim = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await ApiClient.get(
          `posts?categories=203&per_page=5&page=1`,
        );
        console.log(response);
        setPost(response.data);
      } catch (err) {
        return console.log('err');
      }
    };
    getPost();
  }, []);

  const handleMore = async () => {
    setPage(page + 1);
    try {
      const response = await ApiClient.get(
        `posts?categories=203&per_page=5&page=${page + 1}`,
      );
      setPost([...post, ...response.data]);
    } catch (err) {
      return console.log('err');
    }
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={post}
        keyExtractor={key => key.id}
        renderItem={item => {
          return (
            <TouchableOpacity
              style={{
                borderBottomWidth: 0.29,
                alignSelf: 'center',
                borderColor: '4f4a4a',
              }}>
              <View>
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
        onEndReached={handleMore}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
};

export default MotivimZhvillim;
