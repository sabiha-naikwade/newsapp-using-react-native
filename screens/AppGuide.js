import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
  Text,
} from 'react-native';
import {translate} from '../utils/locale';
import {withNavigation} from 'react-navigation';
import {useNavigation, useNavigationParam} from 'react-navigation-hooks';
// import {commonStyle, screenStyle} from '../styles';
// import ViewPager from '@react-native-community/viewpager';
// import {httpStatus, registrationSteps} from '../constants';
// import {Button, Text, Dots} from '../components';
// import {Header, Loader} from '../components';
// import {themeStyle} from '../styles';
// import {useBackHandler} from 'react-native-hooks';
// import ApiClient from '../api/client';
// import {useAlert, useSession} from '../hooks';

function AppGuide() {
  const navigation = useNavigation();
  const language = useNavigationParam('locale');
  const [currentPage, setCurrentPage] = useState(0);
  const [userGuide, setUserGuide] = useState('\n'); // For some reason this state doesn't get updated if I put an empty string
  // const {data: sessionData} = useSession();
  // const {session} = sessionData;
  // const {addError} = useAlert();
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const getUserGuide = async () => {
  //     if (session) {
  //       const {locale} = session;
  //       try {
  //         const response = await ApiClient.get(`/content/${locale}`, {
  //           queryParams: {
  //             contentType: 'UserGuide',
  //             currentStep: 'AppGuide',
  //           },
  //         });
  //         if (response && response.status === httpStatus.OK && response.data) {
  //           setUserGuide(response.data.content.jsonValue);
  //         } else {
  //           addError(response.status);
  //         }
  //         setIsLoading(false);
  //       } catch (error) {
  //         setUserGuide('');
  //         setIsLoading(false);
  //         addError(error.response.status);
  //       }
  //     } else {
  //       // TODO: Handle this (ideally, this should never happen)
  //     }
  //   };
  //   getUserGuide();
  // }, [language, session, addError]);

  const onPageScroll = useCallback(
    event => {
      const {position} = event.nativeEvent;
      if (position !== currentPage) {
        setCurrentPage(position);
      }
    },
    [currentPage],
  );

  // const goToNextStep = useCallback(async () => {
  //   const {deviceUUID} = session;
  //   setIsLoading(true);
  //   try {
  //     const response = await ApiClient.put(
  //       '/registration-session/last-successful-step',
  //       {
  //         body: {
  //           deviceUUID,
  //           lastSuccessfulStep: registrationSteps.AppGuide,
  //         },
  //       },
  //     );
  //     if (response && response.status === httpStatus.OK && response.data) {
  //       navigation.navigate(registrationSteps.UserInformation);
  //     } else {
  //       addError(response.status);
  //     }
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //     addError(error.response.status);
  //   }
  // }, [navigation, session, addError]);

  return (
    // <SafeAreaView style={screenStyle.wrapper}>
    //   <Loader
    //     title={translate('pleaseWait')}
    //     transparent={false}
    //     loading={isLoading}
    //     backgroundColor={themeStyle.colors.WHITE}
    //     iconColor={themeStyle.colors.PRIMARY}
    //     textColor={themeStyle.colors.GRAY40}
    //   />
    //   <ViewPager
    //     testID="viewPager"
    //     style={[commonStyle.flex, commonStyle.lightBg]}
    //     initialPage={0}
    //     showPageIndicator={false}
    //     scrollEnabled={true}
    //     onPageScroll={onPageScroll}>
    //     {userGuide !== '' ? (
    //       Object.keys(userGuide).map(key => (
    //         <ScrollView
    //           key={key}
    //           contentContainerStyle={screenStyle.contentContainer}
    //           scrollEnabled={true}>
    //           <Header
    //             title={translate('welcome')}
    //             imageType={require('../assets/images/headerBackground.png')}
    //             onBackPress={onBackPress}
    //           />
    //           <View style={screenStyle.pageContainer}>
    //             <Image
    //               resizeMode="contain"
    //               source={require('../assets/images/guide.png')}
    //               style={commonStyle.imageSize}
    //             />
    //             <Text style={screenStyle.pageTitle}>
    //               {translate('identifyYourself')}
    //             </Text>
    //             <Text style={screenStyle.pageContent}>{userGuide[key]}</Text>
    //           </View>
    //           {Number(key) === Object.keys(userGuide).length && (
    //             <Button
    //               onPress={goToNextStep}
    //               title={translate('next')}
    //               enabled={true}
    //             />
    //           )}
    //         </ScrollView>
    //       ))
    //     ) : (
    //       <ActivityIndicator
    //         size="large"
    //         color={themeStyle.colors.PRIMARY}
    //         style={screenStyle.activityIndicator}
    //       />
    //     )}
    //   </ViewPager>
    //   <Dots
    //     length={userGuide !== '' && Object.keys(userGuide).length}
    //     currentIndex={currentPage}
    //   />
    // </SafeAreaView>
    <SafeAreaView>
      <Text>Test</Text>
    </SafeAreaView>
  );
}

export default withNavigation(AppGuide);
