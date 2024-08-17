import { Image, Text, View } from '@tarojs/components'
import { getCurrentInstance, useLoad } from '@tarojs/taro'
import { useEffect, useState } from 'react'
// taro的静态资源只能通过变量的方式引入或require的方式，直接写在jsx的节点中会在打包过程中，路径会变找不到
import playerUrl from '../../assets/play_guitar.jpg'
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
      <Image src={playerUrl} />
      {blogTitle === 'afeng' && <Text>afeng</Text> || <Text>123</Text>}
    </View>
  )
}
