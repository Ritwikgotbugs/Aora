import {Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import FormField from '../../component/FormField'

const Create = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
    <ScrollView>
      <Text className="text-white text-3xl font-bold mx-4 mt-5">Create</Text>
      <FormField 
        title=""
        placeholder="Search in Bookmarks"
        keyboardType="default"
        otherStyles="mx-3"
      />

    </ScrollView>
    </SafeAreaView>
  )
}

export default Create