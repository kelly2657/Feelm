import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import NowInTheatersSeries from '../../components/Series/NowInTheatersSeries';

import Nav from '../../components/Header/Nav';
import CustomSeries from '../../components/Series/CustomSeries';
import ActorSeries from '../../components/Series/ActorSeries';
import DirectorSeries from '../../components/Series/DirectorSeries';
import OTTSeries from '../../components/Series/OTTSeries';

function ExploreTab() {
  return (
    <>
      <NowInTheatersSeries />
      <Nav />
      <ScrollView style={styles.container}>
        <CustomSeries propsId={2} />
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
