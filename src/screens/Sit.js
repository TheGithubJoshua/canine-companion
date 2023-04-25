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
        middleContent="Sit"
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
        <P>  With your dog in a standing position, hold a tasty treat near their nose.</P>
        <P>  Keeping the treat near your dog's nose, move your hand in an arc over his head. As the dog raises his head to follow the treat, his bottom will go on the floor.</P>
        <P>  The instant he sits, praise him and give him the treat.
  Practice this a number of times in short but regular sessions.</P>
<P>  As your dog always gets a treat for sitting, you'll soon find he sits for longer. You can now add the cue word 'sit' as he goes to sit. Be careful not to say it before your dog moves into position or they may associate it with the wrong movement.</P>
<P>  Practice this a number of times in short but regular sessions.
  Give an 'okay' cue to let your dog know when their training has ended.</P>
        <Button size="lg" text="Back" onPress={() => navigation.goBack()}  style={{ flexDirection: 'row', marginBottom: 100 }}/>
        </ScrollView>
      </View>
    </Layout>
  );
}
