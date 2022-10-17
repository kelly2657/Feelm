import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import NowInTheatersSeries from '../../components/Series/NowInTheatersSeries';

import Nav from '../../components/Header/Nav';
import CustomSeries from '../../components/Series/CustomSeries';
import ActorSeries from '../../components/Series/ActorSeries';
import DirectorSeries from '../../components/Series/DirectorSeries';
import OTTSeries from '../../components/Series/OTTSeries';
import GoSearch from '../../components/Header/GoSearch';

function ExploreTab() {
  const [isTop, setIsTop] = useState(true);
  const onScroll = e => {
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    contentOffset.y < 176 ? setIsTop(true) : setIsTop(false);
  };

  return (
    <>
      <Nav visibility={isTop ? false : true} />
      <GoSearch color={isTop ? 'white' : '#333'} />
      <ScrollView style={styles.container} onScroll={onScroll}>
        <NowInTheatersSeries />
        <CustomSeries propsId={1} />
        <CustomSeries propsId={2} />
        <CustomSeries propsId={3} />
        <OTTSeries propsOTTName={'NETFILX'} />
        <OTTSeries propsOTTName={'WATCHA'} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

export default ExploreTab;
