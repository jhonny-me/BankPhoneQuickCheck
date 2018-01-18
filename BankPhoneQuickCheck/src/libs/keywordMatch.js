/**
 * Created by johnny on 17/01/2018.
 */

require('string_score')
import product from 'cartesian-product'
import _ from 'lodash'
import pinyinlite from 'pinyinlite/index_full';

const keywordMatch = function (list, keyword) {
  var stringList = []
  for (const [i, value] of list.entries()) {
    stringList.push({
      index: i,
      value: `${value.name} ${value.phoneNumber}`
    })
  }
  const searchItems = stringList.map(stringObj => {
    return {
      index: stringObj.index,
      search: [stringObj.value, ..._.uniq(
        product(pinyinlite(stringObj.value).filter(p => p.length > 0))
          .map(item => item.join(' '))
      )],
    };
  });
  const scores = searchItems.map(item => {
    return {
      index: item.index,
      score: _.max(item.search.map(pinyin => pinyin.score(keyword))),
    };
  })

  return scores
    .filter(i => i.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(item => list[item.index])
}

export default keywordMatch
