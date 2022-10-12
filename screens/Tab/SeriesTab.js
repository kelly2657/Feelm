import React from 'react';
import {StyleSheet, StatusBar, ScrollView, Text, FlatList} from 'react-native';

import Nav from '../../components/Header/Nav';
import CustomSeries from '../../components/Series/CustomSeries';
import ActorSeries from '../../components/Series/ActorSeries';
import DirectorSeries from '../../components/Series/DirectorSeries';
import OTTSeries from '../../components/Series/OTTSeries';

function SeriesTab() {
  StatusBar.setBarStyle('dark-content');
  return (
    <>
      <Nav />
      <ScrollView style={styles.container}>
        <CustomSeries propsId={2} />
        <ActorSeries propsId={3} />
        <DirectorSeries propsId={4} />
        <OTTSeries propsOTTName={'NETFILX'} />
        <OTTSeries propsOTTName={'WATCHA'} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default SeriesTab;
