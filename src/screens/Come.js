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
        middleContent="Come When Called"
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
        <P>  You need an incentive to encourage your dog to come back - a really tasty treat or a fun game with a toy.</P>
        <P> Show your dog the toy or food.</P>
        <P>  Run away a couple of paces then call your dog's name and say "come" in a friendly, exciting tone - getting down low can also encourage them to come back.</P>
<P>  As your dog comes to you, gently hold their collar and either feed them the treat or let them play with the toy.</P>
<P>  Gradually increase the distance that you are from your dog, until eventually you can call your dog in and out of the garden or from room to room.
Once your dog is consistently coming to you when called around the house and garden you can start to practice in safe outside spaces. Long training leads can be helpful for practicing recall when outside as they allow your dog some freedom without giving them complete free-range at this stage.</P>
        <Button size="lg" text="Back" onPress={() => navigation.goBack()}  style={{ flexDirection: 'row', marginBottom: 100 }}/>
        </ScrollView>
      </View>
    </Layout>
  );
}
