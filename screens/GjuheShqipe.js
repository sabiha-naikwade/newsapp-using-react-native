import React, {useState, useEffect} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ApiClient from '../api/client';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import PostPreview from '../components/presentation/PostPreview';
import styles from '../components/layout/RowPosts/style';

const GjuheShqipe = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await ApiClient.get(`posts?categories=11&per_page=10`);
        setPosts(response.data);
      } catch (err) {
        return console.log('error');
      }
    };
    getPosts();
  }, []);

  const renderFooter = () => {
    return (
      <ActivityIndicator size="large" color="blue" style={{marginTop: 3}} />
    );
  };

  const handleMore = async () => {
    setPage(page + 1);
    try {
      const response = await ApiClient.get(
        `/posts?categories=11&per_page=10&page=${page}`,
      );
      setPosts([...posts, ...response.data]);
    } catch (err) {
      return console.log('err');
    }
  };

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={key => key.id}
        ListHeaderComponent={() => (
          <FlatList
            data={posts}
            keyExtractor={key => key.id}
            renderItem={item => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Article', {post: item.item})
                  }>
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
        )}
        onEndReached={handleMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default GjuheShqipe;
