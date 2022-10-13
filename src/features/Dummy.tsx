import { View, Text, NativeAppEventEmitter } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppleHealthKit, { HealthKitPermissions } from 'react-native-health';
// import { NativeAppEventEmitter } from 'react-native';

const permissions = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.HeartRate,
      AppleHealthKit.Constants.Permissions.StepCount,
      AppleHealthKit.Constants.Permissions.Steps,
    ],
    write: [AppleHealthKit.Constants.Permissions.Steps],
  },
} as HealthKitPermissions;

// type MyLibProps = {
//   color: string;
//   style: ViewStyle;
// };

const Dummy = () => {
  const [steps] = useState(0);
  const startdate = new Date();
  const enddate = new Date();
  enddate.setDate(enddate.getDate() + 1);

  startdate.setHours(0);
  startdate.setMinutes(0);
  startdate.setSeconds(0);
  startdate.setMilliseconds(0);

  enddate.setHours(0);
  enddate.setMinutes(0);
  enddate.setSeconds(0);
  enddate.setMilliseconds(0);

  useEffect(() => {
    console.log('hello from changes');

    // GoogleFit.checkIsAuthorized().then(() => {
    //   console.log(GoogleFit.isAuthorized); // Then you can simply refer to `GoogleFit.isAuthorized` boolean.
    //   if (!GoogleFit.isAuthorized) {
    //     const options = {
    //       scopes: [
    //         Scopes.FITNESS_ACTIVITY_READ,
    //         Scopes.FITNESS_ACTIVITY_WRITE,
    //         Scopes.FITNESS_BODY_READ,
    //         Scopes.FITNESS_BODY_WRITE,
    //       ],
    //     };
    //     GoogleFit.authorize(options)
    //       .then((authResult) => {
    //         console.log('authResult', authResult);
    //       })
    //       .catch((err) => {
    //         console.log('err authorize', err);
    //       });
    //   } else {
    //     // const startDate = new Date();
    //     // const endDate = new Date();
    //     const opt = {
    //       startDate: '2017-01-01T00:00:17.971Z', // required ISO8601Timestamp
    //       endDate: new Date().toISOString(), // required ISO8601Timestamp
    //       bucketUnit: BucketUnit.MINUTE, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    //       bucketInterval: 1, // optional - default 1.
    //     };

    //     GoogleFit.getDailyStepCountSamples(opt)
    //       .then((res) => {
    //         console.log('Daily steps >>> ', JSON.stringify(res));
    //       })
    //       .catch((err) => {
    //         console.warn(err);
    //       });
    //   }
    // });
    AppleHealthKit.initHealthKit(permissions, (error: string) => {
      /* Called after we receive a response from the system */

      if (error) {
        console.log('[ERROR] Cannot grant permissions!');
        return;
      }
      AppleHealthKit.getDailyStepCountSamples(
        {
          startDate: startdate.toISOString(),
          endDate: enddate.toISOString(),
          includeManuallyAdded: false,
        },
        (err, results) => {
          console.log('err, results', err, results);
        }
      );
      NativeAppEventEmitter.addListener('healthKit:StepCount:new', (data) => {
        console.log('new data', data);
      });
      /* Can now read or write to HealthKit */
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>{steps}</Text>
    </View>
  );
};

export default Dummy;
