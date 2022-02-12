# Quote Generator React Native Application

This repositroy contains the code developed as part of a coding challenge provided to me, its as simple as using an API to generate random quotes.

## Time Stamps
I started developing this application at 7:14 PM and finished it same day at 8:20 PM along with final modifications.

##### [Click here to checkout the code on Expo and to test it out](https://snack.expo.dev/@awadbilal/quote-generator)

## Development process
I statrted with a standard styled React Native application in which i followed this steps:

- Removed everything unnecessary from the App.js component
- Added two new components for quote generation and applicaiton title named QuoteGenerator.js and Header.js respectively.
- In QuoteGenerator.js i used:
  - axios library for fetching the data
  - useEffect for controling how many time the data is being fetched
  - refresh as a prop for refreshing the quote on swiping down the screen
  - useState for saving and accessing the data generated from the API
- In Header.js all i used was the normal View, Text, and StyleSheet react-native components to display the title.
- In App.js i used react-native RefreshControl component i found on the documentation for the addition of the swiping refresh mechanism
  During the development of the code i have screen recoded all the coding that i have conducted, and paused it for moments while searching for RefreshControl component on the documentation and how to use it.

## Challenges
- 1) I am not used to using online compilers for the purpose of application development, however due to a recent windows update, my Android studio emulator won't work and after invesitgating the issue it has been clear that it is caused by Windows 11, so by the time i am able to deliver the source code, the deadline might pass.
- 2) I have learned how to use react-native before and have already setup the environment for it, i have taken some classes online and watched some youtube videos demonestrating the differences between React and React-native, this is the second time i create a project using react-native and so far the experience is smooth.
- 3) With small and quick online searches, i was able to construct the swip down mechanism and find some pretty color pallets to use for the design process.

## Difficulty rating of the challenge:
★☆☆☆☆

## Functionalities
- Swipe down in order to generate a new code
- Press "New Quote" button to generate a new quotes
- Title, quote display, and author display.
- Styling it in a simple and decorative way while taking in consideration font size, style, family and weight.
- Centering everything in the middle for quite an aestetic looking.

## Technologies Used
- React-native, JavaScript, and CSS3 => Project development
- [Snack Expo](https://snack.expo.dev/) => Online React-native compiler
- [axios](https://www.npmjs.com/package/react-native-axios) => Fetching library for API
- [Color Hunt](https://colorhunt.co/) => For choosing a color pallete to use
