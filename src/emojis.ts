// remove duplicates from the array

// export const emojis = [
//   '😀',
//   '😃',
//   '😄',
//   '😁',
//   '😆',
//   '😅',
//   '😂',
//   '🤣',
//   '☺️',
//   '😊',
//   '😇',
//   '🙂',
//   '🙃',
//   '😉',
//   '😌',
//   '😍',
//   '🥰',
//   '😘',
//   '😗',
//   '😙',
//   '😚',
//   '😋',
//   '🤤',
//   '😛',
//   '😝',
//   '😜',
//   '🤪',
//   '🤨',
//   '🧐',
//   '🤓',
//   '😎',
//   '🥸',
//   '🤩',
//   '🥳',
//   '😏',
//   '😒',
//   '😞',
//   '😔',
//   '😟',
//   '😕',
//   '🙁',
//   '☹️',
//   '😣',
//   '😖',
//   '😫',
//   '😩',
//   '🥺',
//   '😢',
//   '😭',
//   '😤',
//   '😠',
//   '🤬',
//   '😷',
//   '🤒',
//   '🤕',
//   '🤢',
//   '🤮',
//   '🥴',
//   '😵',
//   '🤯',
//   '🤪',
//   '🥵',
//   '🥶',
//   '😱',
//   '😨',
//   '😰',
//   '😥',
//   '😓',
//   '🤗',
//   '🤔',
//   '🤭',
//   '🤫',
//   '🤥',
//   '😶',
//   '😐',
//   '😑',
//   '😬',
//   '🙄',
//   '😯',
//   '😴',
//   '🥱',
//   '😷',
//   '🥺',
//   '👋',
//   '🤚',
//   '🖐️',
//   '✋',
//   '🖖',
//   '👌',
//   '🤏',
//   '✌️',
//   '🤞',
//   '🤟',
//   '🤘',
//   '🤙',
//   '👈',
//   '👉',
//   '👆',
//   '🖕',
//   '👇',
//   '☝️',
//   '👍',
//   '👎',
//   '✊',
//   '👊',
//   '🤛',
//   '🤜',
//   '👏',
//   '🙌',
//   '👐',
//   '🤲',
//   '🤝',
//   '🙏',
//   '✍️',
//   '💅',
//   '🤳',
//   '💪',
//   '🦾',
//   '🦵',
//   '🦶',
//   '👂',
//   '🦻',
//   '👃',
//   '🫀',
//   '🫁',
//   '🧠',
//   '🦷',
//   '🦴',
//   '👀',
//   '👁️',
//   '👅',
//   '👄',
//   '💋',
//   '🩸',
//   '🔥',
//   '💧',
//   '💦',
//   '🌊',
//   '🍏',
//   '🍎',
//   '🍐',
//   '🍊',
//   '🍋',
//   '🍌',
//   '🍉',
//   '🍇',
//   '🍓',
//   '🍈',
//   '🍒',
//   '🍑',
//   '🥭',
//   '🍍',
//   '🥥',
//   '🥝',
//   '🍅',
//   '🍆',
//   '🥑',
//   '🥦',
//   '🥬',
//   '🥒',
//   '🌶️',
//   '🌽',
//   '🥕',
//   '🧄',
//   '🧅',
//   '🥔',
//   '🍠',
//   '🥐',
//   '🥖',
//   '🥨',
//   '🥯',
//   '🥞',
//   '🧇',
//   '🧀',
//   '🍖',
//   '🍗',
//   '🥩',
//   '🥓',
//   '🍔',
//   '🍟',
//   '🍕',
//   '🌭',
//   '🥪',
//   '🌮',
//   '🌯',
//   '🥗',
//   '🥘',
//   '🥫',
//   '🍝',
//   '🍜',
//   '🍲',
//   '🍛',
//   '🍣',
//   '🍱',
//   '🍤',
//   '🍢',
//   '🍡',
//   '🥟',
//   '🥠',
//   '🥡',
//   '🦪',
//   '🍦',
//   '🍧',
//   '🍨',
//   '🍩',
//   '🍪',
//   '🎂',
//   '🍰',
//   '🧁',
//   '🥧',
//   '🍫',
//   '🍬',
//   '🍭',
//   '🍮',
//   '🍯',
//   '🍼',
//   '🥛',
//   '☕',
//   '🍵',
//   '🍶',
//   '🍾',
//   '🍷',
//   '🍸',
//   '🍹',
//   '🍺',
//   '🍻',
//   '🥂',
//   '🥃',
//   '🥤',
//   '🧃',
//   '🧉',
//   '🧊',
//   '🥢',
//   '🍽️',
//   '🍴',
//   '🥄',
//   '🔪',
//   '🏺',
//   '🌸',
//   '💐',
//   '🌷',
//   '🌹',
//   '🥀',
//   '🌺',
//   '🌻',
//   '🌼',
//   '🌿',
//   '🍀',
//   '🍁',
//   '🍂',
//   '🍃',
//   '🍄',
//   '🌰',
//   '🐶',
//   '🐱',
//   '🐭',
//   '🐹',
//   '🐰',
//   '🦊',
//   '🐻',
//   '🐼',
//   '🐨',
//   '🐯',
//   '🦁',
//   '🐮',
//   '🐷',
//   '🐽',
//   '🐸',
//   '🐵',
//   '🙈',
//   '🙉',
//   '🙊',
//   '🦍',
//   '🦧',
//   '🐒',
//   '🐔',
//   '🐧',
//   '🐦',
//   '🐤',
//   '🐣',
//   '🐥',
//   '🦆',
//   '🦢',
//   '🦉',
//   '🦚',
//   '🦜',
//   '🐸',
//   '🐊',
//   '🐢',
//   '🦕',
//   '🦖',
//   '🦔',
//   '🐿️',
//   '🐇',
//   '🦝',
//   '🦨',
//   '🦦',
//   '🦥',
//   '🐀',
//   '🐁',
//   '🐭',
//   '😀',
//   '😃',
//   '😄',
//   '😁',
//   '😆',
//   '😅',
//   '😂',
//   '🤣',
//   '😊',
//   '😇',
//   '🙂',
//   '🙃',
//   '😉',
//   '😌',
//   '😍',
//   '🥰',
//   '😘',
//   '😗',
//   '😙',
//   '😚',
//   '😋',
//   '😛',
//   '😝',
//   '😜',
//   '🤪',
//   '🤨',
//   '🧐',
//   '🤓',
//   '😎',
//   '🤩',
//   '🥳',
//   '😏',
//   '😒',
//   '😞',
//   '😔',
//   '😟',
//   '😕',
//   '🙁',
//   '☹️',
//   '😣',
//   '😖',
//   '😫',
//   '😩',
//   '🥺',
//   '😢',
//   '😭',
//   '😤',
//   '😠',
//   '😡',
//   '🤬',
//   '🤯',
//   '😳',
//   '🥵',
//   '🥶',
//   '😱',
//   '😨',
//   '😰',
//   '😥',
//   '😓',
//   '🤗',
//   '🤔',
//   '🤭',
//   '🤫',
//   '🤥',
//   '😶',
//   '😐',
//   '😑',
//   '😬',
//   '🙄',
//   '😮',
//   '🤥',
//   '🤢',
//   '🤮',
//   '🤧',
//   '😷',
//   '🥴',
//   '🥱',
//   '🤠',
//   '🥸',
//   '😈',
//   '👿',
//   '👹',
//   '👺',
//   '💀',
//   '👻',
//   '👽',
//   '🤖',
//   '💩',
//   '🙈',
//   '🙉',
//   '🙊',
//   '🦍',
//   '🦧',
//   '🐒',
//   '🐔',
//   '🐧',
//   '🐦',
//   '🐤',
//   '🐣',
//   '🐥',
//   '🦆',
//   '🦢',
//   '🦉',
//   '🦚',
//   '🦜',
//   '🐊',
//   '🐢',
//   '🦕',
//   '🦖',
//   '🦔',
//   '🐿️',
//   '🐇',
//   '🦝',
//   '🦨',
//   '🦦',
//   '🦥',
//   '🐀',
//   '🐁',
//   '🐭',
//   '🐻',
//   '🐼',
//   '🐨',
//   '🐯',
//   '🦁',
//   '🐮',
//   '🐷',
//   '🐽',
//   '🐹',
//   '🐰',
//   '🦊',
//   '🐻',
//   '🐼',
//   '🐨',
//   '🐯',
//   '🦁',
//   '🐮',
//   '🐷',
//   '🐽',
//   '🐸',
//   '🐵',
//   '🙈',
//   '🙉',
//   '🙊',
//   '🦍',
//   '🦧',
//   '🐒',
//   '🐔',
//   '🐧',
//   '🐦',
//   '🐤',
//   '🐣',
//   '🐥',
//   '🦆',
//   '🦢',
//   '🦉',
//   '🦚',
//   '🦜',
//   '🐸',
//   '🐊',
//   '🐢',
//   '🦕',
//   '🦖',
//   '🦔',
//   '🐿️',
//   '🐇',
//   '🦝',
//   '🦨',
//   '🦦',
//   '🦥',
//   '🐀',
//   '🐁',
//   '🐭',
//   '🐹',
//   '🐰',
//   '🦊',
//   '🐻',
//   '🐼',
//   '🐨',
//   '🐯',
//   '🦁',
//   '🐮',
//   '🐷',
//   '🐽',
//   '🐸',
//   '🐵',
//   '🙈',
//   '🙉',
//   '🙊',
//   '🦍',
//   '🦧',
//   '🐒',
//   '🐔',
//   '🐧',
//   '🐦',
//   '🐤',
//   '🐣',
//   '🐥',
//   '🦆',
//   '🦢',
//   '🦉',
//   '🦚',
//   '🦜',
//   '🐸',
//   '🐊',
//   '🐢',
//   '🦕',
//   '🦖',
//   '🦔',
//   '🐿️',
//   '🐇',
//   '🦝',
//   '🦨',
//   '🦦',
//   '🦥',
//   '🐀',
//   '🐁',
//   '🐭',
//   '🐹',
//   '🐰',
//   '🦊',
//   '🐻',
//   '🐼',
//   '🐨',
//   '🐯',
//   '🦁',
//   '🐮',
//   '🐷',
//   '🐽',
//   '🐸',
//   '🐵',
//   '🙈',
//   '🙉',
//   '🙊',
//   '🦍',
//   '🦧',
//   '🐒',
//   '🐔',
//   '🐧',
//   '🐦',
//   '🐤',
//   '🐣',
//   '🐥',
//   '🦆',
//   '🦢',
//   '🦉',
//   '🦚',
//   '🦜',
//   '🐸',
//   '🐊',
//   '🐢',
//   '🦕',
//   '🦖',
//   '🦔',
//   '🐿️',
//   '🐇',
//   '🦝',
//   '🦨',
//   '🦦',
//   '🦥',
//   '🐀',
//   '🐁',
//   '🐭',
//   '🐹',
//   '🐰',
//   '🦊',
//   '🐻',
//   '🐼',
//   '🐨',
//   '🐯',
//   '🦁',
//   '🐮',
//   '🐷',
//   '🐽',
//   '🐸',
//   '🐵',
//   '🙈',
//   '🙉',
// ];

