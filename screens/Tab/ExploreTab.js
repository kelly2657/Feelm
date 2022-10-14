import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import CustomSeries from '../../components/Series/CustomSeries';
import ActorSeries from '../../components/Series/ActorSeries';
import DirectorSeries from '../../components/Series/DirectorSeries';
import OTTSeries from '../../components/Series/OTTSeries';

import NowInTheatersSeries from '../../components/Series/NowInTheatersSeries';

function ExploreTab() {
  return (
    <ScrollView style={styles.container}>
      <NowInTheatersSeries />
      <CustomSeries propsId={2} />
      <ActorSeries propsId={3} />
      <DirectorSeries propsId={4} />
      <OTTSeries propsOTTName={'NETFILX'} />
      <OTTSeries propsOTTName={'WATCHA'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ExploreTab;
