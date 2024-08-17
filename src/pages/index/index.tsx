import { Text, View } from '@tarojs/components'
import { getCurrentInstance, useLoad } from '@tarojs/taro'
import { useEffect, useState } from 'react'
import './index.scss'

export default function Index() {
  const [blogTitle, setBlogTitle] = useState<string>('')
  const { router } = getCurrentInstance();
  useEffect(() => {
    setBlogTitle(router!.params.blogTitle as string)
  })
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!12213</Text>
      <Text>{blogTitle}</Text>
    </View>
  )
}
