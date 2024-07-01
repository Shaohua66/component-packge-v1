export default {
  // 图标
  icon: {
    type: String,
    required: true
  },
  //   大小
  size: {
    type: String
  },
  //   旋转
  rotation: {
    type: [String, Number]
  },
  // 翻转
  flip: {
    type: [String, Number]
  },
  //   动画
  beat: Boolean,
  'beat-fade': Boolean,
  bounce: Boolean,
  fade: Boolean,
  shake: Boolean,
  spin: Boolean,
  'spin-reverse': Boolean,
  'spin-pulse': Boolean,
  //   自定义属性
  type: {
    type: String
  },
  color: {
    type: String
  }
}
