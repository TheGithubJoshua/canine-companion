import React from "react";
import { View, ScrollView } from "react-native";
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
import { Divider } from "react-native-paper";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Training"
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
      <ScrollView
        style={{
          flex: 1,
        }}
      >
       <Section height={250} style={{ flexDirection: 'row'}}> 
       <SectionImage height={130}  source={require('../../assets/sit.jpg')} />
    <SectionContent padding={50}>
        <Text style={{ flexDirection: 'row', marginBottom: 13 }} fontWeight="bold">     Sit</Text>
        <Button size="sm" text="Start!" onPress={() => { navigation.navigate("Sit"); }} style={{ flexDirection: 'row', marginBottom: 50 }}/>

    </SectionContent>                                                        
  </Section>

  <Section height={250}> 
       <SectionImage height={130}  source={require('../../assets/lie.jpg')} />
    <SectionContent padding={35}>
        <Text style={{ flexDirection: 'row', marginBottom: 13 }} fontWeight="bold">     Lie Down</Text>
        <Button size="sm" text="Start!" onPress={() => { navigation.navigate("Lie"); }} style={{ flexDirection: 'row', marginBottom: 50 }}/>

    </SectionContent>                                                        
  </Section>

  <Section height={250}> 
       <SectionImage height={130}  source={require('../../assets/come.jpg')} />
    <SectionContent padding={35}>
        <Text style={{ flexDirection: 'row', marginBottom: 13 }} fontWeight="bold">     Come When Called</Text>
        <Button size="sm" text="Start!" onPress={() => { navigation.navigate("Come"); }} style={{ flexDirection: 'row', marginBottom: 50 }}/>

        

    </SectionContent>                                                        
  </Section>

  <Section height={250}> 
       <SectionImage height={130}  source={require('../../assets/stay.jpg')} />
    <SectionContent padding={35}>
        <Text style={{ flexDirection: 'row', marginBottom: 13 }} fontWeight="bold">     Stay</Text>
        <Button size="sm" text="Start!" onPress={() => { navigation.navigate("Stay"); }} style={{ flexDirection: 'coloum', marginBottom: 50 }}/>

        

    </SectionContent>                                                        
  </Section>

      </ScrollView>
    </Layout>
  );
}
