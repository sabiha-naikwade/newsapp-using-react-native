import React, {useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import Button from '../components/button';

import {translate} from '../utils/locale';
import {subCategories} from '../constants/categories';
import Ekonomi from './Ekonomi';
import Teknologji from './Teknologji';
import Inxhinieri from './Inxhinieri';
import Shendetesi from './Shendetesi';
import GjuheShqipe from './GjuheShqipe';

const Shkence = () => {
  const [showScreen, setShowScreen] = useState('economy');
  console.log(subCategories);
  const renderItemCategory = item => {
    return (
      <Button
        enabled={true}
        title={translate(item.title)}
        onPress={() => setShowScreen(item.title)}
        style={{
          padding: 10,
          borderRadius: 5,
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: item.color,
        }}
      />
    );
  };
  return (
    <SafeAreaView>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={subCategories}
          renderItem={({item}) => renderItemCategory(item)}
          keyExtractor={item => item.title}
          horizontal={true}
        />
      </View>

      {showScreen === 'economy' && <Ekonomi />}
      {showScreen === 'technology' && <Teknologji />}
      {showScreen === 'engineery' && <Inxhinieri />}
      {showScreen === 'health' && <Shendetesi />}
      {showScreen === 'albanian' && <GjuheShqipe />}
    </SafeAreaView>
  );
};

export default Shkence;
