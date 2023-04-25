import React from "react";
import { View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
  Button,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { Section, SectionContent, SectionImage } from 'react-native-rapi-ui';
import { P } from '@expo/html-elements';
import { ScrollView } from "react-native-gesture-handler";


export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Stay"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollView>
        <P>  Ask your dog to lie down.</P>
        <P> Give your dog a hand signal - for example, a 'stop' sign with the palm of your hand facing your dog.</P>
        <P> Instead of giving your dog the treat straightaway, wait a few seconds. Say 'stay' and then give it to them. It's important to reward your dog while they're still lying down, and not if they've got back up.</P>
<P>  Practise this many times in short but regular sessions, gradually increasing the length of time your dog stays in the down position.</P>
<P>  Next, you can start to increase the distance between you and your dog. Start by only taking one step back before giving them the reward, and then slowly and gradually increase the distance.
Practise in lots of different places - around the house, in the garden, at a friend's house and in the local park.</P>
        <Button size="lg" text="Back" onPress={() => navigation.goBack()}  style={{ flexDirection: 'row', marginBottom: 100 }}/>
        </ScrollView>
      </View>
    </Layout>
  );
}
