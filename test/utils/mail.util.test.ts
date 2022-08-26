/*
 * @FilePath: /nx-comments-react/test/utils/mail.util.test.ts
 * @author: Wibus
 * @Date: 2022-08-24 20:43:50
 * @LastEditors: Wibus
 * @LastEditTime: 2022-08-26 14:24:47
 * Coding With IU
 */
import { describe, expect, it } from 'vitest'
import { mailAvatar } from '../../src/utils/mail.util'


describe('should', () => {
  it('return right avatar url', () => {
    expect(mailAvatar('1596355173@qq.com')).toEqual('https://cravatar.cn/avatar/99ef651c99da5806ef8645fdf1bee210')
  })
})