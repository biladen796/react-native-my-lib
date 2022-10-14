import React from 'react';
// import AppleHealthKit, {
//   HealthKitPermissions,
//   HealthObserver,
// } from 'react-native-health';
// import { NativeAppEventEmitter } from 'react-native';
import StackNavigation from './navigation/stackNavigation';

// const permissions = {
//   permissions: {
//     read: [
//       AppleHealthKit.Constants.Permissions.HeartRate,
//       AppleHealthKit.Constants.Permissions.StepCount,
//       AppleHealthKit.Constants.Permissions.Steps,
//     ],
//     write: [AppleHealthKit.Constants.Permissions.Steps],
//   },
// } as HealthKitPermissions;

// type MyLibProps = {
//   color: string;
//   style: ViewStyle; 
// };

export const getDailyStepCount = () => {
  
}

export const MyLibView = () => {
  // const [steps] = useState(0);
  // const startdate = new Date();
  // const enddate = new Date();
  // startdate.setDate(enddate.getDate() - 1);
  // enddate.setDate(enddate.getDate() + 1);

  // useEffect(() => {
  //   GoogleFit.checkIsAuthorized().then(() => {
  //     console.log(GoogleFit.isAuthorized); // Then you can simply refer to `GoogleFit.isAuthorized` boolean.
  //     if (!GoogleFit.isAuthorized) {
  //       const options = {
  //         scopes: [
  //           Scopes.FITNESS_ACTIVITY_READ,
  //           Scopes.FITNESS_ACTIVITY_WRITE,
  //           Scopes.FITNESS_BODY_READ,
  //           Scopes.FITNESS_BODY_WRITE,
  //         ],
  //       };
  //       GoogleFit.authorize(options)
  //         .then((authResult) => {
  //           console.log('authResult', authResult);
  //         })
  //         .catch((err) => {
  //           console.log('err authorize', err);
  //         });
  //     } else {
  //       // const startDate = new Date();
  //       // const endDate = new Date();
  //       const opt = {
  //         startDate: '2017-01-01T00:00:17.971Z', // required ISO8601Timestamp
  //         endDate: new Date().toISOString(), // required ISO8601Timestamp
  //         bucketUnit: BucketUnit.MINUTE, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
  //         bucketInterval: 1, // optional - default 1.
  //       };

  //       GoogleFit.getDailyStepCountSamples(opt)
  //         .then((res) => {
  //           console.log('Daily steps >>> ', JSON.stringify(res));
  //         })
  //         .catch((err) => {
  //           console.warn(err);
  //         });
  //     }
  //   });
  //   // AppleHealthKit.initHealthKit(permissions, (error: string) => {
  //   //   /* Called after we receive a response from the system */

  //   //   if (error) {
  //   //     console.log('[ERROR] Cannot grant permissions!');
  //   //     return;
  //   //   }
  //   //   AppleHealthKit.getStepCount(
  //   //     {
  //   //       startDate: startdate.toISOString(),
  //   //       endDate: enddate.toISOString(),
  //   //       includeManuallyAdded: false,
  //   //     },
  //   //     (err, results) => {
  //   //       console.log('err, results', err, results);
  //   //       setSteps(results.value);
  //   //     }
  //   //   );
  //   //   AppleHealthKit.getSamples(
  //   //     {
  //   //       startDate: new Date(2021, 0, 0).toISOString(),
  //   //       endDate: new Date().toISOString(),
  //   //       type: HealthObserver.Running, // one of: ['Walking', 'StairClimbing', 'Running', 'Cycling', 'Workout']
  //   //     },
  //   //     (err: unknown, results: Array<unknown>) => {
  //   //       console.log('getSamples', 'err, results', err, results);
  //   //       if (err) {
  //   //         return;
  //   //       }
  //   //       console.log(results);
  //   //     }
  //   //   );
  //   //   NativeAppEventEmitter.addListener('healthKit:StepCount:new', (data) => {
  //   //     console.log('new data', data);
  //   //   });
  //   //   /* Can now read or write to HealthKit */
  //   // });
  // }, []);
  return <StackNavigation />;
};
