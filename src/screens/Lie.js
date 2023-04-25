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
        middleContent="Lie Down"
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
        <P>  With your dog in a sitting position and a treat in your hand, move your hand from your dog's nose towards their chest, then straight down towards the floor.</P>
        <P>  Your dog should follow the treat into a lying down position. Praise and reward them with the treat immediately.</P>
        <P>  Practice this a number of times in short but regular sessions.
        When your dog is easily following the treat into a down position, you can start to say the word 'down' just as your dog is getting into the down position.</P>
<P>  Practice this a number of times in short but regular sessions.</P>
<P>  While your dog is lying down, give him treats - this will increase the time he spends lying down.
  Give an 'okay' cue to let your dog know when their training has ended.</P>
        <Button size="lg" text="Back" onPress={() => navigation.goBack()}  style={{ flexDirection: 'row', marginBottom: 100 }}/>
        </ScrollView>
      </View>
    </Layout>
  );
}
