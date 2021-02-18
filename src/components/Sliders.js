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
    height: 350,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {width: 255, height: 254},
  slideTxt: {fontSize: 19, fontWeight: '500', color: '#F8F8FF'},

  pagination: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: {backgroundColor: 'lightblue'},
  paginationDotInactive: {backgroundColor: 'gray'},

  carousel: {flex: 1},
  btnContainer: {
    justifyContent: 'flex-start',
    height: 300,
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
    height: '80%',
    justifyContent: 'flex-end',
  },
});

const slideList = [
  {
    id: 1,
    image: images.wel1,
    title: 'Network is the social app',
    subtitle: 'we wish existed ✨',
  },
  {
    id: 2,
    image: images.wel2,
    title: 'Privacy?',
    subtitle: 'It’s 2021... we got you 🔒',
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

export default function Carousel({nav}) {
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
            onPress={() => nav.navigate('bottom', {routeName: 'Chat'})}
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
