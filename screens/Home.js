import React, {useEffect, useState, useContext} from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';
import Button from '../components/button';
import {translate} from '../utils/locale';
import {categories} from '../constants/categories';
import Shkence from './Shkence';
import Kuriozitete from './Kuriozitete';
import MotivimZhvillim from './MotivimZhvillim';
import TePergjithshme from './TePergjithshme';
import Dhurata from './Dhurata';
import ApiClient from '../api/client';
import VerticalLayout from '../components/layout/VerticalLayout/VerticalLayout';
import {store} from '../store.js';

const Home = ({title, navigation}) => {
  const [postsHorizontal, setPostsHorizontal] = useState([]);
  const [postsVertical, setPostsVertical] = useState([]);
  const [page, setPage] = useState(2);
  const [showScreen, setShowScreen] = useState('home');

  const globalState = useContext(store);
  const {dispatch} = globalState;

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await ApiClient.get(`/posts?per_page=20&page=1`);
        dispatch({type: 'FETCH_SUCCESS', payload: response.data});
        setPostsHorizontal(response.data.slice(0, 10));
        setPostsVertical(response.data.slice(10, 20));
      } catch (err) {
        return console.log('err');
      }
    };
    getPost();
  }, [dispatch]);

  const handleMore = async () => {
    setPage(page + 1);
    try {
      const response = await ApiClient.get(
        `/posts?per_page=20&page=${page + 1}`,
      );
      dispatch({type: 'FETCH_SUCCESS', payload: response.data});
      setPostsVertical([...postsVertical, ...response.data]);
    } catch (err) {
      return console.log('err');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item}) => (
            <Button
              title={translate(item.title)}
              enabled={true}
              onPress={() =>
                item.title == 'science'
                  ? navigation.navigate('Shkence')
                  : setShowScreen(item.title)
              }
              style={{
                padding: 10,
                borderRadius: 5,
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: item.color,
              }}
            />
          )}
          keyExtractor={item => item.title}
          horizontal={true}
        />
      </View>

      {showScreen === 'home' && (
        <View style={{flex: 1}}>
          <VerticalLayout
            navigation={navigation}
            numberCol={2}
            dataVertical={postsVertical}
            dataHorizontal={postsHorizontal}
            handleMore={handleMore}
          />
        </View>
      )}
      {showScreen === 'curiosity' && <Kuriozitete />}
      {showScreen === 'motivationDevelopment' && <MotivimZhvillim />}
      {showScreen === 'general' && <TePergjithshme />}
      {showScreen === 'fridayGift' && <Dhurata />}
    </SafeAreaView>
  );
};

export default Home;
