/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx20168edd4f442638',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4a36aa4d9145e71576762e00c0deab3e',

  PROVINCE: '山西',
  CITY: '长治',

  USERS: [
    {
      // 想要发送的人的名字
      name: '王老板',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o76wX6mmfuFIjDA3ONY-AU2wtjgE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'bZ29iAZVKIip1DAKGv6MD_ak9HGp1XUz0paW2Y0Y95M',
      //gwMNfXw2ata9464KLNfK7p_33ff5Mf63ofG0X-d3aD0
      //j4jgxtSwJ27lpnn-hLphFtcIKJftRHlORONRZbUxh4E
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'kFtXrGNuIaEF5DcCjcyAGJ7Shq3NR05-s1pBx4MxytY',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o76wX6u3kQ6LAOQGhnex6BpFn3pE',
    }
  ],

}

module.exports = USER_CONFIG

