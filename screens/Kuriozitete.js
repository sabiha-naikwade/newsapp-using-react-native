import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import ApiClient from '../api/client';
import TwoPostsLayout from '../components/layout/KurioziteteLayout/TwoPostsLayout';
import PostPreview from '../components/presentation/PostPreview';
import styles from '../components/layout/KurioziteteLayout/styles';

const Kuriozitete = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [post2, setPosts2] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await ApiClient.get(
          `/posts?categories=8&per_page=10&page=1`,
        );
        setPosts(response.data.slice(2, 10));
        setPosts2(response.data.slice(0, 2));
      } catch (err) {
        return console.log('error');
      }
    };
    getPost();
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
        `/posts?categories=8&per_page=10&page=${page}`,
      );
      setPosts([...posts, ...response.data]);
    } catch (err) {
      return console.log('err');
    }
  };

  return (
    <View>
      <View>
        <FlatList
          data={posts}
          keyExtractor={key => key.id}
          ListHeaderComponent={() => (
            <FlatList
              horizontal
              data={post2}
              keyExtractor={key => key.id}
              renderItem={item => {
                return (
                  <TouchableOpacity>
                    <TwoPostsLayout post={item.item} />
                  </TouchableOpacity>
                );
              }}
              showsHorizontalScrollIndicator={false}
            />
          )}
          renderItem={item => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Article', {post: item.item})
                }
                style={styles.container}>
                <PostPreview
                  post={item.item}
                  imageStyle={styles.image}
                  titleStyle={styles.titleStyle}
                  showDate
                  dateStyle={styles.dateStyle}
                  showContent
                  contentStyle={styles.postContentStyle}
                />
              </TouchableOpacity>
            );
          }}
          onEndReached={handleMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      </View>
    </View>
  );
};

export default Kuriozitete;