export const emojis = [
  '😀',
  '😁',
  '😂',
  '😃',
  '😄',
  '😅',
  '😆',
  '😇',
  '😈',
  '👿',
  '😉',
  '😊',
  '☺️',
  '😋',
  '😌',
  '😍',
  '😎',
  '😏',
  '😐',
  '😑',
  '😒',
  '😓',
  '😔',
  '😕',
  '😖',
  '😗',
  '😘',
  '😙',
  '😚',
  '😛',
  '😜',
  '😝',
  '😞',
  '😟',
  '😠',
  '😡',
  '😢',
  '😣',
  '😤',
  '😥',
  '😦',
  '😧',
  '😨',
  '😩',
  '😪',
  '😫',
  '😬',
  '😭',
  '😮',
  '😯',
  '😰',
  '😱',
  '😲',
  '😳',
  '😴',
  '😵',
  '😶',
  '😷',
  '😸',
  '😹',
  '😺',
  '😻',
  '😼',
  '😽',
  '😾',
  '😿',
  '🙀',
  '👣',
  '👤',
  '👥',
  '👶',
  '👶🏻',
  '👶🏼',
  '👶🏽',
  '👶🏾',
  '👶🏿',
  '👦',
  '👦🏻',
  '👦🏼',
  '👦🏽',
  '👦🏾',
  '👦🏿',
  '👧',
  '👧🏻',
  '👧🏼',
  '👧🏽',
  '👧🏾',
  '👧🏿',
  '👨',
  '👨🏻',
  '👨🏼',
  '👨🏽',
  '👨🏾',
  '👨🏿',
  '👩',
  '👩🏻',
  '👩🏼',
  '👩🏽',
  '👩🏾',
  '👩🏿',
  '👪',
  '👨‍👩‍👧',
  '👨‍👩‍👧‍👦',
  '👨‍👩‍👦‍👦',
  '👨‍👩‍👧‍👧',
  '👩‍👩‍👦',
  '👩‍👩‍👧',
  '👩‍👩‍👧‍👦',
  '👩‍👩‍👦‍👦',
  '👩‍👩‍👧‍👧',
  '👨‍👨‍👦',
  '👨‍👨‍👧',
  '👨‍👨‍👧‍👦',
  '👨‍👨‍👦‍👦',
  '👨‍👨‍👧‍👧',
  '👫',
  '👬',
  '👭',
  '👯',
  '👰',
  '👰🏻',
  '👰🏼',
  '👰🏽',
  '👰🏾',
  '👰🏿',
  '👱',
  '👱🏻',
  '👱🏼',
  '👱🏽',
  '👱🏾',
  '👱🏿',
  '👲',
  '👲🏻',
  '👲🏼',
  '👲🏽',
  '👲🏾',
  '👲🏿',
  '👳',
  '👳🏻',
  '👳🏼',
  '👳🏽',
  '👳🏾',
  '👳🏿',
  '👴',
  '👴🏻',
  '👴🏼',
  '👴🏽',
  '👴🏾',
  '👴🏿',
  '👵',
  '👵🏻',
  '👵🏼',
  '👵🏽',
  '👵🏾',
  '👵🏿',
  '👮',
  '👮🏻',
  '👮🏼',
  '👮🏽',
  '👮🏾',
  '👮🏿',
  '👷',
  '👷🏻',
  '👷🏼',
  '👷🏽',
  '👷🏾',
  '👷🏿',
  '👸',
  '👸🏻',
  '👸🏼',
  '👸🏽',
  '👸🏾',
  '👸🏿',
  '💂',
  '💂🏻',
  '💂🏼',
  '💂🏽',
  '💂🏾',
  '💂🏿',
  '👼',
  '👼🏻',
  '👼🏼',
  '👼🏽',
  '👼🏾',
  '👼🏿',
  '🎅',
  '🎅🏻',
  '🎅🏼',
  '🎅🏽',
  '🎅🏾',
  '🎅🏿',
  '👻',
  '👹',
  '👺',
  '💩',
  '💀',
  '👽',
  '👾',
  '🙇',
  '🙇🏻',
  '🙇🏼',
  '🙇🏽',
  '🙇🏾',
  '🙇🏿',
  '💁',
  '💁🏻',
  '💁🏼',
  '💁🏽',
  '💁🏾',
  '💁🏿',
  '🙅',
  '🙅🏻',
  '🙅🏼',
  '🙅🏽',
  '🙅🏾',
  '🙅🏿',
  '🙆',
  '🙆🏻',
  '🙆🏼',
  '🙆🏽',
  '🙆🏾',
  '🙆🏿',
  '🙋',
  '🙋🏻',
  '🙋🏼',
  '🙋🏽',
  '🙋🏾',
  '🙋🏿',
  '🙎',
  '🙎🏻',
  '🙎🏼',
  '🙎🏽',
  '🙎🏾',
  '🙎🏿',
  '🙍',
  '🙍🏻',
  '🙍🏼',
  '🙍🏽',
  '🙍🏾',
  '🙍🏿',
  '💆',
  '💆🏻',
  '💆🏼',
  '💆🏽',
  '💆🏾',
  '💆🏿',
  '💇',
  '💇🏻',
  '💇🏼',
  '💇🏽',
  '💇🏾',
  '💇🏿',
  '💑',
  '👩‍❤️‍👩',
  '👨‍❤️‍👨',
  '💏',
  '👩‍❤️‍💋‍👩',
  '👨‍❤️‍💋‍👨',
  '🙌',
  '🙌🏻',
  '🙌🏼',
  '🙌🏽',
  '🙌🏾',
  '🙌🏿',
  '👏',
  '👏🏻',
  '👏🏼',
  '👏🏽',
  '👏🏾',
  '👏🏿',
  '👂',
  '👂🏻',
  '👂🏼',
  '👂🏽',
  '👂🏾',
  '👂🏿',
  '👀',
  '👃',
  '👃🏻',
  '👃🏼',
  '👃🏽',
  '👃🏾',
  '👃🏿',
  '👄',
  '💋',
  '👅',
  '💅',
  '💅🏻',
  '💅🏼',
  '💅🏽',
  '💅🏾',
  '💅🏿',
  '👋',
  '👋🏻',
  '👋🏼',
  '👋🏽',
  '👋🏾',
  '👋🏿',
  '👍',
  '👍🏻',
  '👍🏼',
  '👍🏽',
  '👍🏾',
  '👍🏿',
  '👎',
  '👎🏻',
  '👎🏼',
  '👎🏽',
  '👎🏾',
  '👎🏿',
  '☝',
  '☝🏻',
  '☝🏼',
  '☝🏽',
  '☝🏾',
  '☝🏿',
  '👆',
  '👆🏻',
  '👆🏼',
  '👆🏽',
  '👆🏾',
  '👆🏿',
  '👇',
  '👇🏻',
  '👇🏼',
  '👇🏽',
  '👇🏾',
  '👇🏿',
  '👈',
  '👈🏻',
  '👈🏼',
  '👈🏽',
  '👈🏾',
  '👈🏿',
  '👉',
  '👉🏻',
  '👉🏼',
  '👉🏽',
  '👉🏾',
  '👉🏿',
  '👌',
  '👌🏻',
  '👌🏼',
  '👌🏽',
  '👌🏾',
  '👌🏿',
  '✌',
  '✌🏻',
  '✌🏼',
  '✌🏽',
  '✌🏾',
  '✌🏿',
  '👊',
  '👊🏻',
  '👊🏼',
  '👊🏽',
  '👊🏾',
  '👊🏿',
  '✊',
  '✊🏻',
  '✊🏼',
  '✊🏽',
  '✊🏾',
  '✊🏿',
  '✋',
  '✋🏻',
  '✋🏼',
  '✋🏽',
  '✋🏾',
  '✋🏿',
  '💪',
  '💪🏻',
  '💪🏼',
  '💪🏽',
  '💪🏾',
  '💪🏿',
  '👐',
  '👐🏻',
  '👐🏼',
  '👐🏽',
  '👐🏾',
  '👐🏿',
  '🙏',
  '🙏🏻',
  '🙏🏼',
  '🙏🏽',
  '🙏🏾',
  '🙏🏿',
  '🌱',
  '🌲',
  '🌳',
  '🌴',
  '🌵',
  '🌷',
  '🌸',
  '🌹',
  '🌺',
  '🌻',
  '🌼',
  '💐',
  '🌾',
  '🌿',
  '🍀',
  '🍁',
  '🍂',
  '🍃',
  '🍄',
  '🌰',
  '🐀',
  '🐁',
  '🐭',
  '🐹',
  '🐂',
  '🐃',
  '🐄',
  '🐮',
  '🐅',
  '🐆',
  '🐯',
  '🐇',
  '🐰',
  '🐈',
  '🐱',
  '🐎',
  '🐴',
  '🐏',
  '🐑',
  '🐐',
  '🐓',
  '🐔',
  '🐤',
  '🐣',
  '🐥',
  '🐦',
  '🐧',
  '🐘',
  '🐪',
  '🐫',
  '🐗',
  '🐖',
  '🐷',
  '🐽',
  '🐕',
  '🐩',
  '🐶',
  '🐺',
  '🐻',
  '🐨',
  '🐼',
  '🐵',
  '🙈',
  '🙉',
  '🙊',
  '🐒',
  '🐉',
  '🐲',
  '🐊',
  '🐍',
  '🐢',
  '🐸',
  '🐋',
  '🐳',
  '🐬',
  '🐙',
  '🐟',
  '🐠',
  '🐡',
  '🐚',
  '🐌',
  '🐛',
  '🐜',
  '🐝',
  '🐞',
  '🐾',
  '⚡️',
  '🔥',
  '🌙',
  '☀️',
  '⛅️',
  '☁️',
  '💧',
  '💦',
  '☔️',
  '💨',
  '❄️',
  '🌟',
  '⭐️',
  '🌠',
  '🌄',
  '🌅',
  '🌈',
  '🌊',
  '🌋',
  '🌌',
  '🗻',
  '🗾',
  '🌐',
  '🌍',
  '🌎',
  '🌏',
  '🌑',
  '🌒',
  '🌓',
  '🌔',
  '🌕',
  '🌖',
  '🌗',
  '🌘',
  '🌚',
  '🌝',
  '🌛',
  '🌜',
  '🌞',
  '🍅',
  '🍆',
  '🌽',
  '🍠',
  '🍇',
  '🍈',
  '🍉',
  '🍊',
  '🍋',
  '🍌',
  '🍍',
  '🍎',
  '🍏',
  '🍐',
  '🍑',
  '🍒',
  '🍓',
  '🍔',
  '🍕',
  '🍖',
  '🍗',
  '🍘',
  '🍙',
  '🍚',
  '🍛',
  '🍜',
  '🍝',
  '🍞',
  '🍟',
  '🍡',
  '🍢',
  '🍣',
  '🍤',
  '🍥',
  '🍦',
  '🍧',
  '🍨',
  '🍩',
  '🍪',
  '🍫',
  '🍬',
  '🍭',
  '🍮',
  '🍯',
  '🍰',
  '🍱',
  '🍲',
  '🍳',
  '🍴',
  '🍵',
  '☕️',
  '🍶',
  '🍷',
  '🍸',
  '🍹',
  '🍺',
  '🍻',
  '🍼',
  '🎀',
  '🎁',
  '🎂',
  '🎃',
  '🎄',
  '🎋',
  '🎍',
  '🎑',
  '🎆',
  '🎇',
  '🎉',
  '🎊',
  '🎈',
  '💫',
  '✨',
  '💥',
  '🎓',
  '👑',
  '🎎',
  '🎏',
  '🎐',
  '🎌',
  '🏮',
  '💍',
  '❤️',
  '💔',
  '💌',
  '💕',
  '💞',
  '💓',
  '💗',
  '💖',
  '💘',
  '💝',
  '💟',
  '💜',
  '💛',
  '💚',
  '💙',
  '🏃',
  '🏃🏻',
  '🏃🏼',
  '🏃🏽',
  '🏃🏾',
  '🏃🏿',
  '🚶',
  '🚶🏻',
  '🚶🏼',
  '🚶🏽',
  '🚶🏾',
  '🚶🏿',
  '💃',
  '💃🏻',
  '💃🏼',
  '💃🏽',
  '💃🏾',
  '💃🏿',
  '🚣',
  '🚣🏻',
  '🚣🏼',
  '🚣🏽',
  '🚣🏾',
  '🚣🏿',
  '🏊',
  '🏊🏻',
  '🏊🏼',
  '🏊🏽',
  '🏊🏾',
  '🏊🏿',
  '🏄',
  '🏄🏻',
  '🏄🏼',
  '🏄🏽',
  '🏄🏾',
  '🏄🏿',
  '🛀',
  '🛀🏻',
  '🛀🏼',
  '🛀🏽',
  '🛀🏾',
  '🛀🏿',
  '🏂',
  '🎿',
  '⛄️',
  '🚴',
  '🚴🏻',
  '🚴🏼',
  '🚴🏽',
  '🚴🏾',
  '🚴🏿',
  '🚵',
  '🚵🏻',
  '🚵🏼',
  '🚵🏽',
  '🚵🏾',
  '🚵🏿',
  '🏇',
  '🏇🏻',
  '🏇🏼',
  '🏇🏽',
  '🏇🏾',
  '🏇🏿',
  '⛺️',
  '🎣',
  '⚽️',
  '🏀',
  '🏈',
  '⚾️',
  '🎾',
  '🏉',
  '⛳️',
  '🏆',
  '🎽',
  '🏁',
  '🎹',
  '🎸',
  '🎻',
  '🎷',
  '🎺',
  '🎵',
  '🎶',
  '🎼',
  '🎧',
  '🎤',
  '🎭',
  '🎫',
  '🎩',
  '🎪',
  '🎬',
  '🎨',
  '🎯',
  '🎱',
  '🎳',
  '🎰',
  '🎲',
  '🎮',
  '🎴',
  '🃏',
  '🀄️',
  '🎠',
  '🎡',
  '🎢',
  '🚃',
  '🚞',
  '🚂',
  '🚋',
  '🚝',
  '🚄',
  '🚅',
  '🚆',
  '🚇',
  '🚈',
  '🚉',
  '🚊',
  '🚌',
  '🚍',
  '🚎',
  '🚐',
  '🚑',
  '🚒',
  '🚓',
  '🚔',
  '🚨',
  '🚕',
  '🚖',
  '🚗',
  '🚘',
  '🚙',
  '🚚',
  '🚛',
  '🚜',
  '🚲',
  '🚏',
  '⛽️',
  '🚧',
  '🚦',
  '🚥',
  '🚀',
  '🚁',
  '✈️',
  '💺',
  '⚓️',
  '🚢',
  '🚤',
  '⛵️',
  '🚡',
  '🚠',
  '🚟',
  '🛂',
  '🛃',
  '🛄',
  '🛅',
  '💴',
  '💶',
  '💷',
  '💵',
  '🗽',
  '🗿',
  '🌁',
  '🗼',
  '⛲️',
  '🏰',
  '🏯',
  '🌇',
  '🌆',
  '🌃',
  '🌉',
  '🏠',
  '🏡',
  '🏢',
  '🏬',
  '🏭',
  '🏣',
  '🏤',
  '🏥',
  '🏦',
  '🏨',
  '🏩',
  '💒',
  '⛪️',
  '🏪',
  '🏫',
  '🇦🇺',
  '🇦🇹',
  '🇧🇪',
  '🇧🇷',
  '🇨🇦',
  '🇨🇱',
  '🇨🇳',
  '🇨🇴',
  '🇩🇰',
  '🇫🇮',
  '🇫🇷',
  '🇩🇪',
  '🇭🇰',
  '🇮🇳',
  '🇮🇩',
  '🇮🇪',
  '🇮🇱',
  '🇮🇹',
  '🇯🇵',
  '🇰🇷',
  '🇲🇴',
  '🇲🇾',
  '🇲🇽',
  '🇳🇱',
  '🇳🇿',
  '🇳🇴',
  '🇵🇭',
  '🇵🇱',
  '🇵🇹',
  '🇵🇷',
  '🇷🇺',
  '🇸🇦',
  '🇸🇬',
  '🇿🇦',
  '🇪🇸',
  '🇸🇪',
  '🇨🇭',
  '🇹🇷',
  '🇬🇧',
  '🇺🇸',
  '🇦🇪',
  '🇻🇳',
  '⌚️',
  '📱',
  '📲',
  '💻',
  '⏰',
  '⏳',
  '⌛️',
  '📷',
  '📹',
  '🎥',
  '📺',
  '📻',
  '📟',
  '📞',
  '☎️',
  '📠',
  '💽',
  '💾',
  '💿',
  '📀',
  '📼',
  '🔋',
  '🔌',
  '💡',
  '🔦',
  '📡',
  '💳',
  '💸',
  '💰',
  '💎',
  '🌂',
  '👝',
  '👛',
  '👜',
  '💼',
  '🎒',
  '💄',
  '👓',
  '👒',
  '👡',
  '👠',
  '👢',
  '👞',
  '👟',
  '👙',
  '👗',
  '👘',
  '👚',
  '👕',
  '👔',
  '👖',
  '🚪',
  '🚿',
  '🛁',
  '🚽',
  '💈',
  '💉',
  '💊',
  '🔬',
  '🔭',
  '🔮',
  '🔧',
  '🔪',
  '🔩',
  '🔨',
  '💣',
  '🚬',
  '🔫',
  '🔖',
  '📰',
  '🔑',
  '✉️',
  '📩',
  '📨',
  '📧',
  '📥',
  '📤',
  '📦',
  '📯',
  '📮',
  '📪',
  '📫',
  '📬',
  '📭',
  '📄',
  '📃',
  '📑',
  '📈',
  '📉',
  '📊',
  '📅',
  '📆',
  '🔅',
  '🔆',
  '📜',
  '📋',
  '📖',
  '📓',
  '📔',
  '📒',
  '📕',
  '📗',
  '📘',
  '📙',
  '📚',
  '📇',
  '🔗',
  '📎',
  '📌',
  '✂️',
  '📐',
  '📍',
  '📏',
  '🚩',
  '📁',
  '📂',
  '✒️',
  '✏️',
  '📝',
  '🔏',
  '🔐',
  '🔒',
  '🔓',
  '📣',
  '📢',
  '🔈',
  '🔉',
  '🔊',
  '🔇',
  '💤',
  '🔔',
  '🔕',
  '💭',
  '💬',
  '🚸',
  '🔍',
  '🔎',
  '🚫',
  '⛔️',
  '📛',
  '🚷',
  '🚯',
  '🚳',
  '🚱',
  '📵',
  '🔞',
  '🉑',
  '🉐',
  '💮',
  '㊙️',
  '㊗️',
  '🈴',
  '🈵',
  '🈲',
  '🈶',
  '🈚️',
  '🈸',
  '🈺',
  '🈷',
  '🈹',
  '🈳',
  '🈂',
  '🈁',
  '🈯️',
  '💹',
  '❇️',
  '✳️',
  '❎',
  '✅',
  '✴️',
  '📳',
  '📴',
  '🆚',
  '🅰',
  '🅱',
  '🆎',
  '🆑',
  '🅾',
  '🆘',
  '🆔',
  '🅿️',
  '🚾',
  '🆒',
  '🆓',
  '🆕',
  '🆖',
  '🆗',
  '🆙',
  '🏧',
  '♈️',
  '♉️',
  '♊️',
  '♋️',
  '♌️',
  '♍️',
  '♎️',
  '♏️',
  '♐️',
  '♑️',
  '♒️',
  '♓️',
  '🚻',
  '🚹',
  '🚺',
  '🚼',
  '♿️',
  '🚰',
  '🚭',
  '🚮',
  '▶️',
  '◀️',
  '🔼',
  '🔽',
  '⏩',
  '⏪',
  '⏫',
  '⏬',
  '➡️',
  '⬅️',
  '⬆️',
  '⬇️',
  '↗️',
  '↘️',
  '↙️',
  '↖️',
  '↕️',
  '↔️',
  '🔄',
  '↪️',
  '↩️',
  '⤴️',
  '⤵️',
  '🔀',
  '🔁',
  '🔂',
  '#⃣',
  '0⃣',
  '1⃣',
  '2⃣',
  '3⃣',
  '4⃣',
  '5⃣',
  '6⃣',
  '7⃣',
  '8⃣',
  '9⃣',
  '🔟',
  '🔢',
  '🔤',
  '🔡',
  '🔠',
  'ℹ️',
  '📶',
  '🎦',
  '🔣',
  '➕',
  '➖',
  '〰',
  '➗',
  '✖️',
  '✔️',
  '🔃',
  '™',
  '©',
  '®',
  '💱',
  '💲',
  '➰',
  '➿',
  '〽️',
  '❗️',
  '❓',
  '❕',
  '❔',
  '‼️',
  '⁉️',
  '❌',
  '⭕️',
  '💯',
  '🔚',
  '🔙',
  '🔛',
  '🔝',
  '🔜',
  '🌀',
  'Ⓜ️',
  '⛎',
  '🔯',
  '🔰',
  '🔱',
  '⚠️',
  '♨️',
  '♻️',
  '💢',
  '💠',
  '♠️',
  '♣️',
  '♥️',
  '♦️',
  '☑️',
  '⚪️',
  '⚫️',
  '🔘',
  '🔴',
  '🔵',
  '🔺',
  '🔻',
  '🔸',
  '🔹',
  '🔶',
  '🔷',
  '▪️',
  '▫️',
  '⬛️',
  '⬜️',
  '◼️',
  '◻️',
  '◾️',
  '◽️',
  '🔲',
  '🔳',
  '🕐',
  '🕑',
  '🕒',
  '🕓',
  '🕔',
  '🕕',
  '🕖',
  '🕗',
  '🕘',
  '🕙',
  '🕚',
  '🕛',
  '🕜',
  '🕝',
  '🕞',
  '🕟',
  '🕠',
  '🕡',
  '🕢',
  '🕣',
  '🕤',
  '🕥',
  '🕦',
  '🕧',
];