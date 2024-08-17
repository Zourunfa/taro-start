import { Button, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { FC, useState } from 'react'

const Blog: FC = () => {

  const [blogTitle, setBlogTitle] = useState<string>('afeng')

  return (
    <View>
      <Text>Blog</Text>
      <Button onClick={() => {
        Taro.navigateTo({
          url: '/pages/index/index?blogTitle=' + blogTitle
        })
      }}>跳转Index</Button>
    </View>
  )


}
export default Blog


/**
 * 三种跳转方法:
 * 
 * navaigateTo: 三个端都支持，weapp，h5，react-native
 * redirectTo: 没有记录上一页的历史
 * switchTab: 也支持三个端，
 * navagateBack:返回上一个页面
 * relaunch:关闭所有页面，并打开某个页面，开发中用的不多
 * getCurrentPages: 获取当前页面的参数
 */
