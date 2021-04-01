import React, {useCallback, memo, useRef, useState} from 'react';
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import images from '../api/images';
import {Button} from 'react-native-paper';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    height: 600,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {width: 255, height: 254},
  slideTxt: {fontSize: 24, fontWeight: '500', color: '#F8F8FF', marginVertical:40, textAlign:'center', marginHorizontal:20},

  pagination: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom:20,
    marginTop:40
  },
  paginationDot: {
    width: 13,
    height: 13,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  paginationDotActive: {backgroundColor: 'lightblue'},
  paginationDotInactive: {backgroundColor: 'gray'},

  carousel: {flex: 1},
  btnContainer: {
    justifyContent: 'flex-start',
    height: 200,
  },
  btn: {
    borderRadius: 12,
    backgroundColor: '#F8F8FF',
    marginVertical: 15,
    marginHorizontal: 30,
  },
  btnTxt: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  innerBtn: {
    height: 50,
  },
  btnOnly: {
    height: '50%',
    justifyContent: 'flex-end',
  },
});

const slideList = [
  {
    id: 1,
    image: images.wel1,
    title: 'Network is the social app we wish existed ✨',
    subtitle: '',
  },
  {
    id: 2,
    image: images.wel2,
    title: 'Privacy? \n It’s 2021... we got you 🔒 \n \nWe’ll never sell your personal data, and we encrypt all of your messages.',
    subtitle: '',
  },
];
const Slide = memo(function Slide({data}) {
  return (
    <View style={styles.slide}>
      <Image source={data.image} style={styles.slideImage}></Image>
      <Text style={styles.slideTxt}>{data.title}</Text>
      <Text style={styles.slideTxt}>{data.subtitle}</Text>
    </View>
  );
});

function Pagination({index}) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Carousel({nav, phone}) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((s) => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      [],
    ),
  };

  const renderItem = useCallback(function renderItem({item}) {
    return <Slide data={item} />;
  }, []);

  return (
    <>
      <FlatList
        data={slideList}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <View style={styles.btnContainer}>
        <Pagination index={index}></Pagination>
        <View style={styles.btnOnly}>
          <Button
            onPress={() => nav.navigate('ccard', {phone: phone})}
            style={styles.btn}
            mode="contained"
            labelStyle={styles.btnTxt}
            contentStyle={styles.innerBtn}>
            Continue
          </Button>
        </View>
      </View>
    </>
  );
}
