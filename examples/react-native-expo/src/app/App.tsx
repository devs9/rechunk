import React, {Suspense, lazy} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import {ErrorBoundary} from 'react-error-boundary';
import {Error404} from '@/components';
import {transactionsData} from '@/lib';
import {importChunk} from '@crherman7/rechunk';

// import Transactions from '@/components/remote/Transactions';
const Transactions = lazy(() => importChunk('transactions'));

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={Error404}>
      <Suspense fallback={<ActivityIndicator style={styles.container} />}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            {/*<Card />*/}
            {/*<Balance data={balanceData.data} balance={balanceData.total} />*/}
          </View>
          <Transactions data={transactionsData} />
        </SafeAreaView>
      </Suspense>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#ecf0f1',
  },
  content: {
    paddingHorizontal: 16,
  },
});
