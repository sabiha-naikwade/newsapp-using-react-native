import React from 'react';
import {View, Text, Image} from 'react-native';
import moment from 'moment/min/moment-with-locales';

const PostPreview = ({
  post,
  showDate,
  titleStyle,
  imageStyle,
  containerStyle,
  dateStyle,
  titleBackground,
  gradient,
  showContent,
  postContentStyle,
  nroOfLines,
  titleLines,
}) => {
  const renderTitletContent = content => {
    moment.locale('sq');
    const final = content
      .replace(/&#8211;/g, '-')
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#8217;/g, "'")
      .replace(/&#8230;/g, ' ')
      .replace(/(<([^>]+)>)/g, '')
      .replace(/^\s+|\s+$/g, '')
      .replace(/&nbsp;/g, ' ');

    return final;
  };

  return (
    <View style={containerStyle}>
      <View style={gradient}>
        <Image
          style={imageStyle}
          source={{
            uri:
              post &&
              post.better_featured_image &&
              post.better_featured_image.media_details &&
              post.better_featured_image.media_details.sizes &&
              post.better_featured_image.media_details.sizes.medium &&
              post.better_featured_image.media_details.sizes.medium.source_url,
          }}
        />
      </View>

      <View>
        <View style={titleBackground && titleBackground} />
        <Text style={titleStyle} numberOfLines={titleLines}>
          {renderTitletContent(post && post.title && post.title.rendered)}
        </Text>
      </View>

      {showDate && (
        <Text style={dateStyle}>{moment(post.date).format('LL')}</Text>
      )}

      <View>
        <View>
          {showContent && (
            <Text numberOfLines={nroOfLines} style={postContentStyle}>
              {' '}
              {renderTitletContent(
                post && post.content && post.content.rendered,
              )}{' '}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default PostPreview;
