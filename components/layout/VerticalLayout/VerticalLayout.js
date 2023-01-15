import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PostPreview from '../../presentation/PostPreview';
import styles from './styles';
import HorizontalLayout from '../HorizontaLayout/HorizontalLayout';

const VerticalLayout = ({
  navigation,
  numberCol,
  dataVertical,
  dataHorizontal,
  handleMore,
}) => {
  const renderFooter = () => {
    return (
      <ActivityIndicator size="large" color="blue" style={{marginTop: 3}} />
    );
  };

  return (
    <View style={{flex: 1}}>
      {dataVertical.length > 0 ? (
        <FlatList
          scrollEnabled={true}
          numColumns={numberCol}
          showsVerticalScrollIndicator={false}
          data={dataVertical}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => (
            <HorizontalLayout
              navigation={navigation}
              dataHorizontal={dataHorizontal}
            />
          )}
          renderItem={item => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Article', {post: item.item})
                }>
                <PostPreview
                  post={item.item}
                  containerStyle={styles.container}
                  titleStyle={styles.title}
                  imageStyle={styles.image}
                  dateStyle={styles.text}
                  showDate={true}
                />
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={renderFooter}
          onEndReached={handleMore}
          onEndReachedThreshold={0.5}
        />
      ) : null}
    </View>
  );
};

export default VerticalLayout;
